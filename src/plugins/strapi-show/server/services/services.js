'use strict';

module.exports = ({ strapi }) => ({
  getItemKeys(key) {
    const keys = strapi.container.get(key).keys();
    return { [key]: keys}
  }
});
