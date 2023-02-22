
exports.seed = function(knex) {
  return knex('companies').insert([
    {id: 1, cnpj: "28013875000147", name: "Coalah"},
  ]);
};
