module.exports = [
  {
    method: 'GET',
    path: '/get-item-keys/:key',
    handler: 'controllers.getItemKeys',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/get-content-type/:key',
    handler: 'controllers.getContentType',
    config: {
      policies: [],
    }
  },
  {
    method: 'GET',
    path: '/get-controller-code/:key',
    handler: 'controllers.getControllerCode',
    config: {
      policies: [],
    }
  }
];
