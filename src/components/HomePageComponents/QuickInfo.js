import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Section, Title, SectionButton } from '../../utils'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
	render() {
		return (
			<div>
				<Section>
					<Title message="let us tell you" title="our mission" />
					<StyledQuickInfo>
						<p className="text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eum suscipit iusto tenetur
							porro fuga reiciendis quas, aliquam molestiae repellat officiis veritatis qui saepe!
							Corrupti similique ullam iure vel suscipit vitae repellat, sunt sit illo quo doloribus nam
							est sequi nihil dignissimos cupiditate sed molestiae autem exercitationem hic, voluptatum
							inventore possimus ipsam. Ad itaque veritatis odio quas dolor rerum in cumque temporibus
							fugiat doloremque. Ullam animi minima reprehenderit quia numquam!
						</p>
					</StyledQuickInfo>
					<Link to="/about/" style={{ textDecoration: 'none' }}>
						<SectionButton>about</SectionButton>
					</Link>
				</Section>
			</div>
		)
	}
}

const StyledQuickInfo = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 1.6rem;
		word-spacing: 0.1rem;
		color: ${styles.colors.mainGrey};
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 992px) {
		width: 60%
	}
`
