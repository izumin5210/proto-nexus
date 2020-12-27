// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/extensions/extensions.proto

import { objectType, inputObjectType, enumType, nullable, nonNull } from "nexus";
import * as $$testapis$node$lib$testapis$extensions from "@testapis/node/lib/testapis/extensions";
export type $$testapis$node$lib$testapis$extensions$testapis$extensions$TestPrefixPrefixedMessage = $$testapis$node$lib$testapis$extensions.testapis.extensions.IPrefixedMessage;
export type $$testapis$node$lib$testapis$extensions$testapis$extensions$TestPrefixPrefixedMessageInnerMessage = $$testapis$node$lib$testapis$extensions.testapis.extensions.PrefixedMessage.IInnerMessage;
export const TestPrefixPrefixedMessage = objectType({
    name: "TestPrefixPrefixedMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.body!; }
        });
        t.field("prefixedEnum", {
            type: nullable("TestPrefixPrefixedEnum"),
            description: "",
            resolve(root) {
                if (root.prefixedEnum == null) {
                    return null;
                }
                if (root.prefixedEnum === $$testapis$node$lib$testapis$extensions.testapis.extensions.PrefixedEnum.PREFIXED_ENUM_UNSPECIFIED) {
                    return null;
                }
                return root.prefixedEnum;
            }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$extensions$testapis$extensions$TestPrefixPrefixedMessage" }
});
export const TestPrefixPrefixedMessageInnerMessage = objectType({
    name: "TestPrefixPrefixedMessageInnerMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$extensions$testapis$extensions$TestPrefixPrefixedMessageInnerMessage" }
});
export const TestPrefixPrefixedMessageInput = inputObjectType({
    name: "TestPrefixPrefixedMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: ""
        });
        t.field("prefixedEnum", {
            type: nullable("TestPrefixPrefixedEnum"),
            description: ""
        });
    }
});
export const TestPrefixPrefixedMessageInnerMessageInput = inputObjectType({
    name: "TestPrefixPrefixedMessageInnerMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: ""
        });
    }
});
export const TestPrefixPrefixedEnum = enumType({
    name: "TestPrefixPrefixedEnum",
    description: "",
    members: [
        {
            name: "PREFIXED_FOO",
            value: 1
        },
        {
            name: "PREFIXED_BAR",
            value: 2
        }
    ]
});