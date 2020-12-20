import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { ProtoField, ProtoRegistry } from "../protoTypes";
import { gqlTypeName } from "./util";

type GqlScalarType = "Int" | "Float" | "String" | "Boolean" | "ID" | "DateTime";

export type GqlItemType =
  | {
      kind: "scalar";
      type: GqlScalarType;
      nullable: boolean;
    }
  | {
      kind: "object";
      type: string;
      nullable: boolean;
    }
  | {
      kind: "enum";
      type: string;
      nullable: boolean;
    };

export type GqlType =
  | GqlItemType
  | {
      kind: "list";
      type: GqlItemType;
      nullable: boolean;
    };

export function detectGqlType(f: ProtoField, reg: ProtoRegistry): GqlType {
  if (f.isList()) {
    return {
      kind: "list",
      type: detectGqlItemType(f, reg),
      nullable: false,
    };
  }

  return detectGqlItemType(f, reg);
}

function detectGqlItemType(f: ProtoField, reg: ProtoRegistry): GqlItemType {
  const pbtype = f.descriptor.getType()!;
  switch (pbtype) {
    case FieldDescriptorProto.Type.TYPE_STRING:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_DOUBLE:
    case FieldDescriptorProto.Type.TYPE_FLOAT:
      return { kind: "scalar", type: "Float", nullable: false };
    case FieldDescriptorProto.Type.TYPE_INT64:
    case FieldDescriptorProto.Type.TYPE_UINT64:
    case FieldDescriptorProto.Type.TYPE_INT32:
    case FieldDescriptorProto.Type.TYPE_FIXED64:
    case FieldDescriptorProto.Type.TYPE_FIXED32:
    case FieldDescriptorProto.Type.TYPE_UINT32:
    case FieldDescriptorProto.Type.TYPE_SFIXED32:
    case FieldDescriptorProto.Type.TYPE_SFIXED64:
    case FieldDescriptorProto.Type.TYPE_SINT32:
    case FieldDescriptorProto.Type.TYPE_SINT64:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_BOOL:
      return { kind: "scalar", type: "Boolean", nullable: false };
    case FieldDescriptorProto.Type.TYPE_GROUP:
      throw "not supported";
    case FieldDescriptorProto.Type.TYPE_BYTES:
      throw "not supported";
    case FieldDescriptorProto.Type.TYPE_ENUM:
      return {
        kind: "enum",
        type: gqlTypeName(reg.findByFieldDescriptor(f.descriptor)),
        nullable: f.isNullable(),
      };
    case FieldDescriptorProto.Type.TYPE_MESSAGE:
      switch (f.descriptor.getTypeName()) {
        case ".google.protobuf.Any":
          throw "not supported";
        case ".google.protobuf.BoolValue":
          return {
            kind: "scalar",
            type: "Boolean",
            nullable: f.isNullable(),
          };
        case ".google.protobuf.BytesValue":
          throw "not supported";
        case ".google.protobuf.DoubleValue":
        case ".google.protobuf.FloatValue":
          return {
            kind: "scalar",
            type: "Float",
            nullable: f.isNullable(),
          };
        case ".google.protobuf.Duration":
          throw "not implemented";
        case ".google.protobuf.Int32Value":
        case ".google.protobuf.Int64Value":
        case ".google.protobuf.UInt32Value":
        case ".google.protobuf.UInt64Value":
          return {
            kind: "scalar",
            type: "Int",
            nullable: f.isNullable(),
          };
        case ".google.protobuf.StringValue":
          return {
            kind: "scalar",
            type: "String",
            nullable: f.isNullable(),
          };
        case ".google.protobuf.Timestamp":
          return {
            kind: "scalar",
            type: "DateTime",
            nullable: f.isNullable(),
          };
        default:
          return {
            kind: "object",
            type: gqlTypeName(reg.findByFieldDescriptor(f.descriptor)),
            nullable: f.isNullable(),
          };
      }
    default:
      const _exhaustiveCheck: never = pbtype; // eslint-disable-line
      throw "unreachable";
  }
}