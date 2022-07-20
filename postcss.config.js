module.exports = {
  plugins: [
    ["postcss-easy-import",{ prefix: "_" }], // keep this first
    ["postcss-url",{ url: "inline" }],
    ["autoprefixer",{}],
    ["cssnano",{
      preset: ['default', {
          discardComments: {
              removeAll: true,
          },
      }]
    }],
  ]
};
