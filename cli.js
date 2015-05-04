#!/usr/bin/env node
var temple = require('./priest');
var template;
var args = process.argv.slice(2);
if(args.length == 0 || args.indexOf('-h') != -1 || args.indexOf('--help') != -1) {
  console.log("Usage: cli.js [ template.temple ] [arguments]");
  console.log("       cli.js template.temple -m\n");
  console.log("Arguments:");
  console.log("  -m   build as module")
} else {
  if(args.indexOf('-m') != -1) {
    template = temple(args.slice(0, -1), true);
  } else {
    template = temple(args, false, true);
  }
  console.log(template);
}
