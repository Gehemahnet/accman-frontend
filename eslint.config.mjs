import tseslint from "typescript-eslint";
import js from "@eslint/js";
import vueParser from "vue-eslint-parser";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
    {
        ignores: [ "**.d.ts", "**/coverage", "**/dist" ]
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...eslintPluginVue.configs["flat/recommended"],
            importPlugin.flatConfigs.recommended,
        ],
        files: [ "**/*.{ts,vue}", "*.config.{ts,mjs}" ],
        plugins: {
            "@stylistic": stylistic
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                project: "./tsconfig.app.json",
                extraFileExtensions: [ ".vue" ],
                sourceType: "module",
            },
        },
        rules: {
            "@stylistic/semi": "error",
            "@stylistic/quotes": [ "error", "double" ],
            "@stylistic/brace-style": "error",
            "@stylistic/array-bracket-spacing": [ "error", "always" ],
            "@stylistic/object-curly-spacing": [ "error", "always" ],

            "vue/attributes-order": [
                "error",
                {
                    order: [
                        "DEFINITION",
                        "LIST_RENDERING",
                        "CONDITIONALS",
                        "RENDER_MODIFIERS",
                        "GLOBAL",
                        [ "UNIQUE", "SLOT" ],
                        "TWO_WAY_BINDING",
                        "OTHER_DIRECTIVES",
                        "OTHER_ATTR",
                        "EVENTS",
                        "CONTENT",
                    ],

                    alphabetical: false,
                },
            ],
            "vue/order-in-components": [
                "error",
                {
                    order: [
                        "name",
                        "components",
                        "inheritAttrs",
                        "props",
                        "emits",
                        "setup",
                    ],
                },
            ],
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type",
                    ],

                    pathGroups: [
                        {
                            pattern: "@/**/**",
                            group: "parent",
                            position: "before",
                        },
                    ],
                },
            ],
            "no-duplicate-imports": [
                "error",
                {
                    includeExports: true,
                },
            ],

        }
    }
);
