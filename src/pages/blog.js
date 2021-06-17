import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from '@loadable/component'

const AnimatedCursor = loadable(() => import('react-animated-cursor'))

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <AnimatedCursor />
      <h4>Posts</h4>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <a href={node.link} dangerouslySetInnerHTML={{ __html: node.link }} />
        </div>
      ))}
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
          link
        }
      }
    }
  }
`