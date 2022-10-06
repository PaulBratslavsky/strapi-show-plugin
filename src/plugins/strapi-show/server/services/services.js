'use strict';

function getRoutes() {
  const data =  strapi.server.listRoutes();
  const transformed = data.map(route => {
    return route.path;
  })
  return transformed;
}

module.exports = ({ strapi }) => ({
  getItemKeys(key) {
    if (key === "routes") return { [key]:  getRoutes()};
    return { [key]: strapi.container.get(key).keys() };
  }, 
  getContentType(key) {
    return strapi.contentType('admin::permission');
  }
});
