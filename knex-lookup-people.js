const knex = require('./knex-setup');
const people = require('./people-knex')(knex);

people.getPerson(process.argv[2])
  .then(rows => {
    console.log(`Found ${rows.length} results:`);
    rows.forEach((row, rowIndex) => {
      let birthdate = `${row.birthdate.getFullYear()}/${row.birthdate.getMonth()}/${row.birthdate.getDate()}`
      console.log(`${rowIndex + 1} - ${row.first_name} ${row.last_name}, born ${birthdate}`)
    })
  })
  .then(() => {
    knex.destroy()
  });