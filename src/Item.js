import React from 'react';


const Item = ({text, id, completed, onItemClick }) => (
	<li 
		onClick={()=> onItemClick(id)}
		style={
			completed ? {textDecoration: 'line-through', color: 'grey'}
			:
			{}
		}
	>
		{text}
	</li>
)

export default Item;