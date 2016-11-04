'use strict';
var config = require('./flowtype');
config.settings.flowtype.onlyFilesWithFlowAnnotation = false;
Object.keys(config.rules).forEach(function (rule) {
  config.rules[rule] = 0;
});
module.exports = config;
