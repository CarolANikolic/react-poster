const PostItem = (props) => {
    return (
        <li>
            <p>{props.author}</p>
            <p>{props.content}</p>
        </li>
    );
}

export default PostItem