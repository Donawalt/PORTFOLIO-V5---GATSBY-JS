import React from 'react'
import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'
import '../style/index.scss'
export default ({ children }) => (
  <div className="app-wrapper">
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:700,800"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="A la recherche d'un contrat de professionnalisation en Webdesign ou Développement Web. DUT MMI DIJON prochainement HETIC. Développeur Front-End Freelance."
      />
      <meta name="language" content="fr" />
      <link
        rel="alternate"
        href="https://en.donaelwalter.com/"
        hreflang="en-en"
      />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </div>
)
