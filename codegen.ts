import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/gql",
  documents: ["components/**/*.tsx", "app/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "gql/client/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
      plugins: [],
    },
  },
};

export default config;
