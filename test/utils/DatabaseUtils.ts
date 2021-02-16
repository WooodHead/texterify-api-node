import fetch from 'node-fetch';
import { TEST_APP_BASE_URL } from './TestConstants';

export const DatabasUtils = {
  cleanDatabase: () => {
    return fetch(`${TEST_APP_BASE_URL}/__cypress__/command`, {
      method: 'POST',
      body: JSON.stringify({ name: 'clean' }),
    });
  },

  seedDatabase: () => {
    return fetch(`${TEST_APP_BASE_URL}/__cypress__/command`, {
      method: 'POST',
      body: JSON.stringify({ name: 'load_seed_cli' }),
    });
  },
};
