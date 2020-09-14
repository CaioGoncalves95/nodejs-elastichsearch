const esClient = require('./client');

const insertDoc = async function(indexName, _id, mappingType, data) {
    return await esClient.index({
        index: indexName,
        type: mappingType,
        id: _id,
        body: data
    });
}

module.exports = insertDoc;

async function insertDocuments() {
    const data1 = {
        title: 'Learn Elastic Search',
        tags: ['NodeJS', 'ElasticSearch', 'Programming'],
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }

    const data2 = {
        title: 'Learn SQL',
        tags: ['NodeJS', 'SQL', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data3 = {
        title: 'Learn MongoDB',
        tags: ['NodeJS', 'MongoDB', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data4 = {
        title: 'Learn React',
        tags: ['NodeJS', 'React', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data5 = {
        title: 'Learn React Native',
        tags: ['NodeJS', 'React Native', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data6 = {
        title: 'Learn Typescript',
        tags: ['NodeJS', 'Typescript', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data7 = {
        title: 'Learn REST API',
        tags: ['NodeJS', 'REST API', 'Programming'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data8 = {
        title: 'Learn ECM',
        tags: ['NodeJS', 'ECM', 'Software Engineer'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data9 = {
        title: 'Learn BPMN',
        tags: ['NodeJS', 'BPMN', 'Software Engineer'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    const data10 = {
        title: 'Learn Clean Coding',
        tags: ['NodeJS', 'Clean Coding', 'Software Engineer'],
        body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
    }

    try {
        const resp1  = await insertDoc('blog', 1, 'ciphertrick', data1);
        const resp2  = await insertDoc('blog', 2, 'ciphertrick', data2);
        const resp3  = await insertDoc('blog', 3, 'ciphertrick', data3);
        const resp4  = await insertDoc('blog', 4, 'ciphertrick', data4);
        const resp5  = await insertDoc('blog', 5, 'ciphertrick', data5);
        const resp6  = await insertDoc('blog', 6, 'ciphertrick', data6);
        const resp7  = await insertDoc('blog', 7, 'ciphertrick', data7);
        const resp8  = await insertDoc('blog', 8, 'ciphertrick', data8);
        const resp9  = await insertDoc('blog', 9, 'ciphertrick', data9);
        const resp10 = await insertDoc('blog', 10, 'ciphertrick', data10);
        console.log(resp1);
        console.log(resp2);
        console.log(resp3);
        console.log(resp4);
        console.log(resp5);
        console.log(resp6);
        console.log(resp7);
        console.log(resp8);
        console.log(resp9);
        console.log(resp10);
    } catch (error) {
        console.log(error);
    }
}

insertDocuments();