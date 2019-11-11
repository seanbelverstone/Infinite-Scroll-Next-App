/* eslint-disable react/prop-types */
import React from "react";

const cardBody = {
	padding: 10,
	margin: 20,
	border: "2px black solid",
	backgroundColor: "lightgray"
}

const MainCard = (props) => { 

	return (
		<li className="cardList">
			<div className="cardBody" style={cardBody}>
				<div className="title">{`Title: ${props.title} ID: ${props.reference_id}`}</div>
				<div className="subTitle">{`Notes ${props.notes}`}</div>
				<div className="text">{props.text}</div>
				<p>{props.label}</p>
			</div>
		</li>
	);
};

export default MainCard;