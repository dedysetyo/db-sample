// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ListSettings } = initSchema(schema);

export {
  ListSettings
};