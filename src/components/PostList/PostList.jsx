import PostItem from "../PostItem/PostItem";
import styles from "../PostList/PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    const posts = useLoaderData();
    
    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
    // Use functional form when to set a new state (setState) depends on the current state (existingPosts).
    // This form gives you the most up-to-date status, even if it changes in process of updating the state, e.g., adding a new post to the list of existing posts.
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <> 
            {posts.length > 0 && ( 
                <ul className={styles.posts}>
                    {posts.map((post, index) => 
                        <PostItem 
                            key={index}
                            author={post.author}
                            text={post.content}
                        />  
                    )}
                </ul>)}
            
            {posts.length === 0 && (
                <div className={styles.noPost}>
                    <h2>There are no posts yet.</h2>
                    <p>Start posting something!</p>
                </div>
            )}
        </>
    );
}

export default PostList