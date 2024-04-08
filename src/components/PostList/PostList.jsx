import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';

const PostList = () => {
    return (
        <ul className={styles.posts}>
            <PostItem 
                author='Carol'
                content='React is awesome!'
            />
            <PostItem 
                author='John'
                content='This is a component.'
            />  
        </ul>
    );
}

export default PostList