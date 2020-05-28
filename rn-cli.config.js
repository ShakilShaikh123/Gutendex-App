module.exports = {
    getTransformModulePath() {
      return require.resolve("./transformer");
    },
    getSourceExts() {
      return [/* "ts", "tsx", */ "svgx"];
    }
  };