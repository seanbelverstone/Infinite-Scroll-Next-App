import React from "react";

const CardWrapper = props => (
	<div style={cardStyle}>
	  <ul>{props.children}</ul>
	</div>
  );
  
  export default CardWrapper;