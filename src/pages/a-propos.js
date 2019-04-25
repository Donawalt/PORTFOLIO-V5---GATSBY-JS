import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import CoverImg from '../assets/cover.jpg'

export default () => (
  <div id="about">
    <Layout>
      <Helmet>
        <title>A PROPOS || Donaël Walter</title>
      </Helmet>
      <section id="c">
        <h1>A-PROPOS</h1>
        <p>
          Née en 1999.<br />J'ai grandi dans les alentours de Valence en France.
          <br />
          J'étudie le développement web et la communication visuelle à
          l'Université de Dijon.<br />
          Je souhaite devenir un développeur web créatif et un webdesigner
          capable d'effectuer diverses tâches et suivre un projet à 360°.<br />
          C'est pourquoi j'étudie en DUT MMI, pour dévélopper mes compétences en
          graphisme, photographie, webdesign, et développement web.<br />
          Toujours ouvert à de nouvelles opportunités, je recherche actuellement
          un stage !
        </p>
      </section>
    </Layout>
  </div>
)
