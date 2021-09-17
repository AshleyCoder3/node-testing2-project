const db = require('../../data/db-config')

module.exports = {
    insert,
    getAll,
    getById,
    remove
}

function getAll() {
    return db('companions')
}

function getById(id) {
    return db('companions')
        .where('id', id)
}

async function insert(companion) {
    const [id] = await db('companions').insert(companion);
    return getById(id)
}
function remove(id){
    const deletedCompanion = getById(id);
    db('posts').where('id', id).del();
    return deletedCompanion;
}