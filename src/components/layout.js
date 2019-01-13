import React from "react"
import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'
import '../style/index.scss'
export default ({ children }) => <div className="app-wrapper">
<Helmet>
<link href="https://fonts.googleapis.com/css?family=Roboto:700" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css?family=Montserrat:700,800" rel="stylesheet"></link>
<meta name="description" content="I am a student in MMI DUT , future Designer. Visit my site to learn more about me!"></meta>
</Helmet>
<Header/>
    {children}
<Footer/>
</div>
