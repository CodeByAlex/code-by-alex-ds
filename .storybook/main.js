module.exports = {
  logLevel: 'debug',
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-essentials'
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css|\.s(c|a)ss$/,
      use: [{
        loader: 'lit-scss-loader',
        options: {
          minify: true, // defaults to false
        },
      }, 'extract-loader', 'css-loader', 'sass-loader'],
    });
    return config;
  },
};
