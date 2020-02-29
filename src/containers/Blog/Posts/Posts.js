import React, { useState, useEffect } from 'react';
import instance from 'axios';
import Post from 'components/Post/Post';
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

  //   if (state.error) {
  posts = state.posts.map((post) => (
    <Post
      key={post.id}
      title={post.title}
      author={post.author}
      clicked={() => postSelectedHandler(post.id)}
    />
  ));
  //   }
  return (
    <section className={styles.Posts}>
      {posts}
    </section>
  );
};

export default Posts;
