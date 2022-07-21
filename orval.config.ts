import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'tags-split',
      target: ' generated/api.ts',
      client: 'swr',
      mock: true,
      prettier: true,
    },
    input: {
      target: '../openapi/openapi.yaml',
      validation: true,
    },
  },
});
