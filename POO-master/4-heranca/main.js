"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Priest_1 = require("./Priest");
var Warrior_1 = require("./Warrior");
var Mage_1 = require("./Mage");
var mage = new Mage_1.Mage("Angelo mage");
var warrior = new Warrior_1.Warrior("Angelo warrior");
var priest = new Priest_1.Priest("Angelo priest");
console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);
