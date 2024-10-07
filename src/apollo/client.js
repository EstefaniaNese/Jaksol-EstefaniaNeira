import { ApolloClient, InMemoryCache } from '@apollo/client';
import machinesData from '../data/machines.json';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = `
  type HealthHistory {
    date: String
    health: Int
  }

  type Machine {
    id: ID
    name: String
    status: String
    health: Int
    healthHistory: [HealthHistory]
    lastMaintenance: String
  }

  type Query {
    machines: [Machine]
  }
`;

const resolvers = {
  Query: {
    machines: () => machinesData,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache(),
});

export default client;