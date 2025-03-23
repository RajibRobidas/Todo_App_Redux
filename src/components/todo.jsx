import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    const clickHandlerDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const clickHandlerMark = (id) => {
        dispatch(marksAsDone(id));
    }

    return (
        <>
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through", color: "red" } : {}}>{todo.task}</span>
                        <button onClick={() => clickHandlerDelete(todo.id)}>Delete</button>
                        <button onClick={() => clickHandlerMark(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}