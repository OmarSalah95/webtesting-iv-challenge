const server = require('express')();

server.use(require('express').json());

server.get('/', (req, res) => {
    // Sanity Check
    res.send(`Server Home directory GET is active.`);
  });
  
  module.exports = server;





