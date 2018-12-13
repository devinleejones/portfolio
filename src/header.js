import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <h1 className="wow bounceInDown">{"I'm Devin Lee-Jones"}</h1>
          <h2>a Front-End Developer</h2>
        </div>
      </header>
    )
  }
}
