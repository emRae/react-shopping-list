import React from 'react';
import List from './List';
import ShoppingListForm from './ShoppingListForm';

class ShoppingListApp extends React.Component{
	render(){
		return(
			<div className="ShoppingApp">
			<ShoppingListForm />
			<List />
			</div>
		)
	}
}

export default ShoppingListApp;