
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Frodo Baggings' }, 
        { name: 'Samwise Gamgee' }, 
        { name: 'Meriadoc Brandybuck' }, 
        { name: 'Peregrin Took' }, 
        { name: 'Mithrandir' }, 
        { name: 'Boromir' }, 
        { name: 'Legolas' }, 
        { name: 'Gimly' }, 
        { name: 'Aragorn' }, 
      ]);
    });
};
