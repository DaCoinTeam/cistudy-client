// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-case-declarations": "off",
        "no-mixed-spaces-and-tabs": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "none",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": true
            }
        }]
    }
}
