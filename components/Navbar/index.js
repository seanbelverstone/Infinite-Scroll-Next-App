import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";

const MainNav = (props) => {

	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar color="faded" light>
				<NavbarBrand href="/" className="mr-auto">{props.title}</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<Link href="/index/">Home</Link>
						</NavItem>
						<NavItem>
							<Link href="/passages/">Passages</Link>
						</NavItem>
						<NavItem>
							<Link href="/problems/">Problems</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainNav;