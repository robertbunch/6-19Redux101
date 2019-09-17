import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateDairy from '../actions/dairyInvUpdate';
import AddItem from './AddItem';

class Dairy extends Component{

    changeQuantity = (operation,indexToChange)=>{
        this.props.updateDairy(operation,indexToChange)
    }

    render(){
        let dairyData = this.props.dairyData.map((dairy,i)=>{
            return (
                <div key={i}>
                    <li>{dairy.food}: {dairy.quantity}</li>
                    <input className="add-button" type="button" onClick={()=>{this.changeQuantity('+',i)}} value="+" />
                    <input className="subtract-button" type="button" onClick={()=>{this.changeQuantity('-',i)}} value="-" />
                </div>
            )
        })

        return(
            <div>
                <AddItem dept="Dairy" />
                {dairyData}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        dairyData: state.dairy
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateDairy
    }, dispatch)
}

// export default Dairy;
export default connect(mapStateToProps,mapDispatchToProps)(Dairy);

