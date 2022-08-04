import React from "react";
import axios from "axios";

const AddPostForm = ({ onPostsUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, body, author } = e.target;
    const data = {
      title: title.value,
      body: body.value,
      author: author.value,
    };

    axios.post("http://localhost:3000/posts", data).then(() => {
      console.log("Success!");
      onPostsUpdate((prev) => !prev);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="" name="title" />
        <input placeholder="" name="body" />
        <input placeholder="" name="author" />
        <button>Submit Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
