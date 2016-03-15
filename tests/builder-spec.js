var expect = require('expect.js'),
    tools = require('../index'),
    path = require('path'),
    fs = require('fs'),
    tv4 = require('tv4'),
    draft = require('./resources/meta-schema-v4.json');

/* global describe, it */
describe('compilation', function () {
    it('must validate correctly against the draft schema', function (done) {
        var exampleDir = path.join(__dirname, '..', 'examples'),
            schemaPath = path.join(exampleDir, 'root.json'),
            validator = tv4.freshApi(),
            generatedSchema = tools.compile(schemaPath, exampleDir),  // The JSON to check.
            result;
        validator.addSchema(draft);
        result = validator.validate(generatedSchema, draft);
        expect(result).to.be(true);
        expect(validator.missing.length).to.be(0);
        done();
    })
});
