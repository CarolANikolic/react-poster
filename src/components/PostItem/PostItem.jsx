import styles from '../PostItem/PostItem.module.css';
import { Link } from "react-router-dom";

const PostItem = (props) => {
    return (
        <li className={styles.post}>
            <Link to={props.id}>
                <p className={styles.author}>{props.author}</p>
                <p className={styles.content}>{props.text}</p>
            </Link>
        </li>
    );
}

export default PostItem