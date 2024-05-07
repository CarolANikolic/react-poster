import styles from '../PostItem/PostItem.module.css'

const PostItem = (props) => {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.author}</p>
            <p className={styles.content}>{props.text}</p>
        </li>
    );
}

export default PostItem