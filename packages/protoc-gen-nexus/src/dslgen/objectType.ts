import ts from "typescript";
import { ProtoMessage, ProtoRegistry } from "../protoTypes";
import {
  createDslExportConstStmt,
  gqlTypeName,
  protoExportAlias,
} from "./util";
import { createFieldDefinitionStmt } from "./field";
import { createOneofFieldDefinitionStmt } from "./oneofField";

/**
 * @example
 * ```ts
 * export cosnt Hello = objectType({
 *   name: "Hello",
 *   // ...
 * })
 * ```
 */
export function createObjectTypeDslStmts(
  msgs: ReadonlyArray<ProtoMessage>,
  reg: ProtoRegistry,
  opts: { importPrefix?: string }
): ts.Statement[] {
  return msgs.map((m) => createObjectTypeDslStmt(m, reg, opts));
}

/**
 * @example
 * ```ts
 * export cosnt Hello = objectType({
 *   name: "Hello",
 *   // ...
 * })
 * ```
 */
function createObjectTypeDslStmt(
  msg: ProtoMessage,
  reg: ProtoRegistry,
  opts: { importPrefix?: string }
): ts.Statement {
  const typeName = gqlTypeName(msg);
  return createDslExportConstStmt(
    typeName,
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("objectType"),
      undefined,
      [
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              "name",
              ts.factory.createStringLiteral(typeName)
            ),
            ts.factory.createPropertyAssignment(
              "description",
              ts.factory.createStringLiteral(msg.description)
            ),
            createObjectTypeDefinitionMethodDecl(msg, reg, opts),
            ts.factory.createPropertyAssignment(
              "sourceType",
              sourceTypeExpr(msg, opts)
            ),
          ],
          true
        ),
      ]
    )
  );
}

/**
 * @example
 * ```ts
 * definition(t) {
 *   // ...
 * }
 * ```
 */
function createObjectTypeDefinitionMethodDecl(
  msg: ProtoMessage,
  reg: ProtoRegistry,
  opts: { importPrefix?: string }
): ts.MethodDeclaration {
  return ts.factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    "definition",
    undefined,
    undefined,
    [
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        "t",
        undefined,
        undefined,
        undefined
      ),
    ],
    undefined,
    ts.factory.createBlock(
      [
        ...msg.fields
          .filter((f) => !f.isOneofMember())
          .map((f) => createFieldDefinitionStmt(f, reg)),
        ...msg.oneofs.map((o) => createOneofFieldDefinitionStmt(o, opts)),
      ],
      true
    )
  );
}

/**
 * @example
 * ```ts
 * {
 *   module: __filename,
 *   export: "_$hello$hello_pb$User"
 * }
 * ```
 */
function sourceTypeExpr(
  msg: ProtoMessage,
  opts: { importPrefix?: string }
): ts.Expression {
  return ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment(
      "module",
      ts.factory.createIdentifier("__filename")
    ),
    ts.factory.createPropertyAssignment(
      "export",
      ts.factory.createStringLiteral(protoExportAlias(msg, opts))
    ),
  ]);
}
