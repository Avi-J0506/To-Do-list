// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
// import ToDoItem from "./myComponents/ToDoItem";
import {Todos} from "./myComponents/Todos";
import Footer from "./myComponents/Footer";
import AddTodo from './myComponents/AddTodo'
// import {ToDoItem} from "./myComponents/ToDoItem.js"
import React, {useState} from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am onDelete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc) =>{
    let sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
  }
  const[todos, setTodos] = useState([
    {
      sno: 1,
      title: "Civil Worksheets",
      desc: "Take out the printouts"
    },
    {
      sno: 2,
      title: "Chemistry Assignments",
      desc: "Write the given answers"
    },
    {
      sno: 3,
      title: "French Textbook",
      desc: "Go to the teacher and get the book corrected"
    }
  ]);

  return (
    <>
      <Header title = "My Todos List" searchBar ={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos ={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
