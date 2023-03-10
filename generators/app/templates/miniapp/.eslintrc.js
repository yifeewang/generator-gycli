module.exports = {
    root: true,
    extends: ["eslint-config-standard"],
    globals: {
        my: false, // false只读
        getApp: false,
        App: false,
        getCurrentPages: false,
        Component: false,
        Page: false,
        getRegExp: false,
        getDate: false,
        requirePlugin: false,
        sensors: false
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        jquery: true,
        amd: true,
        commonjs: true,
    },
    plugins: ["html"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        experimentalDecorators: true,
    },
    rules: {
        quotes: 0,
        "prefer-const": 0,
        "handle-callback-err": 0,
        "no-unused-vars": 2,
        "no-fallthrough": 0,
        camelcase: 0,
        "prefer-promise-reject-errors": 0,
        "comma-dangle": [2, "only-multiline"],
        indent: [2, 4, { SwitchCase: 1 }],
        "no-useless-computed-key": 0,
        semi: [2, "always"],
        "space-before-function-paren": [2, "always"],
        "no-console": 0,
        "no-alert": 2,
        "new-cap": 0,
        "no-eq-null": 0,
        eqeqeq: [0, "always", { null: "ignore" }],
        "no-param-reassign": 0,
        "no-invalid-this": 0,
        "quote-props": 0,
        "no-misleading-character-class": 0,
        "no-useless-escape": 0,
        "import/no-absolute-path": 0,
        "no-case-declarations": 0,
        "promise/param-names": 0,
        "standard/no-callback-literal": 0,
        "no-empty-pattern": 0,
        "no-async-promise-executor": 0,
        "space-before-function-paren": 0,
        "spaced-comment": 0,
        "no-empty": 2,
        "no-shadow": 0,
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "space-infix-ops": 2,
        "no-var": 1,
        "no-const-assign": 2,
    },
};
