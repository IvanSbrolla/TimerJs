const { series, parallel } = require('gulp');

const { depJquery, depFontAwesomeCss, depFontAwesomeJs } = require('./gulpTasks/deps');
const { appHtml, appJs, appCss } = require('./gulpTasks/app');
const { servidor, monitorarArquivos } = require('./gulpTasks/server')

module.exports.default = series(
    parallel(depJquery,depFontAwesomeJs,depFontAwesomeCss, appHtml, appJs, appCss),
    servidor,
    monitorarArquivos
)