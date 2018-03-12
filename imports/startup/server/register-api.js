import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';


const typeDefs = [
    ResolutionsSchema,
    UsersSchema
];


const resolvers = merge(ResolutionsResolvers, UsersResolvers);

console.log(resolvers);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({ schema });