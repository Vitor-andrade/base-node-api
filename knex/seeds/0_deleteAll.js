exports.seed = function (knex) {
    return Promise.all([
        knex('company_profiles').del(),
        knex('users').del(),
        knex('resources_profiles').del(),
        knex('profiles').del(),
        knex('resources').del(),
        knex('companies').del(),
    ])
}