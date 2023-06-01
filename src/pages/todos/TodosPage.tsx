import { Box } from '@mui/material';
import { useState } from "react";
import TodoForm from '../../components/todos/todoForm/TodoForm';
import TodoList from '../../components/todos/todoList/TodoList';
import { TodoType } from '../../types';

const TodosPage = () => {
    const [todos, setTodos] = useState<any[]>([]);

    const submitTodo = (input: string) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const completeTodo = (id: number) => {
        const cloneTodos: TodoType[] = [...todos];
        const index = cloneTodos.findIndex((todo) => todo.id === id);
        const todo = { ...cloneTodos[index] };

        todo.isComplete = !todo.isComplete;
        cloneTodos[index] = todo;

        setTodos(cloneTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const updateTodo = (newValue: string, id: number) => {
        const cloneTodos: TodoType[] = [...todos];
        const index = cloneTodos.findIndex((todo) => todo.id === id);
        const todo = { ...cloneTodos[index] };

        todo.text = newValue;
        cloneTodos[index] = todo;

        setTodos(cloneTodos);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                padding: "2rem",
                alignItems: 'center',
                gap: "1rem",
                flexDirection: 'column',
                minHeight: '100%',
                position: "relative"
            }}
        >
            <TodoForm submitTodo={submitTodo} />
            <TodoList
                onComplete={completeTodo}
                onDelete={deleteTodo}
                todos={todos}
                updateTodo={updateTodo}
            />
        </Box>
    );
}

export default TodosPage;





