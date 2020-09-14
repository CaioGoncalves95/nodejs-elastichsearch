const esClient = require('./client');

const addmappingToIndex = async function(indexName, mappingType, mapping) {
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        type: mappingType,
        body: mapping,
        include_type_name: true
    });
}

module.exports = addmappingToIndex;

async function test() {
    const mapping = {
        properties: {
            title: {
                type: "text"
            },
            tags: {
                type: "keyword"
            },
            body: {
                type: "text"
            },
            timestamp: {
                type: "date",
                format: "epoch_millis"
            }
        }
    }

    try {
        const resp = await addmappingToIndex('blog', 'ciphertrick', mapping);
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

test();