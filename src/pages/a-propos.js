import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default () => (
  <div id="about">
    <Layout>
      <Helmet>
        <title>À PROPOS || Donaël Walter</title>
      </Helmet>
      <section id="c">
        <h1>À-PROPOS</h1>
        <div className="Couverture">
          <img src="https://media.licdn.com/dms/image/C4D16AQGwXsTbc6iNIg/profile-displaybackgroundimage-shrink_350_1400/0?e=1564012800&v=beta&t=-WKGToBH0sKXUkWno9lkb7ucjlFW5wQy3w-adYcXlLM" />
        </div>
        <p>
          Née en 1999.
          <br />
          J'ai grandi dans les alentours de Valence en France.
          <br />
          J'étudie le développement web et la communication visuelle à
          l'Université de Dijon.
          <br />
          <br />
          Je souhaite devenir un développeur web créatif et un webdesigner
          capable d'effectuer diverses tâches et suivre un projet à 360°.
          <br />
          <br />
          Je suis actuellement en recherche d'un contrat de professionnalisation
          dans le domaine du Webdesign et/ou du Développement Web, afin de
          poursuivre mes études au sein de l'école{' '}
          <a
            href="https://www.hetic.net/formations/bachelor-web/programme-bachelor-web"
            target="_blanck"
          >
            @HETIC
          </a>{' '}
          en bachelor web.
          <br />
          <br />
          Toujours ouvert à de nouvelles opportunités, je suis déja disponible
          pour des{' '}
          <a href="https://www.malt.fr/profile/donawalt" target="_blanck">
            missions en freelance
          </a>
          .
        </p>
      </section>
    </Layout>
  </div>
)
