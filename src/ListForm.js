import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

    addItem = (e) => {
        e.preventDefault();
        let { item, form } = this.refs;
        this.props.addListItem(item.value)
        form.reset();
    }
    
    updateLabel = () => {
        let { item } = this.refs;
        let text = item.value;
        this.setState({ text })
    }

    render() {
        return (
            <div>
                <label>{this.state.text}</label>
                <form ref='form' onSubmit={this.addItem}>
                  <input 
                    onKeyUp={ this.updateLabel}
                    ref="item"
                    placeholder="Add Item"
                    required={true}
                  />
                </form>  
            </div>
        )
    }
}

export default ListForm;