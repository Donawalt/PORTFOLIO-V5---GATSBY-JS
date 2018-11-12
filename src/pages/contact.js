import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import Helmet from 'react-helmet'

import '../style/contact.scss'

export default () => (
  <div>
  <Layout>
  <Helmet>
   <title>CONTACT || Donaël Walter</title>
  </Helmet>
  <div id="c">
    <div className="contact-f">
      <div>
          <hr></hr>
          <h1>CONTACT</h1>
      </div>
      <div>
        <p>Vous êtes intéressé pour que l'on travaille ensemble ou si vous cherchez juste une information.<br></br>Remplissez le formulaire ci-dessous!</p>
      </div>
      <div>
      <form name="contact" action="https://formspree.io/donael.walter@hotmail.com" method="POST">
          <label for="name">Nom:</label>
          <input type="text" name="name" placeholder="John Doe"/>
          <label for="email">Email:</label>
          <input type="email" name="_replyto" placeholder="example@mail.com"/>
          <label for="content">Votre message:</label>
          <textarea name="content" placeholder="lorem ipsum dolor si amet consectur ..."></textarea>
          <input type="submit" value="Envoyer mon message!"/>
      </form>
      </div>
    </div>
    </div>
  </Layout>
  </div>
)
