var tv4 = require('tv4'),
    utils = require('./utils'),
    fs = require('fs'),
    _ = require('lodash'),

    /**
     * Completely resolves a schema, ensuring that no references remain.
     * @param schemaPath
     * @param schemaDirPath
     * @returns {Object}
     */
    compile = function (schemaPath, schemaDirPath) {
        var schema = utils.removeCommentsAndLoadJSON(schemaPath),
            all = utils.getAllSchemas(schemaDirPath),
            subSchemas = _.omit(all, schema.id);
        schema.definitions = _.mapKeys(subSchemas, function (value, key) {
            if (utils.startsWith(key, '#/definitions/')) {
                return key.replace('#/definitions/', '');
            }
        });
        return schema;
    };

module.exports = {
    compile: compile
};
