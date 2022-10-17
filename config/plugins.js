module.exports = {
  'strapi-show': {
    enabled: true,
    resolve: './src/plugins/strapi-show'
  },

  'comments': {
    enabled: true,
    config: {
      enabledCollections: ["api::post.post"],
    },
  },


}