import { TodoComponentPropsType } from "../../../types";
import Button from '@mui/material/Button';
import styles from "./Todo.module.css";
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

const Todo: React.FC<TodoComponentPropsType> = ({ todo, onComplete, onDelete, onEdit }) => {
    const { t } = useTranslation()
    const theme = useTheme();

    return (
        <li
            className={`${styles.todo} ${todo.isComplete === true ? styles.completedLi : ""
                }`}
        >
            <Box style={{ color: `${theme.palette.mode === "dark" ? "white" : "unset"}` }} className={todo.isComplete === true ? styles.completed : ""}>
                {todo.text}
            </Box>
            <Box>
                <Button id="edit-todo-cy" onClick={onEdit} className={styles.edit}>{t("Edit")}</Button>
                <Button id="complete-todo-cy" className={styles.complete} onClick={onComplete}>
                    {todo.isComplete === true ? t("Uncomplete") : t("Complete")}
                </Button>
                <Button id="delete-todo-cy" onClick={onDelete} className={styles.delete}>
                    {t("Delete")}
                </Button>
            </Box>
        </li>
    );
};

export default Todo;