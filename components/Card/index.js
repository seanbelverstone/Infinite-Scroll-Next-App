/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const MainCard = (props) => {
	return (
		<div>
			<Card>
				<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
				<CardBody>
					<CardTitle>{`Title: ${props.title} ID: ${props.reference_id}`}</CardTitle>
					<CardSubtitle>{`Notes ${props.notes}`}</CardSubtitle>
					<CardText>{props.text}</CardText>
					<p>{props.label}</p>
				</CardBody>
			</Card>
		</div>
	);
};

export default MainCard;