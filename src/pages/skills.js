import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import '../style/skills.scss'

export default () => (
  <div>
  <Layout>
  <Helmet>
    <title>MY SKILLS || Donaël Walter</title>
  </Helmet>
  <div id="c">
    <section id="comp-progra">
      <h1>SITE- PROGRAMMING</h1>
      <div className="hidden-desc" className="skills-section">
      <p>Conception, design, animations, I have the ability to design a website with or without CMS.<br/>
      What I use: HTML , CSS , JS , PHP, Bootstrap (depending on project size)<br/>
      What I Learn: React, Jquery, GatsbyJs</p>
      </div>
    </section>
    <section id="comp-graph">
      <h1>BRANDING - GRAPHIC DESIGN</h1>
      <div className="hidden-desc" className="skills-section">
      <p>Creation of Logo, print document and Digital, Graphic Charter etc...<br/>
      What I use: Adobe CC Suite (Photoshop, Illustrator, Indesign), Sheets , Pencils . <br/>
      What I learn and do: Webdesign, Typography etc ...
      </p>
      </div>
    </section>
    <section id="comp-photo">
      <h1>PHOTOGRAPHY - MEDIA(AUDIOVISUAL)</h1>
      <div className="hidden-desc" className="skills-section">
        <p>Editing, photography, sound taking, motion design etc...<br/>
        What I use: The Adobe CC Suite (First Pro, After Effect, Photoshop), Canon EOS.<br/>
        What I learn and do: Clip commercial, Short-film, tele-reportage et pleins d'autres choses!
        </p>
      </div>
    </section>
  </div>
  </Layout>
    </div>
)
