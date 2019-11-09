import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import API from "../utils/API";

class Passages extends React.Component {

	state = {
		passageResults: []
	}


	componentWillMount = () => {
		API.getPassages().then(results => {
			this.setState({passageResults: results.data.data});
		});
	
	}

	render() {
		return(
			<div>
				<Head>
					<title>Passages</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<MainNav />
				<div className='hero'>
					<h1 className='title'>Passages</h1>

					<div className='row'>
						<CardWrapper>

							<Card>
								
							</Card>

						</CardWrapper>
					</div>
				</div>
			</div>
		)
	}
	
};

export default Passages;
