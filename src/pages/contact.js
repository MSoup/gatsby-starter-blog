import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"


const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <div id="contact-main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Contact Page</h1>
          </header>

          <p>
            The quickest way to reach me is at on Twitter (see bio excerpt at the bottom).
            The second quickest is to send memes to my email.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>

      
      <Bio />
    </Layout>
  )
}

export default ContactPage

// export const pageQuery = graphql`
//   query IndexPageQuery {
//     markdownRemark(fileAbsolutePath: { regex: "/hero-text.md/" }) {
//       frontmatter {
//         author
//         date
//         title
//       }
//     }
//   }
//   `


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
