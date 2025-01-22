import typescriptEslint from "typescript-eslint";
import eslint from "@eslint/js";

import eslintPluginVue from "eslint-plugin-vue";

export default typescriptEslint.config(
    {
        ignores: ['**.d.ts', '**/coverage', '**/dist']
    },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommendedTypeChecked,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        files: ['**/*.{ts,vue}'],

        languageOptions: {
            sourceType: 'module',
            parserOptions: {
                parser: typescriptEslint.parser,
            }
        }
    }
);
