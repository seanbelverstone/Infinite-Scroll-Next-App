/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const MainCard = (props) => { 


	return (
		<li className="cardList">
			<div className="cardBody">
				<div className="title">{`Title: ${props.title} ID: ${props.reference_id}`}</div>
				<div className="subTitle">{`Notes ${props.notes}`}</div>
				<div className="text">{props.text}</div>
				<p>{props.label}</p>
			</div>
		</li>
	);
};

export default MainCard;