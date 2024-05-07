import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import PostItem from "../PostItem/PostItem";
import styles from '../PostList/PostList.module.css';
import { useState } from "react";

const PostList = () => {
    const [ isModalVisible, setModalVisibility ] = useState(true)
    const [ enteredText, setEnteredText ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function modalVisibilityHandler () {
        setModalVisibility(false)
    }

    function changeText (event) {
        setEnteredText(event.target.value)
    }

    function changeAuthor (event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            {isModalVisible && 
                <Modal onClose={modalVisibilityHandler}>
                    <NewPost 
                        onAuthorChange={changeAuthor}
                        onTextChange={changeText} 
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