module.exports = {
    "parser": "babel-eslint",
    "env": {
        'es6': true,
        'browser': true,
        'commonjs': true,
        'jquery': true
    },
    "parserOptions": {
        ecmaVersion: 6,
        sourceType: "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": [
        "eslint:recommended" //, "airbnb" "cleanjs"
    ],
    "rules": {
        "no-unused-vars": [
            "warn", {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ]
    },
    "globals": {
        "init": true
    }
};