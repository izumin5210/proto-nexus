// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: deprecation/deprecation.proto

import { objectType, inputObjectType, enumType, unionType, nullable, nonNull } from "nexus";
import * as $$testapis$node_native$lib$deprecation$deprecation_pb from "@testapis/node-native/lib/deprecation/deprecation_pb";
export type $$testapis$node_native$lib$deprecation$deprecation_pb$DeprecatedMessage = $$testapis$node_native$lib$deprecation$deprecation_pb.DeprecatedMessage;
export type $$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessage = $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage;
export type $$testapis$node_native$lib$deprecation$deprecation_pb$DeprecatedMessageInnerMessage = $$testapis$node_native$lib$deprecation$deprecation_pb.DeprecatedMessage.InnerMessage;
export type $$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessageInnerMessage1 = $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage1;
export type $$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessageInnerMessage2 = $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage2;
export const NotDeprecatedMessageNotDeprecatedOneof = unionType({
    name: "NotDeprecatedMessageNotDeprecatedOneof",
    description: "",
    definition(t) {
        t.members("NotDeprecatedMessageInnerMessage1", "NotDeprecatedMessageInnerMessage2");
    },
    resolveType(item) {
        if (item instanceof $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage1) {
            return "NotDeprecatedMessageInnerMessage1";
        }
        if (item instanceof $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage2) {
            return "NotDeprecatedMessageInnerMessage2";
        }
        throw "unreachable";
    }
});
export const NotDeprecatedMessageDeprecatedOneof = unionType({
    name: "NotDeprecatedMessageDeprecatedOneof",
    description: "",
    definition(t) {
        t.members("NotDeprecatedMessageInnerMessage1", "NotDeprecatedMessageInnerMessage2");
    },
    resolveType(item) {
        if (item instanceof $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage1) {
            return "NotDeprecatedMessageInnerMessage1";
        }
        if (item instanceof $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.InnerMessage2) {
            return "NotDeprecatedMessageInnerMessage2";
        }
        throw "unreachable";
    }
});
export const DeprecatedMessage = objectType({
    name: "DeprecatedMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) { return root.getBody(); }
        });
        t.field("enum", {
            type: nullable("NotDeprecatedEnum"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) { return root.getEnum(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$deprecation$deprecation_pb$DeprecatedMessage" }
});
export const NotDeprecatedMessage = objectType({
    name: "NotDeprecatedMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapi.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file.",
            resolve(root) { return root.getBody(); }
        });
        t.field("enum", {
            type: nullable("DeprecatedEnum"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            resolve(root) { return root.getEnum(); }
        });
        t.field("not_deprecated_oneof", {
            type: nullable("NotDeprecatedMessageNotDeprecatedOneof"),
            description: "",
            resolve(root) {
                switch (root.getNotDeprecatedOneofCase()) {
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.NotDeprecatedOneofCase.NOT_DEPRECATED_ONEOF_NOT_SET: {
                        return null;
                    }
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.NotDeprecatedOneofCase.MSG1: {
                        return root.getMsg1()!;
                    }
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.NotDeprecatedOneofCase.MSG2: {
                        return root.getMsg2()!;
                    }
                    default: {
                        throw "unreachable";
                    }
                }
            }
        });
        t.field("deprecated_oneof", {
            type: nullable("NotDeprecatedMessageDeprecatedOneof"),
            description: "",
            deprecation: "testapi.deprecation.NotDeprecatedMessage.deprecated_oneof is mark as deprecated in a *.proto file.",
            resolve(root) {
                switch (root.getDeprecatedOneofCase()) {
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.DeprecatedOneofCase.DEPRECATED_ONEOF_NOT_SET: {
                        return null;
                    }
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.DeprecatedOneofCase.MSG3: {
                        return root.getMsg3()!;
                    }
                    case $$testapis$node_native$lib$deprecation$deprecation_pb.NotDeprecatedMessage.DeprecatedOneofCase.MSG4: {
                        return root.getMsg4()!;
                    }
                    default: {
                        throw "unreachable";
                    }
                }
            }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessage" }
});
export const DeprecatedMessageInnerMessage = objectType({
    name: "DeprecatedMessageInnerMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file.",
            resolve(root) { return root.getBody(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$deprecation$deprecation_pb$DeprecatedMessageInnerMessage" }
});
export const NotDeprecatedMessageInnerMessage1 = objectType({
    name: "NotDeprecatedMessageInnerMessage1",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.getBody(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessageInnerMessage1" }
});
export const NotDeprecatedMessageInnerMessage2 = objectType({
    name: "NotDeprecatedMessageInnerMessage2",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.getBody(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node_native$lib$deprecation$deprecation_pb$NotDeprecatedMessageInnerMessage2" }
});
export const DeprecatedMessageInput = inputObjectType({
    name: "DeprecatedMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
        });
        t.field("enum", {
            type: nullable("NotDeprecatedEnum"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
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
            deprecation: "testapi.deprecation.NotDeprecatedMessage.body is mark as deprecated in a *.proto file."
        });
        t.field("enum", {
            type: nullable("DeprecatedEnum"),
            description: "",
            deprecation: "testapi.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file."
        });
        t.field("msg1", {
            type: nullable("NotDeprecatedMessageInnerMessage1Input"),
            description: "",
            deprecation: "testapi.deprecation.NotDeprecatedMessage.msg1 is mark as deprecated in a *.proto file."
        });
        t.field("msg2", {
            type: nullable("NotDeprecatedMessageInnerMessage2Input"),
            description: ""
        });
        t.field("msg3", {
            type: nullable("NotDeprecatedMessageInnerMessage1Input"),
            description: "",
            deprecation: "testapi.deprecation.NotDeprecatedMessage.msg3 is mark as deprecated in a *.proto file."
        });
        t.field("msg4", {
            type: nullable("NotDeprecatedMessageInnerMessage2Input"),
            description: "",
            deprecation: "testapi.deprecation.NotDeprecatedMessage.msg4 is mark as deprecated in a *.proto file."
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
            deprecation: "testapi.deprecation.DeprecatedMessage is mark as deprecated in a *.proto file."
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
            name: "NOT_DEPRECATED_ENUM_UNSPECIFIED",
            value: 0
        },
        {
            name: "NOT_DEPRECATED_FOO",
            value: 1
        },
        {
            name: "DEPRECATED_BAR",
            deprecation: "testapi.deprecation.NotDeprecatedEnum.DEPRECATED_BAR is mark as deprecated in a *.proto file.",
            value: 2
        }
    ]
});
export const DeprecatedEnum = enumType({
    name: "DeprecatedEnum",
    description: "",
    members: [
        {
            name: "DEPRECATED_ENUM_UNSPECIFIED",
            deprecation: "testapi.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 0
        },
        {
            name: "DEPRECATED_BAZ",
            deprecation: "testapi.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 1
        },
        {
            name: "DEPRECATED_QUX",
            deprecation: "testapi.deprecation.DeprecatedEnum is mark as deprecated in a *.proto file.",
            value: 2
        }
    ]
});