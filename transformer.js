// file: transformer.js

const cleanupSvg = require('./cleanup-svg');

const upstreamTransformer = require("metro/src/transformer");

// const typescriptTransformer = require("react-native-typescript-transformer");
// const typescriptExtensions = ["ts", "tsx"];

const svgExtensions = ["svgx"]

// function cleanUpSvg(text) {
//   text = text.replace(/width="([#0-9]+)px"/gi, "");
//    text = text.replace(/height="([#0-9]+)px"/gi, "");
//    return text;
// }

function fixRenderingBugs(content) {
  // content = cleanUpSvg(content); // cleanupSvg removes width and height attributes from svg
  return "module.exports = `" + content + "`";
}


module.exports.transform = function ({ src, filename, options }) {
  // if (typescriptExtensions.some(ext => filename.endsWith("." + ext))) {
  //  return typescriptTransformer.transform({ src, filename, options })
  // }

  if (svgExtensions.some(ext => filename.endsWith("." + ext))) {
    return upstreamTransformer.transform({
      src: fixRenderingBugs(src),
      filename,
      options
    })
  }

  return upstreamTransformer.transform({ src, filename, options });
}