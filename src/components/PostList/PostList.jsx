import NewPost from "../NewPost/NewPost";
import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';
import { useState } from "react";

const PostList = () => {
    const [ enteredText, setEnteredText ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function changeText (event) {
        setEnteredText(event.target.value)
    }

    function changeAuthor (event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            <NewPost 
                onAuthorChange={changeAuthor}
                onTextChange={changeText} 
            />
            <ul className={styles.posts}>
                <PostItem 
                    onAuthorChange={enteredAuthor}
                    onTextChange={enteredText}
                />
                <PostItem 
                    onAuthorChange='John'
                    onTextChange='This is a component.'
                />  
            </ul>
        </>
    );
}

export default PostList