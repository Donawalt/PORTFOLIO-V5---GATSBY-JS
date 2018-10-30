import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

import '../style/medias.scss'
import '../style/contact.scss'

export default () => (
  <div>
  <Layout>
  <div id="contact-page">
    <div className="contact-f">
      <div>
          <hr></hr>
          <h1>CONTACT</h1>
      </div>
      <div>
      <form action="https://formspree.io/donael.walter@hotmail.com"
            method="POST">
          <input type="text" name="name" placeholder="John Doe"/>
          <input type="email" name="_replyto" placeholder="example@mail.com"/>
          <textarea name="content" placeholder="lorem ipsum dolor si amet consectur ..."></textarea>
          <input type="submit" value="Send"/>
      </form>
      </div>
      <div>
      <blockquote>
        <ul>
          <li><a href="https://www.instagram.com/walt_dona/">Instagram</a></li>
          <li><a href="https://www.behance.net/donawalt">Behance</a></li>
          <li><a href="https://www.linkedin.com/in/dona%C3%ABl-walter/">Linkedin</a></li>
          <li><a href="mailto:donael.walter@hotmail.com">donael.walter@hotmail.com</a></li>
        </ul>
        <p><strong>Current city:</strong> Dijon</p>
      </blockquote>
      </div>
    </div>
    </div>
  </Layout>
  </div>
)
