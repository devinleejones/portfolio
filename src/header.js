import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <h1 className="wow bounceInDown delay-1s header-name">
            {"I'm Devin Lee-Jones"}
          </h1>
          <h2 className="header-title">a Front-End Developer</h2>
          <i className="far fa-arrow-alt-circle-down" />
        </div>
      </header>
    )
  }
}
