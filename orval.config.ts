import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'tags-split',
      target: 'generated/api.ts',
      client: 'swr',
      prettier: true,
      mock: true,
      override: {
        mock: {
          properties: {
            '/id/': () => faker.datatype.uuid(),
            '/joined|created/': () => faker.date.past(1),
          },
        },
      },
    },
    input: {
      target: '../openapi/openapi.yaml',
      // validation: true,
    },
  },
});
