module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['jsx-a11y'],
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'jsx-a11y/anchor-has-content': ['error', { components: [] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'max-len': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
  },
};
