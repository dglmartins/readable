import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeCommentCount } from './services/actions';
import { createPostThunk } from './services/thunkActions';
import uuidv4 from  'uuid/v4';

/**
* @description CreatePost component. CreatePost gets called by App Component via Route match. Route is matched when user clicks new post Link in Header component.
* @returns a <div> with a form to add a post, form state is not kept in any state, however, onSubmit, what is currently in the form gets used for creating post.
* @param {object} props - One props passed from parent: {object} props.categories. Two functions that dispatch actions mapped by mapDispatchToProps
*/
class CreatePost extends Component {

  //handleSubmit takes the form submit event
  handleSubmit = (event) => {

    //prevents default, if a user has not chosen a category to post in, alerts and returns
    event.preventDefault();
    if (!event.target.elements.category.value) {
      alert("Please select a category");
      return;
    }

    //builds the object that will go in the api request body
    const timestamp = new Date().getTime();
    const id = uuidv4();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const body = event.target.elements.body.value;
    const category = event.target.elements.category.value;

    //calls createPostThunk, which calls the API, then dispatches createPost action, then dispatches initializeCommentCount action (which adds commentCount: 0 to the post) in the post reducer, and catches api error by rendering NoMatch component
    this.props.createPostThunk({id, timestamp, title, body, author, category}).then(() => {
      this.props.initializeCommentCount(id);
      this.props.history.push('/');
    }).catch(() => {
      this.props.history.push('/ServerError');
    });
  };

  render () {
    return (
      <div className="new-container">
        <h3>Add a post</h3>
        <form name="newCommentForm" onSubmit={this.handleSubmit}>
          <div className="input-container">

            {/* select category */}
            <select name="category" className="select-dropdown-input">
              <option value=''>Please select category</option>
              {this.props.categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>

            {/* title */}
            <input name="title" type="text" placeholder="Post title" className="create-post-title" required/>

            {/* body */}
            <textarea name="body" rows="6" cols="100" className="text-area" type="text" placeholder="Post body"  required/>

            {/* author */}
            <input name="author" type="text" placeholder="Author" required/>
            <button>Add Post</button>
          </div>
        </form>
        <div>
          <span className="back-arrow" onClick={() => this.props.history.goBack()}>
          </span>
        </div>
      </div>
    );
  }
}

//maps dispatch of actions to props
function mapDispatchToProps (dispatch) {
  return {
    createPostThunk: (data) => dispatch(createPostThunk(data)),
    initializeCommentCount: (data) => dispatch(initializeCommentCount(data))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CreatePost));
