const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {

  describe('GET /', () => {
    
    describe('Root Directory get', () => {
        it('should work', () => {
          return request(server)
            .get('/')
            .expect(200);
        });
    
        it('should return this text', () => {
          return request(server)
            .get('/')
            .then(res => {
              expect(res.text).toBe('Server Home directory GET is active.');
            });
        });

        it('should return text html', () => {
            return request(server)
              .get('/')
              .then(res => {
                expect(res.type).toBe('text/html');
              });
          });
        
    });

    
  });
        describe('/users/  Post /', () => {
    
            it('should work', () => {
                return request(server)
                  .post('/users')
                  .send({ name: 'Francis' })
                  .expect(200);
              });

  });

});
