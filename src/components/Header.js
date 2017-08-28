import React from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Header = (props) => (
  <section className="header">
    <MdLibraryBooks size={20} className="logo" alt="logo"/>
    <h2 className="title">Readable</h2>
    <ul className="nav">
        <li className="category-nav">
          <Link
            className="router-nav-link"
            to="/">all</Link>
        </li>
        {props.categories.map((category) => (
          <li key={category.name} className="category-nav">
            <Link
              className="router-nav-link"
              to={`/${category.name}`}>{category.name}</Link>
          </li>
        ))}
        <li className="add-post-nav">
          <Link
          className="router-nav-create-post"
          to="/createPost">create post</Link>
        </li>
    </ul>
  </section>
);

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Header));
