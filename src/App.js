import React, { Component } from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <MdLibraryBooks size={20} className="logo" alt="logo"/>
          <h2 className="title">Readable</h2>
          <ul className="nav">
              <li className="category-nav"><a >all</a></li>
              <li className="category-nav"><a>react</a></li>
              <li className="category-nav"><a>redux</a></li>
              <li className="category-nav"><a>udacity</a></li>
              <li className="add-post-nav"><a>new post</a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
