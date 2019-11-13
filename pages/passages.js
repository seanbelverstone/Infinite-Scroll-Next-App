import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import store from "../index";
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
		this.getPassages(this.props.page);
		this.scrollListener = window.addEventListener("scroll", event => {
			this.handleScroll(event);
		})
	}

	handleScroll = (event) => {
		this.props.handleScroll(this.props.page, (this.props.maxPages = 4))
		this.getPassages(this.props.page)
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

Passages.getInitialProps = () => {
	store.dispatch(getPassages(), handleScroll(), incrementPage()); // action will dispatched on page load
  
	const state = store.getState(); // returns redux store
	console.log(state);
  
	return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(Passages);
