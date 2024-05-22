import styles from './NewPost.module.css';
import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const NewPost = () => {

    return (
        <Modal>
            <Form method="post" className={styles.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea 
                        id="body"
                        name="content"
                        required
                        rows={3}>
                    </textarea>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input 
                        type="text" 
                        id="name"
                        name="author"
                        required>
                    </input>
                </p>
                <p className={styles.actions}>
                    <Link
                        className={styles.cancelModal}
                        type="button"
                        to="..">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost

// React Router Form automatically send the values entered on the Form name (content and author);
// Form returns an object which can be accessed the method formData();
export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // {content: '...', author: '...'}
    const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return redirect("/");
}