const TodoKey = "reactTodo";

export const getLocalStorageTodoData = (task) =>{
  return localStorage.setItem(TodoKey, JSON.stringify(task));
}

export const setLocalStorageTodoData = () =>{
  return  localStorage.setItem(TodoKey,JSON.stringify(task));
};