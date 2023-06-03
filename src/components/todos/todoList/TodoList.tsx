import styles from "./TodoList.module.css";
import { useState } from "react";
import TodoForm from "../todoForm/TodoForm";
import { TodoListComponentPropsType } from "../../../types";
import Todo from "../todo/Todo";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";

const TodoList: React.FC<TodoListComponentPropsType> = ({ todos, onComplete, onDelete, updateTodo }) => {
    const { t } = useTranslation()
    const [edit, setEdit] = useState({ id: 0, text: "", isComplete: false });

    const editTodo = (newValue: string) => {
        updateTodo(newValue, edit.id);
        setEdit({ id: 0, text: "", isComplete: false });
    };

    const renderTodos = () => {
        if (todos.length === 0) return <Typography className={styles.addMessage} variant="h4">{t("AddNewTodo")}</Typography>
        return (
            <ul>
                {todos.map((todo) => {
                    return (
                        <Todo
                            onComplete={() => onComplete(todo.id)}
                            onDelete={() => onDelete(todo.id)}
                            onEdit={() => setEdit(todo)}
                            key={todo.id}
                            todo={todo}
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={styles.todoList}>
            {edit.id ? <TodoForm edit={edit} submitTodo={editTodo} /> : renderTodos()}
        </div>
    );
};

export default TodoList;