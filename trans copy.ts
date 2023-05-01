import * as ts from 'typescript';

const transformer: ts.TransformerFactory<ts.SourceFile> = (context: ts.TransformationContext) => {
  const visitor: ts.Visitor = (node: ts.Node): ts.VisitResult<ts.Node> => {
    console.log("Hello From Transformer");
    return ts.visitEachChild(node, visitor, context);
  };
  return (node: ts.SourceFile) => ts.visitNode(node, visitor);
};

export default transformer;