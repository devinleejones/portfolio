import React, { Component } from 'react'
import pdfFile from './devinleejones.pdf'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="https://devinleejones.github.io/portfolio/">Devin Lee-Jones</a>
        <ul>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={pdfFile}>
              About Me
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={pdfFile}>
              Projects
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={pdfFile}>
              Tech
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={pdfFile}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
