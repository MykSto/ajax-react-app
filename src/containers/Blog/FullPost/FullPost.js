import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = (props) => {
  const [state, setState] = useState({
    loadedPost: null,
    hits: [],
  });


  useEffect(() => {
    if (props.id) {
      if (!state.loadedPost || (state.loadedPost && state.loadedPost.id !== props.id)) {
        axios.get(`/posts/${props.id}`)
          .then((response) => {
            setState({ loadedPost: response.data });
          });
      }
    }
  });

  const deletePostHandler = () => {
    axios.delete(`/posts/${props.id}`)
      .then((response) => {
        console.log(response);
        setState({ ...state, loadedPost: response });
      });
  };


  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

  if (props.id) {
    post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
  }

  if (state.loadedPost) {
    post = (
      <div className="FullPost">
        <h1>{state.loadedPost.title}</h1>
        <p>{state.loadedPost.body}</p>
        <div className="Edit">
          <button onClick={() => deletePostHandler(props.id)} className="Delete">Delete</button>
        </div>
      </div>
    );
  }
  return post;
};

export default FullPost;
