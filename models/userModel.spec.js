const db = require('../data/dbConfig.js');
const userModel = require('./userModel.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert()', () => {

    describe('Success', () => {
        it('should insert the provided user', async () => {
          await userModel.insert({ name: 'Omar'});
          await userModel.insert({ name: 'Adam' });
          await userModel.insert({ name: 'Jonathan' });
    
          const users = await db('users');
          expect(users).toHaveLength(3);
        });
    
        it('should return status code 200', async () => {
            const user = await userModel.insert({ name: 'Alexander' });
            
            expect(user.name).toBe('Alexander')
        });
    });
  });
});