import { registerEnumType } from "type-graphql";

export enum SortDirection {
  ASC,
  DESC,
}

registerEnumType(SortDirection, {
  name: "SortDirection",
  description: "All possible directions for sorting result",
});
