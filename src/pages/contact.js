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
      <form name="contact" action="https://formspree.io/donael.walter@hotmail.com" method="POST">
        <p>You’re interested in working together or if you’re just looking for information. <br></br>Complete the form below!</p>
        <hr/>
          <label for="name">Name:</label>
          <input type="text" name="name" placeholder="John Doe" required/>
          <label for="email">Email:</label>
          <input type="email" name="_replyto" placeholder="example@mail.com" required/>
          <label for="content">Your message:</label>
          <textarea name="content" placeholder="lorem ipsum dolor si amet consectur ..."></textarea>
          <button type="submit">Send</button>
      </form>
      </div>
    </div>
    </div>
  </Layout>
  </div>
)
