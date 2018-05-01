module.exports = function(knex) {
  function getPerson(name) {
    return knex('famous_people')
      .where('first_name', 'like', `%${name}%`)
      .orWhere('last_name', 'like', `%${name}%`)
  }
  return {
    getPerson
  }
}