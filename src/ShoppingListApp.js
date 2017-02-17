import React from 'react';
import ListForm from './ListForm';
import List from './List';

class ShoppingListApp extends React.Component{
	constructor(props){
		super(props)
		this.state = { items: [], nextId:0 }
	}

	addItem = (text) => {
		let item = {
			text, 
			id: this.state.nextId, 
			completed: false
		}
		let items = [item, ...this.state.items];
		this.setState({items, nextId: ++this.state.nextId});
	}

	onItemClick = (id) => {
		let items = this.state.items.map( item => {
			if (item.id === id) {
				return{
					...item,
					completed: !item.completed
				}
			}

			return item
		});

		this.setState({ items });
	}

	render(){
		return(
			<div className="ShoppingApp">
				<ListForm addListItem={this.addItem} />
				<List 
				items={this.state.items}
				onItemClick={this.onItemClick}
				/>
			</div>
		)
	}
}

export default ShoppingListApp;