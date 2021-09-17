
exports.seed = function(knex) {
      return knex('companions').insert([
          {companion_id: 1, companion_name: 'Adam Mitchell'},
          {companion_id: 2, companion_name: 'Adelaide Brooke'},
          {companion_id: 3, companion_name: 'Amy Pond'},
          {companion_id: 4, companion_name: 'Astrid Peth'},
          {companion_id: 5,companion_name: 'Bill Potts'},
          {companion_id: 6,companion_name: 'Captain Jack Harkness'},
          {companion_id: 7, companion_name: 'Clara Oswald'},
          {companion_id: 8,companion_name: 'Craig Owens'},
          {companion_id: 9,companion_name: 'Dan Lewis'},
          {companion_id: 10,companion_name: 'Donna Noble'},
          {companion_id: 11,companion_name: "Graham O'Brien"},
          {companion_id: 12, companion_name: 'Jackson Lake'},
          {companion_id: 13,companion_name: 'Lady Christina de Souza'},
          {companion_id: 14, companion_name: 'Martha Jones'},
          {companion_id: 15,companion_name: 'Mickey Smith'},
          {companion_id: 16,companion_name: 'Nardole'},
          {companion_id: 17, companion_name: 'River Song'},
          {companion_id: 18,companion_name: 'Rory Williams'},
          {companion_id: 19,companion_name: 'Rose Tyler'},
          {companion_id: 20,companion_name: 'Ryan Sinclair'},
          {companion_id: 21,companion_name: 'Sarah Jane Smith'},
          {companion_id: 22, companion_name: 'Wilfred Mott'},
          {companion_id: 23,companion_name: 'Yasmin Khan'}

      ]);
};
