import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './FullPost.css';

const FullPost = (props) => {
  const [state, setPost] = useState({
    loadedPost: null,
    // hits: [],
  });

  // const query = new URLSearchParams(this.props.location.search);
  //   for (let param of query.entries()) {
  //       console.log(param); // yields ['start', '5']
  //   }


  useEffect(() => {
    async function loadData() {
      console.log('full post', props.match.params.id);
      if (props.match.params.id) {
        // if (!state.loadedPost || (state.loadedPost && state.loadedPost.id !== props.match.params.id)) {
        const result = await axios.get(`/posts/${props.match.params.id}`);

        setPost({ loadedPost: result.data });
        // }
      }
    }
    loadData();
  }, [props.match.params.id]);


  const deletePostHandler = () => {
    axios.delete(`/posts/${props.match.params.id}`)
      .then((response) => {
        // console.log(response);
        setPost({ loadedPost: response });
      });
  };


  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

  if (props.match.params.id) {
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
