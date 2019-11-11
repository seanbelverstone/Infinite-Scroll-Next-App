import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import API from "../utils/API";


class Problems extends React.Component {

	state = {
		problemResults: [],
		page: 0,
		scrolling: false
	}

	getProblems(page) {
		API.getProblems(page).then(results => {
			const oldProblems = this.state.problemResults;

			if (oldProblems.length !== 0) {
				this.setState({
					problemResults: [...oldProblems, ...results.data.data.problems],
					scrolling: false
				});
			} else {
				this.setState({problemResults: results.data.data.problems})
			}

			console.log(results.data.data.problems);
		}).then(() => {
			// should increment the page value by 1
			this.setState({
				page: this.state.page + 1,
			})
			console.log(this.state.problemResults);
			console.log(this.state.page);
		})
	
	}

	componentDidMount = () => {
		this.getProblems(this.state.page);
		this.scrollListener = window.addEventListener("scroll", event => {
			this.handleScroll(event);
		})
	}

	handleScroll = (event) => {
		const { scrolling, page } = this.state;
		// These returns prevent the function from continuing if either is true
		if (scrolling) return
		if (page >= 12) return

		// Grabbing the last element in the unordered list
		const lastCard = document.querySelector("ul.cards > li:last-child");

		// calculating offset, to start loading before the user reaches the bottom of the page
		const lastCardOffset = lastCard.offsetTop + lastCard.clientHeight;
		const pageOffset = window.pageYOffset + window.innerHeight;
		const bottomOffset = 20;
		if (pageOffset > lastCardOffset - bottomOffset) {
		this.setState({scrolling: true})
		this.getProblems(this.state.page)
		}
	}

	// Maps through the results of the API call
	renderProblems() {
		return this.state.problemResults.map(problem => {
			return (
				<Card 
					key={problem.id + problem.section_id + problem.subject_id}
					title={problem.notes}
					reference_id={problem.reference_number}
					notes={problem.notes}
					text={problem.text}
					label={problem.format}
				/>
			)
		})
	};

	render() {
		return(
			<div>
				<Head>
					<title>Problems</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<MainNav />
				<div className='hero'>
					<h1 className='title'>Problems</h1>

					<div className='row'>
					<CardWrapper>
						{this.renderProblems()}
					</CardWrapper>
					</div>
				</div>
			</div>
		)
	}
};

export default Problems;
