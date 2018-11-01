import React from 'react'
import Link from 'gatsby-link'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import '../style/header.scss'
import LogoMin from '../assets/SVG/logo-min-01.svg'

class Header extends React.Component {
  render() {
    return (
        <header className="header" id="header">
        <div>
          <span className="char3">D</span>
          <span className="char4">W</span>
          <span className="char5">A</span>
          <span className="char6">L</span>
          <span className="char7">T</span>
          <span className="char8">E</span>
          <span className="char9">R</span>
        </div>
        <div>
          <p>|||</p>
        </div>
        </header>
    )
  }
}

export default Header
