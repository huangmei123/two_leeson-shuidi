import React from 'react';
import './App.css';
import "antd/dist/antd.css"
import TodoList from './components/TodoList';//将TodoList组件化
import {Card} from 'antd'
// Apollp是graphql框架
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  url:'http://localhost:3001/graphql' //来自于服务器端 服务器端基于koa
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Card
        style={{width:"600px",margin:"100px auto"}}>
        <h1>Graphql demo</h1>
      </Card>
    </ApolloProvider>
  );
}

export default App;
