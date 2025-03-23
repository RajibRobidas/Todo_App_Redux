import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            //action.playload
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },
        marksAsDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isDone = true;  // Immer handles immutability
            }
        },
    },
});

export const {addTodo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;