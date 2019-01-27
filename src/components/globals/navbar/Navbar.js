import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

export default class Navbar extends Component {
	state = {
		navbarOpen: true
	}

	handleNavbar = () => {
		this.setState(() => {
			return { navbarOpen: !this.state.navbarOpen }
		})
	}

	render() {
		return (
			<StyledNav>
				<NavbarHeader handleNavbar={this.handleNavbar} />
				<NavbarLinks navbarOpen={this.state.navbarOpen} />
				<NavbarIcons />
			</StyledNav>
		)
	}
}

const StyledNav = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`
