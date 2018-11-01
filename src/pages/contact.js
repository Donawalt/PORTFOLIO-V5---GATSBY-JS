import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

import '../style/contact.scss'

export default () => (
  <div>
  <Layout>
  <div id="c">
    <div className="contact-f">
      <div>
          <hr></hr>
          <h1>CONTACT</h1>
      </div>
      <div>
        <h2>Vous êtes intéressez pour qu'ont travaille ensemble ou vous chercher juste une information.  Remplissez le formulaire ci-dessous!</h2>
      </div>
      <div>
      <form action="https://formspree.io/donael.walter@hotmail.com"
            method="POST">
          <label for="name">Nom:</label>
          <input type="text" name="name" placeholder="John Doe"/>
          <label for="email">Email:</label>
          <input type="email" name="_replyto" placeholder="example@mail.com"/>
          <label for="content">Votre message:</label>
          <textarea name="content" placeholder="lorem ipsum dolor si amet consectur ..."></textarea>
          <input type="submit" value="Send"/>
      </form>
      </div>
    </div>
    </div>
  </Layout>
  </div>
)
