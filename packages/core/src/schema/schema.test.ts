// This may be in a museum one day
// We like this one!!
// const schema = schema([
//   createTable("share")
//     .addColumn("id", "string")
//     .addColumn("name", "string")
//     .addColumn(
//       "usernames",
//       "string",
//       { optional: true, list: true }
//     ),
//   createTable("account")
//     .addColumn("id", "string")
//     .addColumn("name", "string")
//     .addColumn("shareId", "string", { references: "share.id" }),
// ]);

// const schema = createSchema({
//   enum: createEnum("one", "two", "three"),
//   share: createColumn("id", "string")
//     .addColumn("name", "string")
//     .addColumn("ref", "enum:enum")
//     .addColumn("usernames", "string", { optional: true, list: true }),
//   account: createColumn("id", "string")
//     .addColumn("name", "string")
//     .addColumn("shareId", "string", { references: "share.id" }),
// });

// const schema = createSchema({
//   share: [
//     createColumn("id", "string"),
//     createColumn("name", "string"),
//     createColumn("usernames", "string", { optional: true, list: true }),
//   ],
//   account: [
//     createColumn("id", "string"),
//     createColumn("name", "string"),
//     createColumn("shareId", "string", { references: "share.id" }),
//   ],
// });

// test("create schema", () => {
//   schema({
//     name: createColumn("id", "bigint").addColumn("age", "boolean"),
//   });
// });

// test("create enum", () => {
//   schema({
//     enummm: enumerable("ONE", "TWO", "THREE"),
//     name: createColumn("id", "bigint").addColumn("age", "enum:enummm"),
//   });
// });

// test("references", () => {
//   schema({
//     Person: createColumn("id", "string").addColumn("age", "int"),
//     Dog: createColumn("id", "string").addColumn("owner", "string", {
//       references: "Person.id",
//     }),
//   });
// });
