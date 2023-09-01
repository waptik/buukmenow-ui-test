import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/gql",
  // documents: ["components/**/*.tsx", "app/**/*.tsx"],
  documents: "gql/client/**/*.graphql",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "gql/client/sdk.ts": {
      // preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        "plugin-typescript-swr",
      ],
    },
  },
};

export default config;
