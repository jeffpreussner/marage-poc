import { Button } from './Button';

export default {
  // no title, to demonstrate autotitle
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    path: {
      options: ['/api/reminders'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    // parameters: {
    //   mirage: {
    //     // automatically log requests to browser console https://miragejs.com/api/classes/server/#logging
    //     logging: true,
    //     // customize when a request responds https://miragejs.com/docs/main-concepts/route-handlers/#timing
    //     timing: 1000,
    //     // override route handlers for the story https://miragejs.com/docs/main-concepts/route-handlers/
    //     handlers: {
    //       get: {
    //         '/api/user': 404, // status code
    //         '/api/items': [204, {}, { items: [] }], // arguments for Response https://miragejs.com/api/classes/response/
    //       },
    //       post: {
    //         'api/task': { task: {} }, // body for Response
    //       },
    //     },
    //     // data to seed Mirage ORM https://miragejs.com/docs/main-concepts/fixtures/
    //     fixtures: null,
    //     // pass in a custom Mirage server instance to override the global setting
    //     instance: null,
    //     // created seeded data from Factories defined within your makeServer function,
    //     // with the key names corresponding to Factory names.
    //     factorySeeds: {
    //       // create 2 addresses with the same traits.
    //       address: [
    //         { traits: ['withRecipient', 'withCompleteAddress'], count: 2 },
    //       ],
    //       // create a single cart item with no specific traits
    //       cart: 1,
    //       // create 2 users that contain override values
    //       user: [
    //         {
    //           traits: ['withSomeTrait', 'withOtherTrait'],
    //           // override specific attribute swith the `attrs` property
    //           attrs: {
    //             name: 'R2D2',
    //             gender: 'Male',
    //           },
    //         },
    //         {
    //           traits: ['withSomeTrait', 'withOtherTrait'],
    //           attrs: {
    //             name: 'BB8',
    //             gender: 'Male',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    onClick: () => fetch('/api/reminders'),
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
