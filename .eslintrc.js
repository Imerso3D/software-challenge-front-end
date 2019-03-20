module.exports = {
    "extends": [
        "airbnb",
        "prettier"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "jsx-a11y",
        "react",
          ],
  env: {
    node: false,
  },
  rules: {
    'no-unused-vars': 0,
    'no-undef': 0,
    radix: 0,
    'import/first': 0,
  },
};
