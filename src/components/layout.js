import React from "react"
import Footer from './footer'
import Header from './header'
import Helmet from 'react-helmet'
import '../style/index.scss'
export default ({ children }) => <div className="app-wrapper">
<Header/>
    {children}
<Footer/>
</div>
