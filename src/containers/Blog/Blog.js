import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Post from 'components/Post/Post';
import NewPost from 'components/NewPost/NewPost';
import FullPost from 'components/FullPost/FullPost';
import './Blog.css';

const Blog = () => {
  const [state, setState] = useState({
    posts: [],
    selectedPostId: null,
  });

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      const posts = result.data.slice(0, 4);
      const updatedPosts = posts.map((post) => (
        {
          ...post,
          author: 'Michail',
        }
      ));

      setState({ posts: updatedPosts });
    }
    fetchData();
  }, []);

  const postSelectedHandler = (id) => {
    setState((prevState) => ({
      ...prevState,
      selectedPostId: id,
    }));
  };

  const posts = state.posts.map((post) => (
    <Post
      key={post.id}
      title={post.title}
      author={post.author}
      clicked={() => postSelectedHandler(post.id)}
    />
  ));

  return (
    <div>
      <section className="Posts">
        {posts}
      </section>
      <section>
        <FullPost id={state.selectedPostId} />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  );
};

export default Blog;
