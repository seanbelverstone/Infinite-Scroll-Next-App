/* eslint-disable react/prop-types */
import React from "react";

const cardBody = {
	padding: 10,
	margin: 20,
	border: "2px black solid",
	backgroundColor: "lightgray"
}

const title = {
	fontSize: 16,
	fontWeight: "bold"
}

const MainCard = (props) => { 

	return (
		<li className="cardList">
			<div className="cardBody" style={cardBody}>
				<div className="title" style={title}>{`Title: ${props.title} ID: ${props.reference_id}`}</div>
				<div className="subTitle">{`Notes: ${props.notes}`}</div>
				<div className="text" ><data>{props.text}</data></div>
				<p>Category: {props.label}</p>
			</div>
		</li>
	);
};

export default MainCard;