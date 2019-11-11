import React from "react";

const cardStyle = {
	padding: 10,
	margin: 20,
	border: "2px black solid",
}

const CardWrapper = props => (
	<div style={cardStyle} className="cardWrapper">
	  <ul>{props.children}</ul>
	</div>
  );
  
  export default CardWrapper;