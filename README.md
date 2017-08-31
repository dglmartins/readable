This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is the Readable app for the assessment project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com).

Fork and clone your version of the local server used in this app at in a separate folder:
https://github.com/udacity/reactnd-project-readable-starter
run `npm install`
run `node server`

Fork and clone your own version of this to use it.
run `npm install`
run `npm start`

## What You're Getting
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
 |-- manifest.json - Installed with react-create-app
+-- src/
 +-- features/ - Components and services that control app views/ flow
  +-- header/ - Folder that contains Header component and Header Styles
   |-- Header.css - Header Styles
   |-- index.js - Header component/feature
  +-- noMatch/ - Folder that contains NoMatch component and Styles
   |-- index.js - NoMatch component/feature
   |-- NoMatch.css - NoMatch Styles
  +-- posts/ - Folder that contains posts components services and all subComponents and services.
   |-- CreatePost.js - component/feature
   |-- PostListView.js - component/feature
   |-- posts.css - Styles for post components
   |-- PostView.js - component/feature
   |-- UpdatePost.js - component/feature
   +-- components/ - folder that contains subComponents used by posts components/features.
    |-- PostBodyRow.js - component
    |-- PostFooterRow.js - component
    |-- PostHeaderRow.js - component
   +-- services/ - Posts services: actions, reducers and helpers
    |-- helpers.js - Helper functions for posts and comments sub components
    |-- postsActions.js - posts actions used for posts Redux state changes
    |-- postReducer.js - posts reducer
    |-- postsThunkActions.js - thunk actions that access api then dispatch posts actions
   +-- comments/ - Folder that contains comments components services and all subComponents and services. Comments are children of posts.
    |-- CommentListView.js - component/feature
    |-- CreateComment.js - component/feature
    |-- UpdateComment.js - component/feature
    +-- components/ - - folder that contains subComponents used by comments components/features
     |-- CommentBodyRow.js - component
     |-- CommentFooterRow.js - component
    +-- services/ - Comments services: actions, reducers.
     |-- commentsActions.js - comments actions used for comments Redux state changes
     |-- commentsReducer.js - comments reducer
     |-- commentsThunkActions - thunk actions that access api then dispatch comments actions
   +-- sortBy/ - Folder that contains sortBy components and services used by posts and comments
    |-- index.js - SortBy component/feature
    +-- services/ - SortBy services: actions, reducers
     |-- sortByActions.js -  sortBy actions used for sortBy Redux state changes
     |-- sortByReducer.js - sortBy reducer
  +-- spinner/ - Folder that contains spinner component and services
   |-- index.js - Spinner component/feature
   |-- Spinner.css - Spinner Styles
   +-- services/ - Spinner services: actions, reducers.
    |-- spinnerActions.js -  spinner actions used for spinner Redux state changes
    |-- spinnerReducer.js - spinner reducer
 +-- icons/ - Images for app icons
 +-- services/ - Folder that contains root actions, reducer and other services
  |-- getAllThunkActions.js - contains a Thunk action that gets all categories posts, comments from api at initialize then dispatches Redux actions.
  |-- rootReducer - reducer that combines all reducers for the Redux store.
  +-- api/ folder that contains api files
   |-- ReadableApi.js - api file
  +-- categories - folder that contains categories actions and reducer
   |-- categoriesActions.js - a single action  to get All categories
   |-- categoriesReducer.js - reducer
  |-- arrow-back.svg
 |-- App.js - Root of the app.
 |-- App.css - Styles for the app. Feel free to customize this as you desire.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- index.js - Used for DOM rendering, Redux store, Thunk, BrowserRouter.
 |-- index.css - Global styles.
|-- .gitignore
|-- README.MD - This README file.
|-- package.json - npm package manager file.
```

## Backend Server
Backend server runs locally and needs to be installed and run locally at port 5001.
Fork and clone your version of the local server used in this app at in a separate folder:
https://github.com/udacity/reactnd-project-readable-starter
run `npm install`
run `node server`
