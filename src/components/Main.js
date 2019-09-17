import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory';
import resetInventory from '../actions/resetInventory';

class Main extends Component{
    render(){

        const frozenQuantity = this.props.frozenData.reduce((a,b)=>a+b.quantity,0)
        const meatQuantity = this.props.meatData.reduce((a,b)=>a+b.quantity,0)
        const dairyQuantity = this.props.dairyData.reduce((a,b)=>a+b.quantity,0)

        const storeInventoryArray = [
            ...this.props.frozenData,
            ...this.props.meatData,
            ...this.props.dairyData
        ];

        let storeProducts = storeInventoryArray.map((product,i)=>{
            return(
                <div key={i}>
                    <h5>{product.food}: {product.quantity}</h5>
                </div>
            )
        })

        return(
            <div className="col col-sm-12">
                <button onClick={this.props.resetInventory}>Reset Inventory</button>
                <button onClick={this.props.clearInventory}>Clear All Inventory</button>
                <h2>Frozen Dept Total: {frozenQuantity}</h2>
                <h2>Meat Dept Total: {meatQuantity}</h2>
                <h2>Dairy Dept Total: {dairyQuantity}</h2>
                {storeProducts}
                {/* <MeatDept />
                <DairyDept />
                <FrozenDept /> */}
            </div>
        )
    }
} 

function mapStateToProps(state){
    return{
        dairyData: state.dairy,
        frozenData: state.frozen,
        meatData: state.meat
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory,
        resetInventory
    },dispatch)
}

// export default Main;
export default connect(mapStateToProps,mapDispatchToProps)(Main);
