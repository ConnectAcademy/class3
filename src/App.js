import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPostForm from "./components/AddPostForm";

const App = () => {
  const [postsUpdate, setPostUpdate] = useState(false);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, [postsUpdate]);
  const addPost = () => {
    const data = { id: 2, title: "test123", author: "mirsat" };
    axios
      .post("http://localhost:3000/posts", data)
      .then(() => setPostUpdate((prev) => !prev));
  };
  const updatePost = () => {
    const data = { id: 2, title: "Neshto drugo", author: "mirsat" };
    axios
      .put("http://localhost:3000/posts/2", data)
      .then(() => setPostUpdate((prev) => !prev));
  };
  const deletePost = (id) => {
    axios
      .put(`http://localhost:3000/posts/${id}`)
      .then(() => setPostUpdate((prev) => !prev));
  };
  console.log(posts);
  return (
    <>
      <h1>Hello World!</h1>

      {posts &&
        posts.map((elm) => (
          <div
            style={{
              borderStyle: "solid",
              height: "200px",
              borderRadius: "10px",
            }}
          >
            <h3>{elm.title}</h3>
            <h3>{elm.body}</h3>
            <h3>{elm.author}</h3>
            <button onClick={() => deletePost(elm.id)}>Delete</button>
          </div>
        ))}
      <AddPostForm onPostsUpdate={setPostUpdate} />
    </>
  );
};

export default App;
