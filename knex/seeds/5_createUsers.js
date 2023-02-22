
exports.seed = function(knex) {
  return knex('users').insert([
    {
      id: 1, 
      email: 'suporte@coalah.com.br', 
      name: "Suporte Coalah", 
      username: 'coalah', 
      password: knex.raw(`md5('123123123')`)
    },
  ]);
};
