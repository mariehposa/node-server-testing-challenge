exports.seed = function(knex) {
  return knex('project').insert([
    {username: 'maryam', password:'maryam'},
    {username: 'karim', password: 'karim'},
    {username: 'yusuf', password: 'yusuf'}
  ]);
};
