'use strict';

module.exports = ({ strapi }) => ({
  async getItemKeys(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-show")
        .service("services")
        . getItemKeys(ctx.params.key);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});

