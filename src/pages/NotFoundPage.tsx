import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>صفحه پیدا نشد</h3>
            <Link to="/">Back to Dahboard</Link>
        </div>
    );
};

export default NotFound;