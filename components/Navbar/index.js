import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Link from "next/link";

const MainNav = (props) => {

	return (
		<div>
			<Navbar color="faded" light>
				<NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
				<Nav navbar>
					<NavItem>
						<Link href="/passages">
							<a>Passages</a>
						</Link>
					</NavItem>
					<NavItem>
						<Link href="/problems">
							<a>Problems</a>
						</Link>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

export default MainNav;