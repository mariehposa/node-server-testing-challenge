
exports.up = function(knex) {
    return knex.schema
    .createTable('project', table => {
        table.increments('id')
        table.text('username', 128)
          .notNullable()
        table.string('password')
          .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project')
};
