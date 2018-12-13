import React, { Component } from 'react'
import pdfFile from './devinleejones.pdf'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="https://devinleejones.github.io/portfolio/">Devin Lee-Jones</a>
        <a target="_blank" rel="noopener noreferrer" href={pdfFile}>
          Resume
        </a>
      </nav>
    )
  }
}
