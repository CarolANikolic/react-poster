import PostItem from "../PostItem/PostItem";
import styles from "../PostList/PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
    const posts = useLoaderData();
    
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