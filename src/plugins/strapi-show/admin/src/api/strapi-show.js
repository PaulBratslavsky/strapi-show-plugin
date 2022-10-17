import { request } from "@strapi/helper-plugin";

const strapiShowRequests = {
  getItemKeys: async (key) => {
    return await request(`/strapi-show/get-item-keys/${key}`, {
      method: "GET",
    });
  },
  getContentType: async (key) => {
    return await request(`/strapi-show/get-content-type/:key${key}`, {
      method: "GET",
    });
  },
  getControllerCode: async (key) => {
    return await request(`/strapi-show/get-controller-code/:key${key}`, {
      method: "GET",
    });
  },
};

export default strapiShowRequests;