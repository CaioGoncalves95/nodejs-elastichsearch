const esClient = require('./client');

esClient.ping({
    requestTimeout: 1000
}, error => {
    if (error) {
        console.log('ElasticSearch cluster is down"');
    } else {
        console.log('ElasticSearch up and running!');
    }
})