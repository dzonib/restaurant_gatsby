import React, { Component } from 'react'
import styled from 'styled-components'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

import { styles } from '../../../utils'

export default class NavbarIcons extends Component {
	state = {
		icons: [
			{ id: 1, icon: <FaFacebook className="icon facebook-icon" path="https://facebook.com" /> },
			{ id: 2, icon: <FaTwitter className="icon twitter-icon" path="https://twitter.com" /> },
			{ id: 3, icon: <FaInstagram className="icon instagram-icon" path="https://instagram.com" /> }
		]
	}
	render() {
		return (
			<StyledIcons>
				{this.state.icons.map((item) => (
					<a key={item.id} target="_blank" rel="noopener noreferrer" href={item.path}>
						{item.icon}
					</a>
				))}
			</StyledIcons>
		)
	}
}

const StyledIcons = styled.div`
  font-size: 1.3rem;
  cursor: pointer;

	.facebook-icon {
		color: #3b579d;
	}

	.twitter-icon {
		color: #3ab7f0;
	}

	.instagram-icon {
		color: #da5f53;
	}

  .icon:hover {
    color: ${styles.colors.mainYellow};
    transition: color 0.3s linear
  }

	display: none;

	@media (min-width: 768px) {
		display: flex;
		width: 10rem;
		justify-content: space-around;
	}
`
