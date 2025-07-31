import { useState } from "react";
import "./ToDo.css";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { ToDoDateTime } from "./ToDoDateTime";
import { getLocalStorageTodoData,setLocalStorageTodoData } from "./ToDoLocalStorage";


export const ToDo = () => {
    const [task,setTask] = useState(() =>getLocalStorageTodoData());

    const handleFormSubmit = (inputValue) =>{
        const {id,content,checked} =inputValue;
        //to check if the input field is empty or not
        if (!content) return;
        //to check if the data is already existing or not
            // if(task.includes(inputValue))   return;
        const ifToDoContentMatched = task.find (
            (curTask) => curTask.content === content);
        if (ifToDoContentMatched) return;

        setTask((prevTask)=>[...prevTask,
            {id, content,checked} 
        ]);
   };
   
   //add data to local storage
   setLocalStorageTodoData(task);

   //todo handle delete
   const handleDeleteToDo = (value) => {
      const updatedTask = task.filter((curTask) =>curTask.content !== value );
      setTask(updatedTask);
   };
   
   //todo handle delete all
   const handleClearButton = () =>{
       setTask([]);
   };

   //todo handle checked todo
   const handleCheckedTodo = (content) =>{
    const updatedTask = task.map((curTask)=>{
        if(curTask.content === content){
            return{...curTask,checked : !curTask.checked};
        }else{
            return curTask;
        }
    })
   setTask(updatedTask); 
   };
       return(
           <section className="todo-container">
               <header>
                   <h1>Todo List</h1>
                   <ToDoDateTime/>
               </header>
               
               <ToDoForm  onAddToDO = {handleFormSubmit}/>

               <section className="myUnOrdList">
                   <ul>
                   { task.map((curTask=>{
                       return(
                           <ToDoList 
                           key={curTask.id}
                           data={curTask.content}
                           checked= {curTask.checked}
                           onHandleDeleteTodo={handleDeleteToDo}
                           onHandleChangeTodo={handleCheckedTodo}
                           />  )
                   }))}

                   </ul>
               </section>
               <section>
                   <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
               </section>
           </section>
       )
}
  
