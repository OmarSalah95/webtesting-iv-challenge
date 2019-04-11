const server = require('express')();
const db = require('../data/dbConfig')

server.use(require('express').json());

server.get('/', (req, res) => {
    // Sanity Check
    res.send(`Server Home directory GET is active.`);
  });
  
  server.post('/users', (req, res) => {
    const newUser = req.body;
    req.body.name 
      ? db.insert(req.body)
          .then(user => {
            res.status(200).json(user);
          })
          .catch(err => {
            res.status(400).json({ message: 'Failed to add User' });
          })
      : res.status(500).json({
        Message: 'Please provide a name for the user.'
      });
   
  });

  module.exports = server;





