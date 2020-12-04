const { gql } = require('apollo-server-express');
const root = require('./_root');
const helloworld = require('./helloworld');
const banks = require('./banks');
const users = require('./users');

const typeDefs = gql`${[
    root.schemas,
    helloworld.schemas,
    banks.schemas,
    users.schemas
].reduce((acc, schemas) => { return acc + schemas })}`;

const resolvers = {
    ...root.resolvers,
    ...helloworld.resolvers,
    ...banks.resolvers,
    ...users.resolvers
};

module.exports = {
    typeDefs,
    resolvers
};
