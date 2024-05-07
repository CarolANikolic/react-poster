import styles from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea 
                    id="body"
                    required
                    rows={3}
                    onChange={props.onTextChange}
                    >
                </textarea>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    onChange={props.onAuthorChange}>
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