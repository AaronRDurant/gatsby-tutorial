import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
	return (
		<Layout pageTitle="About Me">
			<p>Hey there!
				<span role="img" aria-label="Hand waving emoji"> 👋🏻</span>
			</p>
			<p>I'm Aaron Durant, the proud creator of this site, which I built Gatsby.</p>
		</Layout>
	)
}

export default AboutPage
