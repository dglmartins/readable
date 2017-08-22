import React, { Component } from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <MdLibraryBooks size={30} className="react-logo" alt="logo"/>
          <h2 className="app-title">Readable</h2>
        </div>
        <button className="login-button">react</button>
        <button className="login-button">redux</button>
        <button className="login-button">udacity</button>
      </div>
    );
  }
}

export default App;
