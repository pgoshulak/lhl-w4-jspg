const knex = require('./knex-setup');
const people = require('./people-knex')(knex);

// Check for sufficient number of arguments
if (process.argv.length != 5) {
  console.log('Error: Must specify (3) arguments as <first_name> <last_name> <birthdate>')
  process.exit()
}

// Add person given command line args
people.addPerson(process.argv[2], process.argv[3], process.argv[4])
  .then(result => {
    console.log(`Inserted:`, result);
  })
  .then(() => {
    knex.destroy()
  });