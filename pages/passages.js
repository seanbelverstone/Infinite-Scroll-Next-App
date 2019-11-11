import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import API from "../utils/API";

class Passages extends React.Component {

	state = {
		passageResults: [],
		page: 0,
		scrolling: false
	}

// Function for setting the results of the API call to state on this page
	getPassages(page) {
		API.getPassages(page).then(results => {
			const oldPassages = this.state.passageResults;

			if (oldPassages.length !== 0) {
				this.setState({
					passageResults: [...oldPassages, ...results.data.data.passages],
					scrolling: false
				});
			} else {
				this.setState({passageResults: results.data.data.passages})
			}

			console.log(results.data.data.passages);
		}).then(() => {
			// should increment the page value by 1
			this.setState({
				page: this.state.page + 1,
			})
			console.log(this.state.passageResults);
			console.log(this.state.page);
		})
	
	}

	// When component loads, perform the function defined above
	componentDidMount = () => {
		this.getPassages(this.state.page);
		this.scrollListener = window.addEventListener("scroll", event => {
			this.handleScroll(event);
		})
	}

	handleScroll = (event) => {
		const { scrolling, page } = this.state;
		// These returns prevent the function from continuing if either is true
		if (scrolling) return
		if (page >= 4) return

		// Grabbing the last element in the unordered list
		const lastCard = document.querySelector("ul.cards > li:last-child");

		// calculating offset, to start loading before the user reaches the bottom of the page
		const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
		const pageOffset = window.pageYOffset + window.innerHeight;
		const bottomOffset = 20;
		if (pageOffset > lastCardOffset - bottomOffset) {
		this.setState({scrolling: true})
		this.getPassages(this.state.page)
		}
	}

	// Maps through the results of the API call
	renderPassages() {
		return this.state.passageResults.map(passage => {
			return (
				<Card 
					key={passage.id + passage.testId}
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
