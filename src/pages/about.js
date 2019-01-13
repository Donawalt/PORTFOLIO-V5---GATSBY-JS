import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import CoverImg from '../assets/cover.jpg'

export default () => (
  <div id="about">
  <Layout>
  <Helmet>
    <title>About || Donaël Walter</title>
  </Helmet>
    <section id="c">
    <h1>A-PROPOS</h1>
    <center>
      <img src="https://media.licdn.com/dms/image/C4D03AQEJK4H_xAphWQ/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=zpwwRpEL_Ruilifd0salVVb400xF0wN2AYfqDAZFEe8"></img>
    </center>
    <p>Born in 1999.<br></br>I grew up around Valencia in France.<br></br>
    I study web development and visual communication at the University of Dijon.<br></br>
    I want to become a creative web developer and a Webdesigner able to perform various tasks and follow a 360° project.<br></br>
    That’s why I study in MMI DUTs, to develop my skills in graphics, photography, webdesign, and web development.<br></br>
    I’m always open to new opportunities
    </p>
    </section>
    </Layout>
  </div>
)
