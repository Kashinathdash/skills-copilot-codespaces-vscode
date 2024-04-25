// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var filename = "." + url_parts.pathname;
    if(filename === './') {
        filename = 'index.html';
    }
    var ext = path.extname(filename);
    var contentType = 'text/html';
    switch(ext) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });
});

server.listen(8080);
console.log('Server running at http://