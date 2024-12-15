import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginVue from "eslint-plugin-vue";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    ...eslintPluginVue.configs["flat/recommended"],
    {
        plugins: {
            'typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.app.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            }
        }
    }
    // stylistic.configs.customize({
    //   "quotes": "double",
    //   "semi": true,
    //   "object-curly-spacing": ["error", "always"],
    //
    // }),
);
