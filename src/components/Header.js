import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarStart,
  NavbarItem,
  NavbarEnd,
  Title } from 'bloomer'

const AppHeader = ({ geo }) => (
	<header>
		<Container>
			<Navbar>
				<NavbarBrand>
					<NavbarItem>
						<Link to="/"><Title isSize="4">CovidCases.io</Title></Link>
					</NavbarItem>
				</NavbarBrand>
				<NavbarMenu>
					<NavbarStart>              
					</NavbarStart>
					<NavbarEnd>
						{ geo !== null && geo.address && <NavbarItem>{ geo.address.county }, { geo.address.state }</NavbarItem> }
						<NavbarItem>
							<Link to="/">Home</Link>
						</NavbarItem>
						<NavbarItem>
							<Link to="/about">About</Link>
						</NavbarItem>
					</NavbarEnd>
				</NavbarMenu>
			</Navbar>        
		</Container>
	</header>
)

export default AppHeader
