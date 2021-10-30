import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Aaron Durant">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Ken Roczen jumps a Supercross finish line"
        src="../images/Ken-Roczen-Supercross-finish-line.jpg"
      />
    </Layout>
  )
}

export default IndexPage
