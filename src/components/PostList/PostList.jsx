import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';
import { useState } from "react";

const PostList = (props) => {
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
            {props.isPosting && 
                <Modal onClose={props.onStopPosting}>
                    <NewPost 
                        onAuthorChange={changeAuthor}
                        onTextChange={changeText}
                        onStopPosting={props.onStopPosting} 
                    />
                </Modal>
            }
            
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