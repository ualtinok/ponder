import { writeFile } from "node:fs/promises";

import type { DbSchema } from "../buildDbSchema";
import { CONFIG } from "../config";
import { logger } from "../logger";
import { formatPrettier } from "../preflight";
import type { PonderConfig } from "../readUserConfig";
import { SourceKind } from "../readUserConfig";

const header = `
/* Autogenerated file. Do not edit manually. */
`;

const generateContextType = async (
  config: PonderConfig,
  dbSchema: DbSchema
) => {
  const entityNames = dbSchema.tables.map((table) => table.name);
  const contractNames = config.sources
    .filter((source) => source.kind === SourceKind.EVM)
    .map((source) => source.name);

  const entityQueryBuilderTypes = entityNames
    .map((entityName) => `${entityName}: Knex.QueryBuilder<${entityName}>;`)
    .join("");

  const contractTypes = contractNames
    .map((contractName) => `${contractName}: ${contractName};`)
    .join("");

  const imports = `
  import type { Knex } from "knex";
  
  import type { ${entityNames.join(", ")} } from "./schema";
  import type { ${contractNames.join(", ")} } from "./typechain";
  `;

  const body = `
  export type Context = {
    entities: {
      ${entityQueryBuilderTypes}
    }
    contracts: {
      ${contractTypes}
    }
  }
  `;

  const final = formatPrettier(header + imports + body);

  await writeFile(`${CONFIG.generatedDir}/context.d.ts`, final, "utf8");

  logger.info(`\x1b[36m${"GENERATED CONTEXT TYPES"}\x1b[0m`); // magenta
};

export { generateContextType };
