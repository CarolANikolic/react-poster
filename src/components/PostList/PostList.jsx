import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';

const PostList = (props) => {

    return (
        <>
            {props.isPosting && 
                <Modal onClose={props.onStopPosting}>
                    <NewPost onStopPosting={props.onStopPosting} />
                </Modal>
            }
            
            <ul className={styles.posts}>
                <PostItem 
                    onAuthorChange='John'
                    onTextChange='This is a component.'
                />  
            </ul>
        </>
    );
}

export default PostList