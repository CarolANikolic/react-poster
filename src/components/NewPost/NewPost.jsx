import styles from './NewPost.module.css';
import { useState } from 'react';

const NewPost = (props) => {
    const [ enteredText, setEnteredText ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function changeText(event) {
        setEnteredText(event.target.value)
    }

    function changeAuthor(event) {
        setEnteredAuthor(event.target.value)
    }

    function submitPostHandler(event) {
        event.preventDefault();
        const postData = {
            content: enteredText,
            author: enteredAuthor
        }
        props.onStopPosting();
    }

    return (
        <form className={styles.form} onSubmit={submitPostHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea 
                    id="body"
                    required
                    rows={3}
                    onChange={changeText}
                    >
                </textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    onChange={changeAuthor}>
                </input>
            </p>
            <p className={styles.actions}>
                <button 
                    type="button"
                    onClick={props.onStopPosting}>
                    Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost