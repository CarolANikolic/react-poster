import PostList from "../components/PostList/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <main>
        <Outlet/>
        <PostList/>
      </main>
    </>
  )
}

export default Posts
