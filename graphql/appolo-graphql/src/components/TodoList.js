import React from 'react';
import {Query, graphql} from "react-apollo";
import gql from 'graphql-tag';


//前端定义它要的接口是什么 前端有决定权
// graphql查询参数
//接口语言  
const QUERY_TODO=gql`
  {
      TodoList{
          content
          id
          checked
      }
  }
`

const TodoList =()=>{
  <Query
   query={QUERY_TODO}
  >
      {({loading , error, data})=>{
          if(loading) return <p>loading.....</p>
          if(error) return <p>error....</p>
          return (
          <li>{}
              
          </li>
          )
      }}
  </Query>
}

export default TodoList;