import tseslint from "typescript-eslint";
import js from "@eslint/js";
import vueParser from 'vue-eslint-parser';
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
    {
        ignores: ['**.d.ts', '**/coverage', '**/dist']
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        files: ['**/*.{ts,vue}'],
        plugins: {
            "@stylistic": stylistic
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                project: './tsconfig.app.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
        rules: {
            "@stylistic/semi": 'error',
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/brace-style": "error",
            "@stylistic/array-bracket-spacing": ["error", "always"],
        }
    }
);
