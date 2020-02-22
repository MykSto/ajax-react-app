import React, { useState } from 'react';
import axios from 'axios';

import './NewPost.css';

const NewPost = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
    author: 'Mike',
  });

  const postDataHandler = () => {
    const data = {
      title: state.title,
      content: state.content,
      author: state.author,
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log(response);
      });
  };


  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>Title</label>
      <input type="text" value={state.title} onChange={(event) => setState({ title: event.target.value })} />
      <label>Content</label>
      <textarea rows="4" value={state.body} onChange={(event) => setState({ body: event.target.value })} />
      <label>Author</label>
      {state.body}
      <select value={state.author} onChange={(event) => setState({ author: event.target.value })}>
        <option value="Michail">Michail</option>
        <option value="Mike">Mike</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
