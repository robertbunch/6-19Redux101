import React, { Component } from 'react';
// in order for this component to know about Redux, we need some glue
// react-redux... specificallly, the connect thing
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateMeat from '../actions/meatInvUpdate';
import AddItem from './AddItem';

class MeatDept extends Component{

    changeQuantity = (operation,indexToChange)=>{
        this.props.updateMeat(operation,indexToChange)
    }

    render(){
        let meatData = this.props.meatData.map((meat,i)=>{
            return (
                <div key={i}>
                    <li>{meat.food}: {meat.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}} value="+" />
                    <input className="subtract-button" type="button" onClick={()=>{this.changeQuantity('-',i)}} value="-" />

                </div>
            )
        })

        console.log(connect);
        console.log(this.props.meatData);
        return(
            <div>
                <AddItem dept="Meat" />
                {meatData}
            </div>
        )
    }
}

function mapStateToProps(state){
    // mapStateToProps takes 1 arg: "state"
    // that "state" var, IS the rootReducer (store)
    // mapStateToProps returns an object with:
    // key/property is the local prop name in THIS component
    // value will be the property in the rootReducer (store) 
    return {
        meatData: state.meat
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateMeat
    }, dispatch)
}

// export default MeatDept;
// we don't export the class when we need redux
// we export connect (a fucntion).
// connect takes 2 args: 
// 1. a function that is going to map state to props
// 2. a function that maps the dispatch to props
// 3. connect is a functino that retuns a function
// 3.1. that function takes a arg of the class
// const MeatDeptWithRedux = connect(mapStateToProps)
// export default MeatDeptWithRedux(MeatDept);
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);