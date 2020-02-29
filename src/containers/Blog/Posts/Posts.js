import React, { useState, useEffect } from 'react';
import instance from 'axios';
import Post from 'components/Post/Post';
import { Link } from 'react-router-dom';
import styles from './Posts.module.css';

const Posts = () => {
  const [state, setState] = useState({
    posts: [],
    // selectedPostId: null,
    // error: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await instance('/posts');
        const posts = result.data.slice(0, 4);
        const updatedPosts = posts.map((post) => (
          {
            ...post,
            author: 'Michail',
          }
        ));

        setState({ posts: updatedPosts });
      } catch (error) {
        // setState({ ...state, error: true });
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const postSelectedHandler = (id) => {
    setState((prevState) => ({
      ...prevState,
      selectedPostId: id,
    }));
  };

  let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

  posts = state.posts.map((post) => (
    <Link key={post.id} to={`/${post.id}`}>
      <Post
        title={post.title}
        author={post.author}
        clicked={() => postSelectedHandler(post.id)}
      />
    </Link>
  ));
  return (
    <section className={styles.Posts}>
      {posts}
    </section>
  );
};

export default Posts;
