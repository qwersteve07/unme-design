const withImages = require("next-images");
const compose = require("./next.compose");
// const withMDX = require("@next/mdx")();

module.exports = compose([[withImages]]);
