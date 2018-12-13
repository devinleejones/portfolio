import React, { Fragment } from 'react'
import WOW from 'wowjs'
import Header from './header.js'
import Navbar from './navbar.js'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const wow = new WOW.WOW({ live: false })
    wow.init()
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
      </Fragment>
    )
  }
}
