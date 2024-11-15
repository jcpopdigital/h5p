// scripts/test-build.js
const http = require('http');
const handler = require('serve-handler');
const open = require('open');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'dist',
    headers: [
      {
        source: '**/*.@(json|js|css)',
        headers: [{
          key: 'Access-Control-Allow-Origin',
          value: '*'
        }]
      }
    ]
  });
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
  open('http://localhost:3000');
});