import React from 'react'

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
      <form name="contact" action="https://formspree.io/donael.walter@hotmail.com" method="POST">
        <p>Vous êtes intéressé pour que l'on travaille ensemble ou si vous cherchez juste une information.<br></br>Remplissez le formulaire ci-dessous!</p>
        <hr/>
          <label for="name">Nom:</label>
          <input type="text" name="name" placeholder="John Doe" required/>
          <label for="email">Email:</label>
          <input type="email" name="_replyto" placeholder="example@mail.com" required/>
          <label for="content">Votre message:</label>
          <textarea name="content" placeholder="lorem ipsum dolor si amet consectur ..."></textarea>
          <button type="submit">Envoyer</button>
      </form>
      </div>
    </div>
    </div>
  </Layout>
  </div>
)
