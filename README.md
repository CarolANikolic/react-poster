# React Poster

This project was created to explore the React framework as part of the course "Next.js 14 and React: The Complete Guide" by Maximilian Schwarzmuller. With React Poster you can create your posts and thoughts about the framework. Your post will be saved on the backend as part of a JSON file. Also, you can edit the post and identify yourself in the author input field. 

## Development Process

- Setting up the project starting files using [Vite](https://vitejs.dev/guide/);
- Clean up starting files;
- Create a post component;
- Add styles for the post component;
- Create a post list component; 
- Include styles for the post list;
- Create a new post component form;
- Include styles for the new post component;
- Use useState hook to get inputted data from the new post form into a post;
- Create a Modal and its style to wrap the new post component;
- Create a header component and it as a common component;
- Use useState to handle the opening and closing of the new post modal;
- Handle for submission by saving entered data as an array of objects;
- Display the object posts as a list of posts;
- Create the backend (see repository [react-poster-backend](https://github.com/CarolANikolic/react-poster-backend)) to save the posts on a json file.
- Configure routes;
- Refactor components as component routes;
- Refactor code: substitute useState to handle loading posts with data fetching loader();
- Refactor code: submit data using action()s.

## Built with

- Semantic HTML5 markup;
- React;
- Mobile-first workflow;

## Technologies and Tools

- [HTML5](https://html.com)
- [CSS3](https://www.w3.org/Style/CSS/)
- [React](https://react.dev)

## Requirements

To work with the code, you will need, before you begin, to install on your machine: NodeJs, and Git and to have a source-code editor such as [VSCode](https://code.visualstudio.com).
You will also need to download all the dependencies used in this project by using this command in your terminal:

```
npm install
```

To run the project on your machine:  
(a) Open http://localhost:5173/ in your browser, and on the terminal use de following command:
```
npm run dev 
```

(b) Create a copy of the backend [react-poster-backend](https://github.com/CarolANikolic/react-poster-backend) in your machine, install all dependencies (npm install), and on the terminal use the following command:
```
npm start 
```


## What I Learned

### Set up routes and use nested/children route components

- React allows us to create a routing structure using route objects, enabling us to implement more complex navigation patterns. In this project, the main route (home) has children, which extend the URL with different paths ("/create-post", "/:postId"). For each path, we specify a route component (element) to be rendered. Additionally, we can include actions or loader tasks/functionality linked to the route. For example, handling form submission (new post) or requesting and loading data from the backend (list of posts).

~~~
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout/>,
    children: [
      { 
        path: '/', 
        element: <Posts/>,
        loader: postsLoader,
        children: [
          { 
          path: '/create-post', 
          element: <NewPost/>,
          action: newPostAction
          },
          {
            path: '/:postId',
            element: <PostDetails/>,
            loader: postDetailsLoader
          }
        ],
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
~~~

### Use the Outlet React Router component as a placeholder for rendering child route components/elements within a parent route
- When we want to render a specific component/element within the parent component route, we use Outlet as a placeholder. In this case, the component route Posts has the Outlet to serve as a placeholder (like a prop) of its children component (NewPost and PostDetails) which will be dynamically rendered when the URL path to /create-post and /:postId matches. 

~~~
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
~~~

### Use formData() to access the entered values in a Form
- We can automatically access the values entered in a React component's built-in form using the formData() method. This method returns a FormData object, which represents the form data. To access the data as plain JavaScript, we need to transform the FormData object into a plain object. This can be achieved using Object.fromEntries(formData). Each key in the resulting object corresponds to the name attribute of an input field in the form, and its value represents the entered value. Utilizing formData() is great for handling form submissions as it provides us with the latest entered values without the need to manage the state using the useState hook.

~~~
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
~~~

### Made with :heart: by [Caroline Almeida Nikolic](https://www.linkedin.com/in/caroline-nikolic/)