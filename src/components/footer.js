import React from 'react'
import Link from 'gatsby-link'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

import '../style/footer.scss'

import LogoMin from '../assets/SVG/logo-min-01.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
        <a href="https://donaelwalter.com/">FR</a>
        <span>/</span>
        <a href="https://en.donaelwalter.com/" id="lInactif">EN</a>
        </div>
        <div>
          <a target="_blanck" href="https://www.behance.net/donawalt/">BEHANCE</a>
          <a target="_blanck" href="https://github.com/Donawalt/">GITHUB</a>
          <a target="_blanck" href="https://www.instagram.com/walt_dona/">INSTAGRAM</a>
          <a target="_blanck" href="https://www.linkedin.com/in/donaël-walter/">LINKEDIN</a>
          <a target="_blanck" href="https://dribbble.com/donaelwalter">DRIBBLE</a>
        </div>
      </footer>
    )
  }
}

export default Footer
