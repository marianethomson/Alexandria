const http = require('http');

const server = http.createServer(function(req,res){
	res.end('hello world');
});
server.listen(3000, 'localhost');

console.log('server running on port 3000');
