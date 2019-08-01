const http = require('http');

http.createServer((request, response) => {
  response.write('<h1>Hello World!</h1>');
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.end(body);
  });
}).listen(8080);