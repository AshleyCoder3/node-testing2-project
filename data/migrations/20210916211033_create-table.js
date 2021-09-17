
exports.up = function(knex) {
  return knex.schema
      .createTable('companions', tbl =>{
          tbl.increments('companion_id')
          tbl.text('companion_name', 100)
              .notNullable()
              .unique()
      })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('companions')
};
