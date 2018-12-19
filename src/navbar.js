import React, { Component } from 'react'
import pdfFile from './devinleejones.pdf'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <a
          className="wow rollIn delay-1s"
          href="https://devinleejones.github.io/portfolio/">
          Devin Lee-Jones
        </a>
        <ul>
          <li>
            <a className="wow fadeIn delay-1s" href="#About">
              About Me
            </a>
          </li>
          <li>
            <a
              className="wow fadeIn delay-1s"
              target="_blank"
              rel="noopener noreferrer"
              href={pdfFile}>
              Projects
            </a>
          </li>
          <li>
            <a
              className="wow fadeIn delay-1s"
              target="_blank"
              rel="noopener noreferrer"
              href={pdfFile}>
              Tech
            </a>
          </li>
          <li>
            <a
              className="wow fadeIn delay-1s"
              target="_blank"
              rel="noopener noreferrer"
              href={pdfFile}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
