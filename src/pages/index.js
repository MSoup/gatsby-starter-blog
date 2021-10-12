import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"


const Excerpt = () => {
  return (
    <div>
      <p>A mere two keys.</p>
      <p>The holy grail of shortcuts.</p>
      <p>I chose the name <strong>ALT F4</strong> for my blog as a way to relay a witty message to thee: <strong>I switched my career from being an English Teacher (read: Assistant Language Teacher, or...ALT) to becoming a software developer. </strong> Hence, ALT. Hence, you know, "quitting" being an ALT? Ho ho ho, and now that I have your attention, I'll have you know that I spent several months brooding over a name for my blog. Welcome. </p>
    </div>
  )
}

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Excerpt />
      <p>If you've read this far, congrats. You're within the first 10 visitors.</p>
      <h3>Let me reward you with a cat.</h3>
      <StaticImage 
        alt="I'm a cat"
        src="../images/cat.webp" />

      
      <Bio />
    </Layout>
  )
}

export default LandingPage

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
