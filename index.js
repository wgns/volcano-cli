#!/usr/bin/env node

const [,, ...args] = process.argv

// console.log(`${args}`)

if (args == "serve") {
    const handler = require('serve-handler');
    const http = require('http');

    const server = http.createServer((request, response) => {
      return handler(request, response);
    })

    var port = Math.floor(Math.random() * (9000 - 3000 + 1) ) + 3000;

    server.listen(port, () => {
      console.log('Running at http://localhost:' + port);
    });
}