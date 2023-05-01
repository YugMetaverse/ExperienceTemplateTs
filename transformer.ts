import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';


  const transformerFactory: ts.TransformerFactory<ts.SourceFile> = context => {
    return sourceFile => {
      var commentRange = ts.getLeadingCommentRanges(sourceFile.getFullText(), sourceFile.getFullStart())![0];
      var commentJson: any = {};
      sourceFile.getFullText().slice(commentRange.pos, commentRange.end).split(/\r?\n/).map(line => line.trim().includes(":") ? (commentJson[line.trim().split(/:\s*/)[0]] = line.trim().split(/:\s*/)[1]) : null);
      if (Object.keys(commentJson).length != 0){
          commentJson["sourceFilePath"] = path.relative(path.resolve(), sourceFile.fileName);
          var writeFileName = uuid()+".json";
          var scriptItemDir = path.join(path.resolve(), "/.yug/items/scripts");
          !fs.existsSync(scriptItemDir) ? fs.mkdirSync(scriptItemDir, { recursive: true }) : null;
          fs.readdirSync(scriptItemDir).forEach((file) => {
              if(path.extname(file) === ".json") { 
                  if (JSON.parse(fs.readFileSync(path.join(path.resolve(), "/.yug/items/scripts/")+file, "utf-8")).sourceFilePath === path.relative(path.resolve(), sourceFile.fileName)){
                      writeFileName=file; 
                  }
                  else{
                      var mainJsonFile = JSON.parse(fs.readFileSync(path.join(path.resolve(), "/.yug/index.json"), "utf-8"));
                      !mainJsonFile.hasOwnProperty("items") ? (mainJsonFile["items"] = []) : null;
                      mainJsonFile["items"].push(path.parse(writeFileName).name);
                      fs.writeFileSync(path.resolve()+"/.yug/index.json", JSON.stringify(mainJsonFile));
                  }
              } 
          });
          fs.writeFileSync(path.resolve()+"/.yug/items/scripts/"+writeFileName, JSON.stringify(commentJson));
      }
      const visitor = (node: ts.Node): ts.Node => {
        return ts.visitEachChild(node, visitor, context);
      };

      return ts.visitNode(sourceFile, visitor);
    };
  };



export default transformerFactory;
