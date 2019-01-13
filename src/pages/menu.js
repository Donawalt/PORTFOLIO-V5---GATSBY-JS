import React from 'react'
import Link from 'gatsby-link'

export default () => (
<div id="Splash-Menu">
<header className="header" id="header">
<Link to="/">
  <span className="char3">D</span>
  <span className="char4">W</span>
  <span className="char5">A</span>
  <span className="char6">L</span>
  <span className="char7">T</span>
  <span className="char8">E</span>
  <span className="char9">R</span>
</Link>
<Link to="/menu">
  <p>|||</p>
</Link>
</header>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/skills">Skills</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
</ul>
</div>
)
