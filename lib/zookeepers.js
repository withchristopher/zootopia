// import requires
const fs = require('fs');
const path = require('path');

//filterByQuery function
function filterByQuery(query, zookeepers) {
    // conditionals for age, favorite animal, name, 
    let filteredResults = zookeepers;
    if (query.age) {
        filteredResults = filteredResults.filter(
            // Since our form data will be coming in as strings, and our JSON is storing
            // age as a number, we must convert the query string to a number to
            // perform a comparison:
            (zookeeper) => zookeeper.age === Number(query.age)
        );
    }
    if (query.favoriteAnimal) {
        filteredResults = filteredResults.filter(
            (zookeeper) => zookeeper.favoriteAnimal === query.favoriteAnimal
        );
    }
    if (query.name) {
        filteredResults = filteredResults.filter(
            (zookeeper) => zookeeper.name === query.name
        );
    }
    return filteredResults;
}

//function findById
function findById(id, zookeepers) {
    const result = zookeepers.filter((zookeeper) => zookeeper.id === id)[0];
    return result;
}

// function createNewZookeeper
function createNewZookeeper(body, zookeepers) {
    const zookeeper = body;
    zookeepers.push(zookeeper);
    fs.writeFileSync(
        path.join(__dirname, "../data/zookeepers.jsob"),
        JSON.stringify({ zookeepers }, null, 2)
    );
    return zookeeper;
};

//function validateZookeeper
function validateZookeeper(zookeeper) {
    if (!zookeeper.name || typeof zookeeper.name !== "string") {
        return false;
    }
    if (!zookeeper.age || typeof zookeeper.age !== "number") {
        return false;
    }
    if (!zookeeper.favoriteAnimal || typeof zookeeper.favoriteAnimal !== "string") {
        return false;
    }
    return true;
}

// module exports for all(4) functions

module.exports = {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
};