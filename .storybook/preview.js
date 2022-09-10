// .storybook/preview.js

import { withServer } from 'storybook-mirage';
import { makeServer } from './server.js';

// optionally pass the server creator function to the decorator
export const decorators = [withServer(makeServer)];
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
