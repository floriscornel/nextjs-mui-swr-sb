import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';

import { getGroupsMSW } from '../generated/groups/groups.msw';

async function initMocks() {
  if (typeof window === 'undefined') {
    const server = setupServer(...getGroupsMSW());
    server.listen();
  } else {
    const worker = setupWorker(...getGroupsMSW());
    worker.start();
  }
  console.log('Enabled API mocking!');
}

initMocks();
