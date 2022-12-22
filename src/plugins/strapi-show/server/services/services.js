'use strict';
const path = require('path');
const fs = require('fs-extra');

function getRoutes() {
  const data = strapi.server.listRoutes();
  const transformed = data.map(route => {
    return route.path;
  })

  const filtered = transformed.map(route => {
    route.includes();
    return route
  })

  console.log(filtered);

  return filtered;
}

async function readFile(path = "") {
  const exists = await fs.exists(path);
  if (!exists) console.log("File does not exist");

  try {
    const output = await fs.readFile(path, "utf8");
    console.log(output)
    return output;
  } catch (err) {
    console.error(err)
  }
}

module.exports = ({ strapi }) => ({
  getItemKeys(key) {
    if (key === "routes") return { [key]: getRoutes() };
    return { [key]: strapi.container.get(key).keys() };
  },
  getContentType(key) {
    return strapi.contentType('admin::permission');
  },
  getControllerCode(key) {
    // console.log(key.includes('admin'));
    if (key.includes('admin')) console.log("found admin");
    else if (key.includes('api')) console.log("found api"); 
    else if (key.includes('plugin')) console.log("found api"); 
    else console.log("not found");  
    const root = path.resolve(__dirname);
    const test = path.resolve(root, `../../../../api/post/controllers/post.js`);
    console.log(test, "########### TEST ###########");
    readFile(test);
    return null
  }
});
