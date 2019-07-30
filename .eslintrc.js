module.exports = {
    extends: [
        "airbnb-base",
        "plugin:react/recommended",
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true,
    },
    rules: {
        "indent": ["error", 4],
        "no-unused-vars": ["warn", { "vars": "local", "args": "none" }],
        "no-plusplus": 0,
        "max-len": ["warn", 180],
        "one-var": 0,
        "no-console": "off",
        "arrow-body-style": "off",
        "class-methods-use-this": "off",
    },
    parser: "babel-eslint", // this lets us use ES6+ things in react like `= () => {}`
};
