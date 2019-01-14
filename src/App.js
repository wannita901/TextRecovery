import React, { Component } from 'react';
import './App.css';
import demoPhotoB4 from './demo.jpg'
import demoPhotoAT from './demo_future.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Text Recovery</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
        <div className="container-fluid d-flex flex-column">
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-center">
            <h1 className="display-4">Easily start by </h1>
            <button type="button" style={{marginLeft: 20}} class="btn btn-outline-dark btn-lg">Upload Photo</button>
          </div>
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="d-flex flex-column">
              <i class="fas fa-book-open fa-3x"></i>
              <h4>Readable</h4>
              <p>lorem ipsum lorem ipsum</p>
            </div>
            <div className="d-flex flex-column">
              <i class="far fa-images fa-3x"></i>
              <h4>Uploading</h4>
              <p>lorem ipsum lorem ipsum</p>
            </div>
            <div className="d-flex flex-column">
              <i class="fas fa-magic fa-3x"></i>
              <h4>Easy</h4>
              <p>lorem ipsum lorem ipsum</p>
            </div>
          </div>
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-center">
            <h1 className="display-4">Demo</h1>
          </div>
          <div className="d-flex justify-content-around ">
            <div className="d-flex flex-column">
              <img className="img-fluid" alt="demo" src={demoPhotoB4}></img>
            </div>
            <div className="d-flex flex-column align-self-center">
              <i class="fas fa-arrow-right fa-2x"></i>
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" alt="demo" src={demoPhotoAT}></img>
            </div>
          </div>
          <div style={{height:100}}></div>
        </div>
        <div className="jumbotron" style={{margin:0, minHeight: 300}}>
          <p>Created by: BooBoo Team</p>
        </div>
      </div>
    );
  }
}

export default App;
