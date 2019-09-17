import React, { Component } from 'react';
import { connect } from 'react-redux';
// we need our action creator
import updateFrozen from '../actions/frozenInvUpdate';
// in order for updateFrozen to be an actionCreator...
import { bindActionCreators } from 'redux';

class FrozenDept extends Component{


    componentDidMount(){
        this.props.updateFrozen([{}]);
    }

    render(){
        
        let frozenData = this.props.frozenData.map((frozen,i)=>{
            return (
                <div key={i}>
                    <h1>{frozen.food}: {frozen.quantity}</h1>
                </div>
            )
        })
        
        console.log(this.props.frozenData);
        return(
            <div>
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