module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:vue/vue3-recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    camelcase: 0,
  },
};
