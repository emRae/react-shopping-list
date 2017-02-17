import React from 'react';

class ShoppingListApp extends React.Component{
	render(){
		return(
			<div className="ShoppingApp">
			< ShoppingListForm />
			< List />
			</div>
		)
	}
}

export default ShoppingListApp;