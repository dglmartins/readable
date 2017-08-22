import React, { Component } from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books'
import './App.css';

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
          <section className="data-view-table-container" key={index}>
            <table className="data-view-table">
              <tbody>
                <tr className="data-row">
                  <td className="vote-count">Votes: <span>{vote}</span></td>
                  <td className="post-title">This is a post title</td>
                </tr>
                <tr className="data-row">
                  <td colSpan="2">
                    <span className="author">by me</span>
                    <span className="time-stamp">Created on Saturday, May 1, 12:00pm</span>
                    <span className="action">edit</span>
                    <span className="action">delete</span>
                    <span className="action">vote up</span>
                    <span className="action">vote down</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        ))}


      </div>
    );
  }
}

export default App;
