import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Post from 'components/Post/Post';
import NewPost from 'components/NewPost/NewPost';
import FullPost from 'components/FullPost/FullPost';
import './Blog.css';

const Blog = () => {
  const [state, setState] = useState({
    posts: [],
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setState({ posts: response.data });
        // console.log(response);
      });
  });

  const posts = state.posts.map((post, key) => (
    <Post key={key} title={post.title} />
  ));

  return (
    <div>
      <section className="Posts">
      {posts}
      </section>
      <section>
        <FullPost />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
