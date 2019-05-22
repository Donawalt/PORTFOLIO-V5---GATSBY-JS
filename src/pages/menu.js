import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div id="Splash-Menu">
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/skills">Compétences</Link>
      </li>
      <li>
        <Link to="/a-propos">À propos</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)
