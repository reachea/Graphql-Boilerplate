import { TestResolver } from "./resolver/test/TestResolver";
import { SchemeLoader } from "./SchemaLoader";

export const typeDefs = SchemeLoader();

export const resolvers = [
  TestResolver
]

