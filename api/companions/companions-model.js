const db = require('../../data/db-config')

function get() {
    return db.map(people => {
        return { companion: people.companion }
    })
}
const insert = people => {
    return {
        message: 'you did it! you added a new companion',
        companion: `${people.companion}`
    }
}
const login = people => {
    return {
        message: 'you did it! you logged in',
        companion: `${people.companion}`
    }
}

module.exports = { get, insert, login }