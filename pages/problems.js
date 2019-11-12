import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import CardWrapper from "../components/Card Wrapper";
import Card from "../components/Card";
import { connect } from "react-redux";
import { getProblems, handleScroll, incrementPage } from "../actions";


class Problems extends React.Component {

	getProblems(page) {
		
		this.props.getProblems(page);
		this.props.incrementPage(page);
	
	}

	componentDidMount = () => {
		this.getProblems(this.state.page);
		this.scrollListener = window.addEventListener("scroll", event => {
			this.handleScroll(event);
		})
	}

	handleScroll = (event) => {
		this.props.handleScroll(this.props.page, (this.props.maxPages = 12))
		this.getProblems(this.props.page)
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

const mapStateToProps = (state) => {
	return {
	  problemResults: state.problemResults,
	  page: state.page,
	  scrolling: state.scrolling
	}
  }
  
  const mapDispatchToProps = {
	getProblems,
	handleScroll,
	incrementPage,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Problems);