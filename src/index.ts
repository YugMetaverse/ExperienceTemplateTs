/*
@YugObject
id: 123123123123123,
itemDisplayName: UI Script,
itemType: Script,
itemPath: scripts/index.js,
baseActorToSpawn: ScriptActor,
itemDefaultProperties: []
*/

import { Hello } from "./dep";
import * as puerts from "puerts";
import * as UE from  "ue";
import * as UI from './main-ui';
import {ReactUMG} from "react-umg";
const world : UE.World = globalThis.World;

console.log("Current Platform: " + UE.GameplayStatics.GetPlatformName());
console.log("Hello World");

const hello = new Hello();
hello.description;
hello.TestFunction();
ReactUMG.init(world);
UI.Load();
