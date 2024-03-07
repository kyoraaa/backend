var http = require("http");
http.createServer(function(request, response){
    //send http header
    //http status 200
    //content type : text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //feedback
    response.end('Hello world server');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');

