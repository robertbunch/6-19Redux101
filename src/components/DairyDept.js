import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dairy extends Component{
    render(){
        let dairyData = this.props.dairyData.map((dairy,i)=>{
            return (
                <div key={i}>
                    <h1>{dairy.food}: {dairy.quantity}</h1>
                </div>
            )
        })

        return(
            <div>
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


// export default Dairy;
export default connect(mapStateToProps)(Dairy);

