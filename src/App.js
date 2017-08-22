import React, { Component } from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import './App.css';
import PostListView from './PostListView';

class App extends Component {
  state = {
    test: [1, 2, 3]
  }

  render() {
    return (
      <div>
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
        {this.state.test.map((vote, index) => (
          <PostListView vote={vote} key={index}/>
        ))}
      </div>
    );
  }
}

export default App;
