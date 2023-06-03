import styles from "./TodoForm.module.css";
import React, { useEffect, useRef, useState } from "react";
import Button from '@mui/material/Button';
import { TodoFormComponentPropsType } from "../../../types";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

const TodoForm: React.FC<TodoFormComponentPropsType> = (props) => {
    const { t } = useTranslation()
    const [input, setInput] = useState(props.edit ? props.edit.text : "");
    const inputRef = useRef<HTMLInputElement>(null);
    const theme = useTheme();

    useEffect(() => {
        inputRef.current!.focus();
    }, []);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) {
            toast.error(t("FillTodoInput"));
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
                style={{ color: `${theme.palette.mode === "dark" ? "white" : "unset"}` }}
                placeholder={props.edit ? `${t("UpdateTodo")}` : `${t("AddTodo")}`}
                ref={inputRef}
            />
            <Button type="submit">{props.edit ? t("Update") : t("Add")}</Button>
        </form>
    );
};

export default TodoForm;