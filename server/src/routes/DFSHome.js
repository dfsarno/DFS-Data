const url = require('url');
const path = require('path');

module.exports.DFSHome = function (request, response, next) {
 let pathname = url.parse(request.url).pathname.split('/').filter(Boolean)[0];
  pathname = pathname || 'home';
  response.sendFile(path.join(__dirname, '../../', 'index.html'));
}

