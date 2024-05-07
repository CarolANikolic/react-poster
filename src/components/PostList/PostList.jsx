import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';
import { useState } from "react";

const PostList = (props) => {
    const [posts, setPosts] = useState([]);

    // Use functional form when to set a new state (setState) depends on the current state (existingPosts).
    // This form gives you the most up-to-date status, even if it changes in process of updating the state, e.g., adding a new post to the list of existing posts.
    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {props.isPosting && 
                <Modal onClose={props.onStopPosting}>
                    <NewPost 
                        onCancel={props.onStopPosting} 
                        onAddPost={addPostHandler}
                    />
                </Modal>
            }
            
            <ul className={styles.posts}>
                {posts.map((post, index) => 
                    <PostItem 
                        key={index}
                        author={post.author}
                        text={post.content}
                    />  
                )}
            </ul>
        </>
    );
}

export default PostList