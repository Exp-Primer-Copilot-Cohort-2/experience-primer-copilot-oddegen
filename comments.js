// Create web server
// Create a server that listens on port 3000 and responds with a file called comments.html that contains the comments from the previous exercise. Use the fs module to read the file and the http module to create the server.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000);