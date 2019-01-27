import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { styles } from '../../../utils'
import styled from 'styled-components'

export default class NavbarHeader extends Component {
	render() {
		const { handleNavbar } = this.props
		return (
			<StyledHeader>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
			</StyledHeader>
		)
	}
}

const StyledHeader = styled.div`
	padding: 0.4rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.toggle-icon {
		font-size: 1.75rem;
		color: ${styles.colors.mainYellow};
		cursor: pointer;
	}

	@media (min-width: 760px) {
		.toggle-icon {
			display: none;
		}
	}
`
