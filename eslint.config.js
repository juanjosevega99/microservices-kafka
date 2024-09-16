export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
        "prefer-const": "warn",
        "no-constant-binary-expression": "error"
    }
  },
];