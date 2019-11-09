import React from "react";
import Head from "next/head";
import MainNav from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
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
);

export default Home;
