import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

const NewPost = (props) => {
  const [state, setNewPost] = useState({
    title: '',
    body: '',
    author: 'Mike',
    submitted: false,
  });

  const postDataHandler = () => {
    const data = {
      title: state.title,
      body: state.body,
      author: state.author,
    };

    async function postData() {
      const result = await axios.post('/posts', data);

      return (
        result,
        setNewPost({ ...state, submitted: true })
        // props.history.replace('/posts');
        // props.history.push('/posts');
      );
    }
    postData();
  };


  return (
    <div className="NewPost">
      {state.submitted && (<Redirect to="/posts" />)}
      <h1>Add a Post</h1>
      <label>Title</label>
      <input type="text" value={state.title} onChange={(event) => setNewPost({ ...state, title: event.target.value })} />
      <label>Content</label>
      <textarea rows="4" value={state.body} onChange={(event) => setNewPost({ ...state, body: event.target.value })} />
      <label>Author</label>
      <select value={state.author} onChange={(event) => setNewPost({ ...state, author: event.target.value })}>
        <option value="Michail">Michail</option>
        <option value="Mike">Mike</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
