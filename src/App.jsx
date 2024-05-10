import MainHeader from "./components/MainHeader/MainHeader";
import PostList from "./components/PostList/PostList";
import { useState } from "react";

function App() {
  const [ isModalVisible, setModalVisibility ] = useState(false)

  function hideModalHandler () {
    setModalVisibility(false);
  }

  function showModalHandler () {
    setModalVisibility(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={isModalVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App
