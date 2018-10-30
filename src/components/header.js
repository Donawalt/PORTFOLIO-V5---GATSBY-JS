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
        <div className="header" id="header">
        <div className="progress-container">
   <div className="progress-bar" id="myBar"></div>
 </div>
            <nav>
            <div>
                <Link to="/"><img src={LogoMin} alt="logo"></img></Link>
                <div>
                  <span className="élements">Développeur Créatif</span>
                  <span className="élements">WebDesigner</span>
                  <span className="élements">Graphiste</span>
                  <span className="élements">Créateur de Contenue</span>
                </div>
              </div>
                <div>
                <Link id="burger" to="/menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </Link>
        </div>
            </nav>
        </div>
    )
  }
}

export default Header
