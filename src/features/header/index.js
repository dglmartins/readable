import React from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import { Link } from 'react-router-dom';
import './Header.css';

/**
* @description Header component. Header gets called by App component.
* @returns a <section> with the logo, title of app, and links to views of the categories and to create post.
* @param {object} props - One prop passed from parent: {object} props.categories.
*/

const Header = (props) => (
  <section className="header">
    <MdLibraryBooks size={20} className="logo" alt="logo"/>
    <h2 className="title">Readable</h2>
    <ul className="nav">
        <li className="category-nav">

          {/* Link to root */}
          <Link
            className="router-nav-link"
            to="/">
            all
          </Link>
        </li>

        {/* Links to each category. If categories added in server, this works */}
        {props.categories.map((category) => (
          <li key={category.name} className="category-nav">
            <Link
              className="router-nav-link"
              to={`/${category.name}`}>
              {category.name}
            </Link>
          </li>
        ))}

        {/* Links to Route that renders CreatePost component */}
        <li className="add-post-nav">
          <Link
            className="router-nav-create-post"
            to="/createPost">
            create post
          </Link>
        </li>
    </ul>
  </section>
);

export default Header;
