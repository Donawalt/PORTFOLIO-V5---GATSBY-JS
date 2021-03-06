import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import Layout from '../components/layout'

import '../style/post.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext

    return (
        <Layout>
      <div className="BlogPost" id="BlogPost">
        <Helmet>
          <title>{post.frontmatter.title} || Donaël Walter</title>
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} className="featuredImage" />
        <p
          style={{
            display: 'block',
          }}
        >
          {post.frontmatter.date}
        </p>
        <div  id="aPost" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              next &&
              <Link to={next.fields.slug} rel="next" className="aPostsl">
                ← {next.frontmatter.title}
              </Link>
            }
          </li>
            <li>
            {
              previous &&
              <Link to={previous.fields.slug} rel="prev" className="aPostsl">
              {previous.frontmatter.title}  →
              </Link>
            }
          </li>
        </ul>
      </div>
</Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
            childImageSharp{
              sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
                    }
                    }
                  }
      }
    }
  }
`
