import PostItem from "../PostItem/PostItem";

const PostList = () => {
    return (
        <ul>
            <PostItem 
                author='Carol'
                content='React is awesome!'
            />
            <PostItem 
                author='John'
                content='This is a component.'
            /> 
        </ul>
    );
}

export default PostList