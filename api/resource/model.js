// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const create = async (resourceData) => {
    const[resourceId] = await db('resources').insert(resourceData)
    return findById(resourceId)
}

const findById = async (resourceId) => {
    return db('resources').where({ resource_id: resourceId }).first();
  };

module.exports ={
    getAll,
    create,
    findById
}