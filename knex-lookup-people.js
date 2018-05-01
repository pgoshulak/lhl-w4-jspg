const knex = require('./knex-setup');
const people = require('./people-knex')(knex);

// Check for sufficient number of arguments
if (process.argv.length != 3) {
  console.log('Error: Must specify (1) argument as <name> (queries firstname and lastname')
  process.exit()
}

// Query and print matching 'person' entries
people.getPerson(process.argv[2])
  .then(rows => {
    console.log(`Found ${rows.length} results:`);
    rows.forEach((row, rowIndex) => {
      let birthdate = `${row.birthdate.getFullYear()}/${row.birthdate.getMonth()+1}/${row.birthdate.getDate()}`
      console.log(`${rowIndex + 1} - ${row.first_name} ${row.last_name}, born ${birthdate}`)
    })
  })
  .then(() => {
    knex.destroy()
  });