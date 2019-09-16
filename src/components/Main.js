import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeatDept from './MeatDept';

class Main extends Component{
    render(){

        const storeInventoryArray = [
            ...this.props.frozenData,
            ...this.props.meatData,
            ...this.props.dairyData
        ];

        let storeProducts = storeInventoryArray.map((product,i)=>{
            return(
                <h5>{product.food}: {product.quantity}</h5>
            )
        })

        return(
            <div>
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


// export default Main;
export default connect(mapStateToProps)(Main);
