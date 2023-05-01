"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
var path = require("path");
var uuid_1 = require("uuid");
var transformerProgram = function (program) {
    var typeChecker = program.getTypeChecker();
    var transformerFactory = function (context) {
        return function (sourceFile) {
            var commentRange = ts.getLeadingCommentRanges(sourceFile.getFullText(), sourceFile.getFullStart())[0];
            var commentJson = {};
            sourceFile.getFullText().slice(commentRange.pos, commentRange.end).split(/\r?\n/).map(function (line) { return line.trim().includes(":") ? (commentJson[line.trim().split(/:\s*/)[0]] = line.trim().split(/:\s*/)[1]) : null; });
            if (Object.keys(commentJson).length != 0) {
                commentJson["sourceFilePath"] = path.relative(path.resolve(), sourceFile.fileName);
                var writeFileName = (0, uuid_1.v4)() + ".json";
                var scriptItemDir = path.join(path.resolve(), "/.yug/items/scripts");
                !fs.existsSync(scriptItemDir) ? fs.mkdirSync(scriptItemDir, { recursive: true }) : null;
                fs.readdirSync(scriptItemDir).forEach(function (file) {
                    if (path.extname(file) === ".json") {
                        if (JSON.parse(fs.readFileSync(path.join(path.resolve(), "/.yug/items/scripts/") + file, "utf-8")).sourceFilePath === path.relative(path.resolve(), sourceFile.fileName)) {
                            writeFileName = file;
                        }
                        else {
                            var mainJsonFile = JSON.parse(fs.readFileSync(path.join(path.resolve(), "/.yug/index.json"), "utf-8"));
                            !mainJsonFile.hasOwnProperty("items") ? (mainJsonFile["items"] = []) : null;
                            mainJsonFile["items"].push(path.parse(writeFileName).name);
                            fs.writeFileSync(path.resolve() + "/.yug/index.json", JSON.stringify(mainJsonFile));
                        }
                    }
                });
                fs.writeFileSync(path.resolve() + "/.yug/items/scripts/" + writeFileName, JSON.stringify(commentJson));
            }
            var visitor = function (node) {
                return ts.visitEachChild(node, visitor, context);
            };
            return ts.visitNode(sourceFile, visitor);
        };
    };
    return transformerFactory;
};
exports["default"] = transformerProgram;
