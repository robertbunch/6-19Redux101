import React, { Component } from 'react';
import { connect } from 'react-redux';

class FrozenDept extends Component{
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

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);

// const connect = (mSTP,mDTP)=>{
//     // ... does some stuff...
//     // ... does some more stuff ...
//     return((component)=>{
//         render(component)
//     })
// }