import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    galleryItems: [],
    numOfLikes: 0,
  }

  componentDidMount() {
    this.getGalleryPics();
  }

  getGalleryPics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      this.setState({
        galleryItems: response.data
      },() => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  putLikes = (id) => {
    axios({
      method: 'PUT',
      url: 'gallery/like/' + id,
    })
    .then((response) => {
      this.setState({
        numOfLikes: response.data
      },() => {
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.warn(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
          <h6>Likes: {this.state.numOfLikes}</h6>
        </header>
        <GalleryList galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;