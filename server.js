const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    const url = req.url;

    if (url === "qeri") {res.end("qeri")}
    if (url === "ez") {res.end("ez")}
    if (url === "hopar") {res.end("hopar")}
    if (url === "avanak") {res.end("avanak")}
    if (url === "world") {res.end("world")}
	
	}).listen(3001);
