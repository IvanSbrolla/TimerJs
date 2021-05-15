const { series, parallel } = require('gulp');

const { depJquery } = require('./gulpTasks/deps');
const { appHtml, appJs, appCss } = require('./gulpTasks/app');

module.exports.default = parallel(depJquery, appHtml,appJs,appCss)