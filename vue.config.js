module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_colors.scss";
          @import "@/scss/_font-size.scss";
          @import "@/scss/_margin-padding.scss";
        `,
      },
    },
  },
};
