const PORT = 4000

const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use('/api',router)
server.listen(PORT,(res,req)=>{
    console.log("running at port no"+PORT);
})
/*paste in pack.json----
{
  "users": [
    {
      "id": 1,
      "age": "1089890"
    },
    {
      "id": 2,
      "active": false
    },
    {
      "id": 3,
      "name": "Bob Taylor",
      "age": 45,
      "active": false
{
  "name": "js-mock-apis",
  "version": "1.0.0",
  "description": "A simple REST and GraphQL mock API's project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "mock:api": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vcpablo/js-mock-apis.git"
  },
  "keywords": [
    "mock-api",
    "javascript",
    "graphql",
    "rest"
  ],
  "author": "Pablo Veiga",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/vcpablo/js-mock-apis/issues"
  },
  "homepage": "https://github.com/vcpablo/js-mock-apis#readme",
  "devDependencies": {
    "json-server": "^0.16.3"
  }
}*/