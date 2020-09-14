# Exemplos de uso NodeJS + ElasticSearch

Sequência de scripts para teste de ping, criação de index, mapa, inserção e procura no Elastic Search. <br>
Exemplo seguido do site https://ciphertrick.com/elasticsearch-and-nodejs-tutorial/. Thanks!!

## Como instalar o ElasticSearch no Windows

A versão usada neste tutorial foi a 7.9.1, mas deve funcionar em qualquer versão do Elastic acima da 4.0 (mínimo)

##### Passos
1. Entre em https://www.elastic.co/pt/downloads/elasticsearch e escolha a opção de download para Windows
2. Extraia o ZIP em qualquer pasta, eu usei o diretório C:/
3. Com um terminal (Windows Powershell, por exemplo), navegue até a pasta que você extraiu o ES e digite **.\bin\elasticsearch.bat**
4.  Para certificar, abra o chrome e digite **http://localhost:9200/**, você deve receber uma resposta com o nome do cluster, versão, e etc. Pronto, ES está rodando, agora vamos usá-lo!

##### Sequência de Execução dos scripts
1. Após clonar este repo, execute **node ping.js**. Ele vai dar um ping no cluster do ES, só para certificar que está tudo OK.
2. Para criar o índice, execute **node createIndex.js**. Próximo passo é configurar qual será o modelo dos dados que vamos inserir no índice.
3. Execute **addMappingToIndex.js**. Assim criaremos um modelo para criação de posts em blog, com título, tags e corpo do post.
4. Agora, inserimos 10 novos posts, executando **insertData.js**.
5. Em seguida, procuramos todos os posts com a tag **_Programming_**, e teremos como retorno apenas 7 posts, pois existem 3 que não contém a tag **_Programming_**.
<br>
Sinta-se livre para testar outros tipos de queries e dados, alterando os arquivos como achar necessário!