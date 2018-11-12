import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { render } from "react-dom";

import TextComponent from "../components/TextComponent/TextComponent.js";

import { graphql } from 'gatsby'

import '../style/index.scss'

import Layout from '../components/layout'

import Header from '../components/header'

import Img from 'gatsby-image'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
        <Layout>
        <div className="contenue" id="contenue">
        <Helmet>
          <title>{siteTitle}</title>
          <meta data="description" content="Je suis étudiant en DUT MMI , futur Designer. Visitez mon site pour en connaître plus sur moi !"/>
        </Helmet>
        <section>
        <div>
            <h1>Donaël WALTER</h1>
        </div>
        <h2>
        <span className="élements">Développeur Créatif</span>
               <span className="élements">WebDesigner</span>
               <span className="élements">Graphiste</span>
               <span className="élements">Créateur de Contenu</span>
        </h2>
        <Link to="#Acceuil" id="scrollIndex">▼</Link>
        </section>
        <main className="flow-posts" id="Acceuil">
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug} className="fiche" data-aos="fade-up">
            <TextComponent>
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug} className="Linkdescription">
            <div className="description">
            <h3 className="title1">
                {title}
            </h3>
            <center><small>{node.frontmatter.type}</small></center>
            </div>
            </Link>
            <div className="fimage">
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} className="featuredImage" />
            <center><small>{node.frontmatter.date}</small></center>
            </Link>
            </div>
            </TextComponent>
              </div>
          )
        })}
          </main>
      </div>
</Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 2000) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
