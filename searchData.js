const esClient = require('./client');

const searchDoc = async function(indexName, mappingType, payload) {
    return await esClient.search({
        index: indexName,
        type: mappingType,
        body: payload
    });
}

module.exports = searchDoc;

async function searchByTag(tag) {
    const body = {
        query: {
            match: {
                "tags": tag
            }
        }
    }

    try {
        const resp = await searchDoc('blog', 'ciphertrick', body);
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}

searchByTag("Programming");