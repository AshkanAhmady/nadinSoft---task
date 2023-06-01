import { TodoComponentPropsType } from "../../../types";
import Button from '@mui/material/Button';
import styles from "./Todo.module.css";
import Box from '@mui/material/Box';

const Todo: React.FC<TodoComponentPropsType> = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <li
            className={`${styles.todo} ${todo.isComplete === true ? styles.completedLi : ""
                }`}
        >
            <Box className={todo.isComplete === true ? styles.completed : ""}>
                {todo.text}
            </Box>
            <Box>
                <Button onClick={onEdit} className={styles.edit}>edit</Button>
                <Button className={styles.complete} onClick={onComplete}>
                    {todo.isComplete === true ? "uncomplete" : "complete"}
                </Button>
                <Button onClick={onDelete} className={styles.delete}>
                    delete
                </Button>
            </Box>
        </li>
    );
};

export default Todo;