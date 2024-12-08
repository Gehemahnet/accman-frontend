import tseslint from "typescript-eslint"
import eslint from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import eslintPluginVue from "eslint-plugin-vue"

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginVue.configs["flat/recommended"],
    stylistic.configs.customize({
        quotes: "double",
        semi: true,
    }),
)
