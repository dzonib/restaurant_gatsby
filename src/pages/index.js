import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

const IndexPage = () => (
	<Layout>
	<Helmet>
		<link href="https://fonts.googleapis.com/css?family=Caveat:400,700" rel="stylesheet" />
	</Helmet>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		<HomeHeader img={img}>
			<Banner title="eatery" subtitle="225 main street - Blablabla">
				<BannerButton style={{margin: "2rem auto"}}>menu</BannerButton>
			</Banner>
		</HomeHeader>
		<QuickInfo></QuickInfo>

	</Layout>
)

export default IndexPage
