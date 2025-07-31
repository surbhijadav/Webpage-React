import { MdCheckCircle ,MdDeleteForever} from "react-icons/md";

export const ToDoList = ({
    data,
    checked,
    onHandleDeleteTodo,
    onHandleChangeTodo}) => {
    return(
        <li className="todo-item">
                                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                                <button className="check-btn" onClick={ () =>onHandleChangeTodo(data)}>
                                    <MdCheckCircle  />
                                </button>
                                <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                                     <MdDeleteForever />
                                </button>
                            </li>                      
                          );
                        };
    