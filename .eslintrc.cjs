/* eslint-disable max-len */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [
    {
      files: ["*.md"],
      rules: {
        "commit-convention/commit-convention": "on",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Disallow unused variables
    "no-unused-vars": "error",

    // Enforce consistent indentation
    indent: ["error", 2],

    // Enforce the use of semicolons
    semi: ["error", "always"],

    // Require double quotes for strings
    quotes: ["error", "double"],

    // Require curly braces for all control statements
    curly: ["error", "all"],

    // Disallow the use of `var` to declare variables
    "no-var": "error",

    // Require conventional commit messages
    "commit-convention/commit-convention": [
      "error",
      {
        "type-enum": [
          "feat", // A new feature
          "fix", // A bug fix
          "docs", // Documentation only changes
          "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
          "refactor", // A code change that neither fixes a bug nor adds a feature
          "perf", // A code change that improves performance
          "test", // Adding missing tests or correcting existing tests
          "chore", // Changes to the build process or auxiliary tools and libraries such as documentation generation
          "revert", // Revert to a commit
          "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        ],
        "type-case": "lowerCase",
        "type-empty": false,
        "subject-empty": false,
        "subject-full-stop": false,
        "header-max-length": 72,
        "body-max-line-length": 80,
        "footer-max-line-length": 80,
      },
    ],
  },
}
