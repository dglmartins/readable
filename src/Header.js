import React from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

const Header = (props) => (
  <section className="header">
    <MdLibraryBooks size={20} className="logo" alt="logo"/>
    <h2 className="title">Readable</h2>
    <ul className="nav">
        <li className="category-nav"><a >all</a></li>
        <li className="category-nav"><a>react</a></li>
        <li className="category-nav"><a>redux</a></li>
        <li className="category-nav"><a>udacity</a></li>
        <li className="add-post-nav"><a>new post</a></li>
    </ul>
  </section>
);

export default Header;
