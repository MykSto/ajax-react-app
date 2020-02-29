import React from 'react';
import Posts from 'containers/Blog/Posts/Posts';
import NewPost from 'containers/Blog/NewPost/NewPost';
import { Route, Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => (
  <div className="Blog">
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to={{
              // relative path pathname: props.match.url + '/new-post' - path at the end of the current path
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true',
            }}
            >
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    {/* < Route path="/" exact render={()=> <h1>Home</h1>} /> */}
    <Route path="/" exact component={Posts} />
    <Route path="/new-post" component={NewPost} />
    {/* <Posts /> */}
  </div>
);

export default Blog;
