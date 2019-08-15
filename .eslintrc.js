module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': ['error', 'SequenceExpression'],
    allowShortCircuit: false,
    allowTernary: false
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
