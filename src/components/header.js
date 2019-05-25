import React from 'react'
import Link from 'gatsby-link'
// Import typefaces
import '../style/header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="header" id="header">
        <Link to="/" className="link-desktop">
          <span className="char3">D</span>
          <span className="char4">W</span>
          <span className="char5">A</span>
          <span className="char6">L</span>
          <span className="char7">T</span>
          <span className="char8">E</span>
          <span className="char9">R</span>
        </Link>
        <Link to="/" className="link-smartphone">
          <span>D.WALTER</span>
        </Link>
        <Link to="/menu" className="burger-menu">
          <p>|||</p>
        </Link>
      </header>
    )
  }
}

export default Header
