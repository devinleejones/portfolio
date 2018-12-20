import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className="secondary">
        <div className="container" id="Projects">
          <h2 className="main">Projects</h2>
          <p className="projects-content">
            Here are some of the projects that I've worked on recently:
          </p>
          <div>
            <div className="card-container">
              <img
                src={require('./assets/images/OutfitPal.jpg')}
                alt=""
                className="card-image"
              />
              <p className="card-content">
                A React application for fashionistas who want to plan their
                weekly outfits based on the weather.
              </p>
            </div>
            <div className="card-container">
              <img
                src={require('./assets/images/ReactFlashCards.jpg')}
                alt=""
                className="card-image"
              />
              <p className="card-content">
                React Flash Cards is a web application for learning enthusiasts
                who want to study using flash cards.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
