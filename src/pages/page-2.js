import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TweenLite } from 'gsap'

const SecondPage = () => {
  const entryAnimation = (entry, node) =>
    TweenLite.fromTo(node, entry.length, { opacity: 0 }, { opacity: 1 })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      <TransitionLink
        to="/"
        entry={{
          trigger: ({ entry, node }) => entryAnimation(entry, node),
          length: 2,
        }}
        exit={
          {
            // delay: 2,
          }
        }
      >
        Go back to the homepage
      </TransitionLink>
    </Layout>
  )
}
export default SecondPage
