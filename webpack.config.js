const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const _ = require('lodash');

const commonConfig = {
  context: path.join(__dirname, "src"),
  entry: {
    options: "./options.js",
    background: "./background.js",
    'lib/content-script': "./lib/content-script.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [ ]
};

function createConfig(env, browserVar, extraDomainPaths) {
  let config = _.defaultsDeep(
    {},
    {
      name: env,
      output: {
        path: path.join(__dirname, "dist", env),
      }
    },
    commonConfig
  );

  let domains = _.concat(extraDomainPaths, [
    '*://issues.jboss.org/*',
    '*://*.apache.org/*',
    '*://*.jira.com/*',
    '*://*.atlassian.com/*',
    '*://*.atlassian.net/*',
  ]).join('|');

  config.plugins = _.concat(config.plugins, [
    new webpack.DefinePlugin({
      MD_TO_JIRA_BROWSER_TARGET: JSON.stringify(env),
      MD_TO_JIRA_DEFAULT_DOMAINS: JSON.stringify(domains),
      BROWSER_SDK: browserVar
    }),
    new CopyWebpackPlugin([
      'options.html',
      'icon*.png',
      { from: 'lib/J2M.js', to: 'lib/J2M.js' },
      { from: `manifest.${env}.json`, to: 'manifest.json' } // Chrome and Firefox don't agree on format :-/
    ]),
  ]);

  return config;
}

module.exports = [
  createConfig('firefox', 'browser', ['file:///*']),
  createConfig('chrome', 'chrome', ['file://*'])
]
