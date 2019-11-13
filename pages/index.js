import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
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

ReactDOM.render(
	<Provider store={store}>  
		<Home />
	</Provider>,    
	document.getElementById("root")
)

export default Home;