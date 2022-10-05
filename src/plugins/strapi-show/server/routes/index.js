module.exports = [
  {
    method: 'GET',
    path: '/get-item-keys/:key',
    handler: 'controllers.getItemKeys',
    config: {
      policies: [],
    },
  },
];
