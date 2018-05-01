module.exports = function(knex) {

  // SELECT * WHERE firstname OR lastname
  function getPerson(name) {
    return knex('famous_people')
      .where('first_name', 'like', `%${name}%`)
      .orWhere('last_name', 'like', `%${name}%`)
  }
  // INSERT firstname, lastname, birthdate
  function addPerson(first_name, last_name, birthdate) {
    return knex('famous_people')
      .insert({
        first_name: first_name,
        last_name: last_name,
        birthdate: birthdate
      })
  }
  return {
    getPerson,
    addPerson
  }
}