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
  async getContentType(ctx) {
    try {
      ctx.body = await strapi
        .plugin("strapi-show")
        .service("services")
        .getContentType(ctx.params.key);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async getControllerCode(ctx) {
    console.log("########## FROM GET CONTROLLER #############")
    try {
      ctx.body = await strapi
        .plugin("strapi-show")
        .service("services")
        .getControllerCode(ctx.params.key);
    } catch (err) {
      ctx.throw(500, err);
    }
  }
});

