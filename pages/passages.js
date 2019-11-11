import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import API from "../utils/API";

class Passages extends React.Component {

	state = {
		passageResults: [],
		page: 1
	}

// Function for setting the results of the API call to state on this page
	getPassages(page) {
		API.getPassages(page).then(results => {
			const oldPassages = this.state.passageResults;

			if (oldPassages.length !== 0) {
				this.setState({passageResults: [...oldPassages, ...results.data.data.passages]});
			} else {
				this.setState({passageResults: results.data.data.passages})
			}

			console.log(results.data.data.passages);
		}).then(() => {
			// should increment the page value by 1
			this.setState({page: this.state.page + 1})
			console.log(this.state.passageResults);
			console.log(this.state.page);
		})
	
	}

	// When component loads, perform the function defined above
	componentDidMount = () => {
		this.getPassages(this.state.page);
	}

	// Maps through the results of the API call
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
					<a onClick={() => this.getPassages()}>Load More</a>
				</div>
			</div>
		)
	}
	
};

export default Passages;
