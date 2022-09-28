module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-react-native-web",
  ],
  framework: "@storybook/react",
  webpackFinal: async config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      // make sure we're rendering output using **web** Storybook not react-native
      '@storybook/react-native': '@storybook/react',
      // plugin-level react-native-web extensions
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
      // ...
    };

    // handle SVG support inside Storybook
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader',
    });
    return config;
  },
};
