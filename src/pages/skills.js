import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../style/skills.scss'

export default () => (
  <div>
    <Layout>
      <Helmet>
        <title>MES COMPETENCES || Donaël Walter</title>
      </Helmet>
      <div id="c">
        <section id="comp-progra">
          <h1>SITE- PROGRAMMATION</h1>
          <div className="hidden-desc" className="skills-section">
            <p>
              Conception, design, animations , j'ai la capacité de concevoir un
              site web avec ou sans CMS.
              <br />
              Ce que j'utilise : HTML , CSS , JS , PHP, Bootstrap (suivant la
              taille du projet)
              <br />
              Ce que j'apprend : React, Jquery, GatsbyJs
            </p>
          </div>
        </section>
        <section id="comp-graph">
          <h1>MARQUE - GRAPHISME</h1>
          <div className="hidden-desc" className="skills-section">
            <p>
              Creation de Logo, document PRINT et Numérique, Charte graphique
              etc... <br />
              Ce que j'utilise : La suite Adobe CC (Photoshop, Illustrator,
              Indesign), Des feuilles , Des crayons . <br />
              Ce que j'apprend et fait : Le webdesign, La typographie etc ...
            </p>
          </div>
        </section>
        <section id="comp-photo">
          <h1>PHOTOGRAPHIE - AUDIOVISUELLE</h1>
          <div className="hidden-desc" className="skills-section">
            <p>
              Montage, photographie , prise son, motion design etc...
              <br />
              Ce que j'utilise : La suite Adobe CC (Premier Pro, After Effect,
              Photoshop), Canon EOS.
              <br />
              Ce que j'apprend et fait : Clip publicitaire, Court-métrage,
              télé-reportage et pleins d'autres choses !
            </p>
          </div>
        </section>
      </div>
    </Layout>
  </div>
)
