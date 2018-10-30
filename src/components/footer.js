import React from 'react'
import Link from 'gatsby-link'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

import LogoMin from '../assets/SVG/logo-min-01.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div>
        <p>2018 <strong>DONAËL WALTER</strong></p>
      </div>
      <div>
        <img src={LogoMin} alt="logo"></img>
      </div>
      <div>
        <ul>
          <li><a href="https://www.instagram.com/walt_dona/">INSTAGRAM</a></li>
          <li><a href="https://www.behance.net/donawalt">BEHANCE</a></li>
          <li><a href="mailto:donael.walter@hotmail.com">MAIL</a></li>
        </ul>
      </div>
      </footer>
    )
  }
}

export default Footer
