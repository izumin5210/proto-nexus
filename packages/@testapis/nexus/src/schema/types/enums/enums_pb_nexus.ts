// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: enums/enums.proto

import { objectType, enumType } from "@nexus/schema";
import * as $$testapis$node$lib$enums$enums_pb from "@testapis/node/lib/enums/enums_pb";
export type $$testapis$node$lib$enums$enums_pb$MessageWithEnums = $$testapis$node$lib$enums$enums_pb.MessageWithEnums;
export const MessageWithEnums = objectType({
  name: "MessageWithEnums",
  description: "",
  definition(t) {
    t.nullable.field("myEnum1", {
      description: "",
      type: "MyEnum1",
      resolve(root) {
        return root.getMyEnum1();
      },
    });
  },
  sourceType: {
    module: __filename,
    export: "$$testapis$node$lib$enums$enums_pb$MessageWithEnums",
  },
});
export const MyEnum1 = enumType({
  name: "MyEnum1",
  description: "",
  members: { MY_ENUM_1_UNSPECIRED: 0, FOO: 1, BAR: 2, BAZ: 3 },
});