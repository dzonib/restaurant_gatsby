import React from 'react'
import { FaBeer } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<h3>Hello from gatsby</h3>
		<h1>
			Lets not drink <FaBeer />
		</h1>
	</Layout>
)

export default IndexPage
