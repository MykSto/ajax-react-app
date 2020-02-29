import React from 'react';
import Posts from 'containers/Blog/Posts/Posts';
import NewPost from 'containers/Blog/NewPost/NewPost';
import FullPost from 'containers/Blog/FullPost/FullPost';
import { Route, NavLink } from 'react-router-dom';
import './Blog.css';

const Blog = () => (
  <div className="Blog">
    <header>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
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
    <Route path="/" exact component={Posts} />
    <Route path="/new-post" component={NewPost} />
    <Route path="/:id" component={FullPost} />
  </div>
);

export default Blog;
