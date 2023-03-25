import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./Todo";


function TodoContainer() {

  const toDos = useSelector(state => state.todos.entities)

  return (
    <>
      <div>TodoContainer</div>
      {toDos?.map(toDo => <ToDo toDo={toDo}/>)}
    </>
  )
}

export default TodoContainer;
