// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: testapis/field_behavior/comments.proto

import { objectType, inputObjectType, nullable, nonNull } from "nexus";
import * as $$testapis$node$lib$testapis$field_behavior from "@testapis/node/lib/testapis/field_behavior";
export type $$testapis$node$lib$testapis$field_behavior$testapis$deprecation$FieldBehaviorComentsMessage = $$testapis$node$lib$testapis$field_behavior.testapis.deprecation.IFieldBehaviorComentsMessage;
export type $$testapis$node$lib$testapis$field_behavior$testapis$deprecation$FieldBehaviorComentsMessagePost = $$testapis$node$lib$testapis$field_behavior.testapis.deprecation.FieldBehaviorComentsMessage.IPost;
export const FieldBehaviorComentsMessage = objectType({
    name: "FieldBehaviorComentsMessage",
    description: "",
    definition(t) {
        t.field("requiredField", {
            type: nonNull("FieldBehaviorComentsMessagePost"),
            description: "Required.",
            resolve(root) { return root.requiredField!; }
        });
        t.field("requiredOutputOnlyField", {
            type: nonNull("FieldBehaviorComentsMessagePost"),
            description: "Required. Output only.",
            resolve(root) { return root.requiredOutputOnlyField!; }
        });
        t.field("outputOnlyRequiredField", {
            type: nonNull("FieldBehaviorComentsMessagePost"),
            description: "Output only. Required.",
            resolve(root) { return root.outputOnlyRequiredField!; }
        });
        t.field("outputOnlyField", {
            type: nullable("FieldBehaviorComentsMessagePost"),
            description: "Output only.",
            resolve(root) { return root.outputOnlyField ?? null; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$field_behavior$testapis$deprecation$FieldBehaviorComentsMessage" }
});
export const FieldBehaviorComentsMessagePost = objectType({
    name: "FieldBehaviorComentsMessagePost",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$testapis$field_behavior$testapis$deprecation$FieldBehaviorComentsMessagePost" }
});
export const FieldBehaviorComentsMessageInput = inputObjectType({
    name: "FieldBehaviorComentsMessageInput",
    description: "",
    definition(t) {
        t.field("requiredField", {
            type: nonNull("FieldBehaviorComentsMessagePostInput"),
            description: "Required."
        });
        t.field("requiredInputOnlyField", {
            type: nonNull("FieldBehaviorComentsMessagePostInput"),
            description: "Required. Input only."
        });
        t.field("inputOnlyRequiredField", {
            type: nonNull("FieldBehaviorComentsMessagePostInput"),
            description: "Input only. Required."
        });
        t.field("inputOnlyField", {
            type: nullable("FieldBehaviorComentsMessagePostInput"),
            description: "Input only."
        });
    }
});
export const FieldBehaviorComentsMessagePostInput = inputObjectType({
    name: "FieldBehaviorComentsMessagePostInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: ""
        });
    }
});