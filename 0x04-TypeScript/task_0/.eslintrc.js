module.exports =  {
  // start
  env: {
    browser: true, //added
    es2021: true // added
  },
  // end
  parser:  '@typescript-eslint/parser',
  extends:  [
    'eslint:recomended', //added
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  plugins: ['@typescript-eslint'], // added
  rules:  {
  },
};
