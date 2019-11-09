import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import API from "../utils/API";

class Passages extends React.Component {

	state = {
		passageResults: [],
		page: 0
	}


	componentDidMount = () => {
		API.getPassages(page).then(results => {
			this.setState({passageResults: results.data.data.passages});
		});
	
	}

	renderPassages() {
		return this.state.passageResults.map(passage => {
			return (
				<Card 
					key={passage.id}
					title={passage.title}
					reference_id={passage.reference_id}
					notes={passage.notes}
					text={passage.text}
					label={passage.subjects.label}
				/>
			)
		})
	};

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
							{this.renderPassages()}
						</CardWrapper>
					</div>
				</div>
			</div>
		)
	}
	
};

export default Passages;
