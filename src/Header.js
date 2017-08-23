import React from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header = (props) => (
  <section className="header">
    <MdLibraryBooks size={20} className="logo" alt="logo"/>
    <h2 className="title">Readable</h2>
    <ul className="nav">
        <li className="category-nav"><a >all</a></li>
        {props.categories.map((category) => (
          <li key={category.name} className="category-nav"><a>{category.name}</a></li>
        ))}
        <li className="add-post-nav"><a>new post</a></li>
    </ul>
  </section>
);

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(Header));
