import styles from "./TodoForm.module.css";
import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import { TodoFormComponentPropsType } from "../../../types";
import { toast } from "react-hot-toast";

const TodoForm: React.FC<TodoFormComponentPropsType> = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.text : "");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.focus();
    }, []);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) {
            toast.error("Please Fill The Input");
            return;
        }
        props.submitTodo(input);
        setInput("");
    };

    return (
        <form
            className={`${styles.todoForm} ${props.edit && styles.editForm}`}
            onSubmit={submitHandler}
        >
            <input
                type="text"
                onChange={changeHandler}
                value={input}
                placeholder={props.edit ? "Update Todo ..." : "Add Todo ..."}
                ref={inputRef}
            />
            <Button type="submit">{props.edit ? "Update" : "Add"}</Button>
        </form>
    );
};

export default TodoForm;