import Knex = require("knex");
import { knex } from '../setting';

export type ContextType = {
  knex: Knex,
}

export const context = async ({req}: any) => {
  return {
    knex
  }
}
