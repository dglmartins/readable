import React, { Component } from 'react';
import './App.css';
import PostListView from './PostListView';
import Header from './Header';
import SortSelect from './SortSelect';
import * as ReadableApi from './ReadableApi';

class App extends Component {
  state = {
    categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
    ],

    comments: [
      {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
      },
      {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
      }
    ],

    posts: [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false
      },
    {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false
      }
    ]
  }

  componentWillMount() {

    ReadableApi.getAllPosts().then((results) => {
      console.log(results)
    })
    const test = {
      id: 'sadsadsa',
      timestamp: 1448479767190,
      title: 'Learn Redux in 5 minutes!',
      body: 'New Comment',
      author: 'Danilo',
      parentId: '8xf0y6ziyjabvozdd253nd'
    }
    ReadableApi.removeComment("sadsadsa").then(() => {
      ReadableApi.getComment('sadsadsa').then((results) => {

            console.log(results)

      })


    })

  }

  render() {
    return (
      <div>

        <Header/>
        <SortSelect />
        <PostListView test={this.state}/>

      </div>
    );
  }
}

export default App;
