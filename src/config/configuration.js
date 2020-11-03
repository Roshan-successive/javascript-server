"use strict";
exports.__esModule = true;
// import * as dotenv from 'dotenv';
// console.log(dotenv);
// tslint:disable-next-line: no-var-requires
var envVars = require('dotenv').config();
console.log('Inside config', envVars);
var config = envVars.parsed;
Object.freeze(config);
// config.PORT=7000;
exports["default"] = config;
