import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import store from "../index";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {

	componentDidMount() {
		<Provider store={store}>  
			<Home />
		</Provider>,    
		document.getElementById("root")
	}


	render() {
		return (
			<div>
				<Head>
					<title>Home</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<MainNav />
				<div className='hero'>
					<h1 className='title'>Infinite Scroll - Next Application</h1>

					<div className='row'>
        
					</div>
				</div>
			</div>
		)
	}
	
};

// Home.getInitialProps = (store) => {
// 	store.dispatch(); // action will dispatched on page load
  
// 	const state = store.getState(); // returns redux store
// 	console.log(state);
  
// 	return {};
// };

export default Home;