import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }) => {
    const navigate = useNavigate();
    
    function closeHandler() {
        // Flexible way to command the navigation one level before (one path before);
        navigate('..');
    }

    return ( 
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog 
                open
                className={styles.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal