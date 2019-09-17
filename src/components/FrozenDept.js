import React, { Component } from 'react';
import { connect } from 'react-redux';
// we need our action creator
import updateFrozen from '../actions/frozenInvUpdate';
// in order for updateFrozen to be an actionCreator...
import { bindActionCreators } from 'redux';
import AddItem from './AddItem';

class FrozenDept extends Component{

    componentDidMount(){
        // this.props.updateFrozen([]);        
    }

    changeQuantity = (operation,indexToChange)=>{
        console.log(operation,indexToChange);
        this.props.updateFrozen(operation,indexToChange);
    }
    
    render(){
        let frozenData = this.props.frozenData.map((frozen,i)=>{
            return (
                <div key={i}>
                    <li>{frozen.food}: {frozen.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}} value="+" />
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('-',i)}} value="-" />
                </div>
            )
        })
        
        console.log(this.props.frozenData);
        return(
            <div>
                <AddItem dept="Frozen" />
                {frozenData}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        frozenData: state.frozen
    }
}

function mapDispatchToProps(dispatch){
    // mapDispatchToProps is how we connect  
    // our component using this action creator 
    // to the dispatch
    // this function returns, bindActionCreators
    // and we hand bindActionCreators an object
    return bindActionCreators({
        //each property will be a local prop
        // each value will be a function, action
        // creator, that will have return value (action)
        // sent to the dispatch
        updateFrozen: updateFrozen
        // updateFrozen was a regular funciton.
        // but... bindActionCreators is like being bit by a radio
        // active spider. It's now an action creator.
        // All an action creator is... is a function that returns
        // an action.
        // What is an action? An action is object that has 
        // at LEAST ONE property: type. The dispatch
        // will send that object to every reducer
    }, dispatch)
}

// export default FrozenDept;
export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept);

// const connect = (mSTP,mDTP)=>{
//     // ... does some stuff...
//     // ... does some more stuff ...
//     return((component)=>{
//         render(component)
//     })
// }