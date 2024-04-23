import styles from '../PostItem/PostItem.module.css'

const PostItem = (props) => {
    return (
        <li className={styles.post}>
            <p className={styles.author}>{props.onAuthorChange}</p>
            <p className={styles.content}>{props.onTextChange}</p>
        </li>
    );
}

export default PostItem