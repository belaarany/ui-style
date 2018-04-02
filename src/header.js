// Build stylesheet header

let date = new Date().toLocaleString()
let { version, author, license } = require("../package.json")

module.exports = `\
/*!
* GOabela UI Style
*
* Author: ${author}
* Version: ${version}
* License: ${license}
* Repository: https://github.com/belaarany/ui-style
*
* Compiled: ${date}
*/

`
