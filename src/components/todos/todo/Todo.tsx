import { TodoComponentPropsType } from "../../../types";
import Button from '@mui/material/Button';
import styles from "./Todo.module.css";
import Box from '@mui/material/Box';
import { useTranslation } from "react-i18next";

const Todo: React.FC<TodoComponentPropsType> = ({ todo, onComplete, onDelete, onEdit }) => {
    const { t } = useTranslation()

    return (
        <li
            className={`${styles.todo} ${todo.isComplete === true ? styles.completedLi : ""
                }`}
        >
            <Box className={todo.isComplete === true ? styles.completed : ""}>
                {todo.text}
            </Box>
            <Box>
                <Button onClick={onEdit} className={styles.edit}>{t("Edit")}</Button>
                <Button className={styles.complete} onClick={onComplete}>
                    {todo.isComplete === true ? t("Uncomplete") : t("Complete")}
                </Button>
                <Button onClick={onDelete} className={styles.delete}>
                    {t("Delete")}
                </Button>
            </Box>
        </li>
    );
};

export default Todo;