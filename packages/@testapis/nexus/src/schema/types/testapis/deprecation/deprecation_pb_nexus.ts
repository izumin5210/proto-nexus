// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/deprecation/deprecation.proto

import { objectType, inputObjectType, enumType, unionType, nullable, nonNull } from "nexus";
import * as $$testapis$node$lib$testapis$deprecation from "@testapis/node/lib/testapis/deprecation";
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$DeprecatedMessage = $$testapis$node$lib$testapis$deprecation.testapis.deprecation.IDeprecatedMessage;
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage = $$testapis$node$lib$testapis$deprecation.testapis.deprecation.INotDeprecatedMessage;
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$DeprecatedMessageInnerMessage = $$testapis$node$lib$testapis$deprecation.testapis.deprecation.DeprecatedMessage.IInnerMessage;
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage1 = $$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage1;
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage2 = $$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage2;
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage_not_deprecated_oneof = ($$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage1 & {
    __protobufTypeName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1";
}) | ($$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage2 & {
    __protobufTypeName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2";
});
export type $$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage_deprecated_oneof = ($$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage1 & {
    __protobufTypeName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage1";
}) | ($$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedMessage.IInnerMessage2 & {
    __protobufTypeName: "testapis.deprecation.NotDeprecatedMessage.InnerMessage2";
});
export const NotDeprecatedMessageNotDeprecatedOneof = unionType({
    name: "NotDeprecatedMessageNotDeprecatedOneof",
    description: "",
    definition(t) {
        t.members("NotDeprecatedMessageInnerMessage1", "NotDeprecatedMessageInnerMessage2");
    },
    resolveType(item) {
        if (item.__protobufTypeName === "testapis.deprecation.NotDeprecatedMessage.InnerMessage1") {
            return "NotDeprecatedMessageInnerMessage1";
        }
        if (item.__protobufTypeName === "testapis.deprecation.NotDeprecatedMessage.InnerMessage2") {
            return "NotDeprecatedMessageInnerMessage2";
        }
        throw "unreachable";
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage_not_deprecated_oneof" }
});
export const NotDeprecatedMessageDeprecatedOneof = unionType({
    name: "NotDeprecatedMessageDeprecatedOneof",
    description: "",
    definition(t) {
        t.members("NotDeprecatedMessageInnerMessage1", "NotDeprecatedMessageInnerMessage2");
    },
    resolveType(item) {
        if (item.__protobufTypeName === "testapis.deprecation.NotDeprecatedMessage.InnerMessage1") {
            return "NotDeprecatedMessageInnerMessage1";
        }
        if (item.__protobufTypeName === "testapis.deprecation.NotDeprecatedMessage.InnerMessage2") {
            return "NotDeprecatedMessageInnerMessage2";
        }
        throw "unreachable";
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage_deprecated_oneof" }
});
export const DeprecatedMessage = objectType({
    name: "DeprecatedMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) { return root.body!; }
        });
        t.field("enum", {
            type: nullable("NotDeprecatedEnum"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) {
                if (root.enum == null) {
                    return null;
                }
                if (root.enum === $$testapis$node$lib$testapis$deprecation.testapis.deprecation.NotDeprecatedEnum.NOT_DEPRECATED_ENUM_UNSPECIFIED) {
                    return null;
                }
                return root.enum;
            }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$DeprecatedMessage" }
});
export const NotDeprecatedMessage = objectType({
    name: "NotDeprecatedMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file.",
            resolve(root) { return root.body!; }
        });
        t.field("enum", {
            type: nullable("DeprecatedEnum"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            resolve(root) {
                if (root.enum == null) {
                    return null;
                }
                if (root.enum === $$testapis$node$lib$testapis$deprecation.testapis.deprecation.DeprecatedEnum.DEPRECATED_ENUM_UNSPECIFIED) {
                    return null;
                }
                return root.enum;
            }
        });
        t.field("not_deprecated_oneof", {
            type: nullable("NotDeprecatedMessageNotDeprecatedOneof"),
            description: "",
            resolve(root) {
                if (root.msg1) {
                    return Object.assign(root.msg1, { __protobufTypeName: ("testapis.deprecation.NotDeprecatedMessage.InnerMessage1" as const) });
                }
                if (root.msg2) {
                    return Object.assign(root.msg2, { __protobufTypeName: ("testapis.deprecation.NotDeprecatedMessage.InnerMessage2" as const) });
                }
                return null;
            }
        });
        t.field("deprecated_oneof", {
            type: nullable("NotDeprecatedMessageDeprecatedOneof"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.deprecated_oneof is mark as deprecated in a *.proto file.",
            resolve(root) {
                if (root.msg3) {
                    return Object.assign(root.msg3, { __protobufTypeName: ("testapis.deprecation.NotDeprecatedMessage.InnerMessage1" as const) });
                }
                if (root.msg4) {
                    return Object.assign(root.msg4, { __protobufTypeName: ("testapis.deprecation.NotDeprecatedMessage.InnerMessage2" as const) });
                }
                return null;
            }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessage" }
});
export const DeprecatedMessageInnerMessage = objectType({
    name: "DeprecatedMessageInnerMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$DeprecatedMessageInnerMessage" }
});
export const NotDeprecatedMessageInnerMessage1 = objectType({
    name: "NotDeprecatedMessageInnerMessage1",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage1" }
});
export const NotDeprecatedMessageInnerMessage2 = objectType({
    name: "NotDeprecatedMessageInnerMessage2",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$deprecation$testapis$deprecation$NotDeprecatedMessageInnerMessage2" }
});
export const DeprecatedMessageInput = inputObjectType({
    name: "DeprecatedMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
        });
        t.field("enum", {
            type: nullable("NotDeprecatedEnum"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
        });
    }
});
export const NotDeprecatedMessageInput = inputObjectType({
    name: "NotDeprecatedMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file."
        });
        t.field("enum", {
            type: nullable("DeprecatedEnum"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file."
        });
        t.field("msg1", {
            type: nullable("NotDeprecatedMessageInnerMessage1Input"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg1 is mark as deprecated in a *.proto file."
        });
        t.field("msg2", {
            type: nullable("NotDeprecatedMessageInnerMessage2Input"),
            description: ""
        });
        t.field("msg3", {
            type: nullable("NotDeprecatedMessageInnerMessage1Input"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg3 is mark as deprecated in a *.proto file."
        });
        t.field("msg4", {
            type: nullable("NotDeprecatedMessageInnerMessage2Input"),
            description: "",
            deprecation: "testapis.deprecation.NotDeprecatedMessage.msg4 is mark as deprecated in a *.proto file."
        });
    }
});
export const DeprecatedMessageInnerMessageInput = inputObjectType({
    name: "DeprecatedMessageInnerMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapis.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
        });
    }
});
export const NotDeprecatedMessageInnerMessage1Input = inputObjectType({
    name: "NotDeprecatedMessageInnerMessage1Input",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: ""
        });
    }
});
export const NotDeprecatedMessageInnerMessage2Input = inputObjectType({
    name: "NotDeprecatedMessageInnerMessage2Input",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: ""
        });
    }
});
export const NotDeprecatedEnum = enumType({
    name: "NotDeprecatedEnum",
    description: "",
    members: [
        {
            name: "NOT_DEPRECATED_FOO",
            value: 1
        },
        {
            name: "DEPRECATED_BAR",
            deprecation: "testapis.deprecation.NotDeprecatedEnum.DEPRECATED_BAR is mark as deprecated in a *.proto file.",
            value: 2
        }
    ]
});
export const DeprecatedEnum = enumType({
    name: "DeprecatedEnum",
    description: "",
    members: [
        {
            name: "DEPRECATED_BAZ",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 1
        },
        {
            name: "DEPRECATED_QUX",
            deprecation: "testapis.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 2
        }
    ]
});