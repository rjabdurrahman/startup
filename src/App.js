import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import TopNav from './components/TopNav';
import './w3.css';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer';
import Post from './components/Post';
import CreatePost from './components/CreatePost/CreatePost';
import myFeeds from './components/MyFeeds';
import Invitations from './components/Invitations';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Landing} />
            <Route path='/posts' exact component={Post} />
            <Route path='/create-post' exact component={CreatePost} />
            <Route path='/my-feeds' exact component={myFeeds} />
            <Route path='/invs' exact component={Invitations} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
