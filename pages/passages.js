import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import { connect } from "react-redux";
import { getPassages, handleScroll, incrementPage } from "../actions";
class Passages extends React.Component {

// Function for setting the results of the API call to state on this page
	getPassages(page) {
		
		this.props.getPassages(page);
		this.props.incrementPage(page);
	
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
		return this.props.passageResults.map(passage => {
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

const mapStateToProps = (state) => {
	return {
	  passageResults: state.passageResults,
	  page: state.page,
	  scrolling: state.scrolling
	}
  }
  
  const mapDispatchToProps = {
	getPassages,
	handleScroll,
	incrementPage,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Passage);
