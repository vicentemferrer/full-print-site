export const jsxSingleQuote = true;
export const singleQuote = true;
export const printWidth = 120;
export const trailingComma = "none";
export const semi = true;
export const tabWidth = 2;
export const bracketSpacing = true;
export const arrowParens = "always";
export const plugins = ["prettier-plugin-astro"];
export const overrides = [
  { files: "*.astro", options: { parser: "astro" } },
  { files: "*.js", options: { parser: "babel" } },
  { files: "*.mjs", options: { parser: "babel" } },
];
