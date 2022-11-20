import React from 'react'
import { ToDoItem } from './ToDoItem'

export const Todos = ({todos,onDelete}) =>{
  let myStyle ={
    minHeight: "70vh",
    margin: "10rem auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my-2'>Todos List</h3>
      {todos.length===0?"No todos to display":
      todos.map((todo)=>{
        return( 
          <>
        <ToDoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
        <hr />
          </>
        )
      })
    }
    </div>
  )
}

