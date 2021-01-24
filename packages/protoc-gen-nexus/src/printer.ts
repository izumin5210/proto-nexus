import ts from "typescript";
import {
  buildTypesFromFile,
  createImportDecls,
  createReExportStmts,
  createTypeDslStmts,
  GenerationParams,
} from "./dslgen";
import { ProtoFile, ProtoRegistry } from "./protogen";

export function printSource(registry: ProtoRegistry, file: ProtoFile, opts: GenerationParams): string {
  const types = buildTypesFromFile(file, registry, opts);

  const ast: ts.Statement[] = [
    // `import * as nexus from "nexus";`
    // `import * as proto_nexus from "proto-nexus";`
    // `import * as _$hello$hello_pb from "./hello/hello_pb";`
    ...createImportDecls(types),
    // `export _$hello$hello_pb$Hello = _$hello$hello_pb.Hello;`
    ...createReExportStmts(types),
    // `export cosnt Hello = objectType({ ... });`
    // `export cosnt HelloInput = inputObjectType({ ... });`
    // `export cosnt Oneof = unionType({ ... });`
    // `export const Role = enumType({ ... });`
    ...createTypeDslStmts(types),
  ];

  if (ast.length === 0) {
    ast.push(
      // `export {}`
      ts.factory.createExportDeclaration(undefined, undefined, false, ts.factory.createNamedExports([]), undefined)
    );
  }

  const nexusFile = ts.factory.updateSourceFile(
    ts.createSourceFile("generated.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS),
    ast,
    false
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printFile(nexusFile);

  return [
    "// Code generated by protoc-gen-nexus. DO NOT EDIT.",
    `// source: ${file.descriptor.getName()}`,
    "",
    result,
  ].join("\n");
}
