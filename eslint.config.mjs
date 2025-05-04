import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],

    rules: {
      // Regras do ESLint devem ter um nível de severidade: "off" (0), "warn" (1), ou "error" (2)

      "no-unused-vars": "error", // Use "error" em vez de uma mensagem
    },
  },
]

export default eslintConfig
