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
          <p className="lead">This is a simple hero website to recover the damaged text with crossing lines in order to imporve OCR method.</p>
        </div>
        <div className="container-fluid d-flex flex-column">
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-center flex-wrap">
            <h1>Easily start by </h1>
            <div class="custom-file" style={{width: 250, margin:10}}>
              <input type="file" class="custom-file-input" id="customFile" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </div>
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="d-flex flex-column">
              <i class="fas fa-book-open fa-3x"></i>
              <h4>Readable</h4>
              <p>Make your text be readable again.</p>
            </div>
            <div className="d-flex flex-column">
              <i class="far fa-images fa-3x"></i>
              <h4>Uploading</h4>
              <p>Could upload from any devices.</p>
            </div>
            <div className="d-flex flex-column">
              <i class="fas fa-magic fa-3x"></i>
              <h4>Easy</h4>
              <p>Only few clicks to complete the function.</p>
            </div>
          </div>
          <div style={{height:100}}></div>
          <div className="d-flex justify-content-center">
            <h1>Demo</h1>
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
          <p className="lead">Created by: BooBoo Team</p>
        </div>
      </div>
    );
  }
}

export default App;
