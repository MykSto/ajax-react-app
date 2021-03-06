import React, { useState } from 'react';
import Posts from 'containers/Blog/Posts/Posts';
// import NewPost from 'containers/Blog/NewPost/NewPost';
import asyncComponent from 'hoc/asyncComponent';


import {
  Route, NavLink, Switch, Redirect,
} from 'react-router-dom';
import Context from 'context/context';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
  return import('containers/Blog/NewPost/NewPost');
});

// const Posts = React.lazy(()=> import('containers/Blog/Posts/Posts'))

const Blog = () => {
  const { Provider } = Context;
  const [auth, setAuth] = useState(true);

  return (
    <Provider value={{
      auth,
    }}
    >
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink exact to="/posts/">Posts</NavLink></li>
              {/* to style or add class NavLink -> activeStyle or activeClassName */}
              <li>
                <NavLink to={{
                  // relative path pathname: props.match.url + '/new-post' - path at the end of the current path
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true',
                }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* < Route path="/" exact render={()=> <h1>Home</h1>} /> */}
        <Switch>
          {auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    </Provider>
  );
};

export default Blog;
