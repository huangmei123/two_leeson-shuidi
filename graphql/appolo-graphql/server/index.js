const Koa = require('koa');
const {ApolloServer,gql} =require('apollo-server-koa')
const {readFile} = require('./utils')
const cors = require('@koa/cors');

const typeDefs = gql`
    type TodoItem{
        id:ID
        content: String
    }
    type Query{
      TdoList:[TodoItem!]
  }
`
const resolves={
    Query:{
      TodoList:async()=>{
          const data = await readFile('./mock/index.json');
          const todoList =JSON.parse(data);
          return todoList;
      }     
    }
}

const server = new ApolloAerver({
  typeDefs,
  resolves
})

const app = new Koa();
server.aapplyMiddleware({app});
app.use(cors())
app.listen(3001);