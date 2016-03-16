#!/usr/bin/env node

var _ = require('lodash'),
    fs = require('fs'),
    args = require('miniargs').parse(process.argv),
    tools = require('../index'),

    requiredParams = ['dir', 'root'],
    compiled;

// Validate args
_.each(requiredParams, function (param) {
    if (!args[param]) {
        console.log('The "--' + param + '" parameter is missing.');
        process.exit(1);
    }
});

compiled = tools.compile(args.root, args.dir);

if (args.output) {
    fs.writeFileSync(args.output, JSON.stringify(compiled, null, 4));
}
else {
    console.log(JSON.stringify(compiled, null, 4));
}
