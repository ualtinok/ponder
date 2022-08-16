import type { GraphQLSchema } from "graphql";
import { printSchema } from "graphql";
import { writeFile } from "node:fs/promises";

import { CONFIG } from "../config";
import { logger } from "../logger";
import { formatPrettier } from "../preflight";

const header = `
""" Autogenerated file. Do not edit manually. """
`;

const generateSchema = async (gqlSchema: GraphQLSchema) => {
  const body = printSchema(gqlSchema);

  const final = formatPrettier(header + body, { parser: "graphql" });

  await writeFile(`${CONFIG.generatedDir}/schema.graphql`, final, "utf8");

  logger.info(`\x1b[36m${"GENERATED SCHEMA"}\x1b[0m`); // magenta
};

export { generateSchema };
