import React, { Component }  from 'react';
import addItemAction from '../actions/AddItemAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddItem extends Component{

    state = {
        food: "",
        quantity: 0
    }

    submitItem = (e)=>{
        e.preventDefault();
        this.props.addItemAction(
            this.props.dept,
            this.state.food,
            this.state.quantity
        )
    }

    changeFood = (e)=>{
        this.setState({food:e.target.value})
    }
    changeQuantity = (e)=>{
        this.setState({quantity: Number(e.target.value)})
    }

    render(){
        return(
            <div>
            <form onSubmit={this.submitItem}>
                <input value={this.state.food} onChange={this.changeFood} type="text" placeholder="Food Name" />
                <input value={this.state.quanity} onChange={this.changeQuantity} type="number" min="0" placeholder="0" />
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addItemAction: addItemAction
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(AddItem);
