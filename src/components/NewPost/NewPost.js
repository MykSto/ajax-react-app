import React, { useState } from 'react';
import axios from 'axios';

import './NewPost.css';

const NewPost = () => {
  const [state, setState] = useState({
    title: '',
    body: '',
    author: 'Mike',
  });

  const postDataHandler = () => {
    const data = {
      title: state.title,
      body: state.body,
      author: state.author,
    };

    axios.post('/posts', data)
      .then((response) => {
        console.log(response);
      });
  };


  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input type="text" value={state.title} onChange={(event) => setState({ ...state, title: event.target.value })} />
      <label>Content</label>
      <textarea rows="4" value={state.body} onChange={(event) => setState({ ...state, body: event.target.value })} />
      <label>Author</label>
      <select value={state.author} onChange={(event) => setState({ ...state, author: event.target.value })}>
        <option value="Michail">Michail</option>
        <option value="Mike">Mike</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
