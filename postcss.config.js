const env = process.env.NODE_ENV;

module.export = {
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": true,
    autoprefixer: true,
    cssnano: true
  }
};
