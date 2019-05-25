import React from 'react'
import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'
import '../style/index.scss'
export default ({ children }) => (
  <div className="app-wrapper">
    <Helmet>
      <meta name="viewport" content="width=devicewidth" />
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
