const queries = require('./queries');

const rootSchema = ` 
  schema {
    query: Query
  }
`;

module.exports = {
    resolvers: {
        ...queries.resolvers,
    },
    schemas: [
        queries.schemas,
        rootSchema
    ].reduce((acc, types) => { return acc + types })
}
