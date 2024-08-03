module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      // Other options can be specified here
    }),
    // Add more PostCSS plugins as needed
  ],
}
