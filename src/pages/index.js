import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TweenLite } from 'gsap'

const IndexPage = () => {
  const exitAnimation = (exit, node) => {
    // console.log(exit, node)
    TweenLite.to(node, exit.length, { width: '200px', height: '150px' })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <TransitionLink
        to="/page-2/"
        exit={{
          trigger: ({ exit, node }) => exitAnimation(exit, node),
          length: 1,
        }}
        entry={{
          delay: 1,
        }}
      >
        Go to page 2
      </TransitionLink>
    </Layout>
  )
}

export default IndexPage
