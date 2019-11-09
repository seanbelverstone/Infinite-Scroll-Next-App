import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import API from "../utils/API";

class Passages extends React.Component {

	state = {
		passageResults: []
	}


	componentWillMount = () => {
		API.getPassages().then(results => {
			console.log(results.data.data)
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
				
					</div>
				</div>
			</div>
		)
	}
	
};

export default Passages;
