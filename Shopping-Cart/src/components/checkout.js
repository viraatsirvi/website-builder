import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Details extends Component{
    
    render(){
        let quantity = 0;
        if(this.props.addedItems.length!=0){  
            (this.props.addedItems).forEach(el =>{
                quantity +=  el.quantity;
            });
       }

        return(
            <div className="">
                <div>
                    <div>Total: ₹{this.props.total}</div>
                    <div>Qty: {quantity} </div>
                </div>
                <input type='hidden' name="total" value={this.props.total} />
                <input type='hidden' name="quantity" value={quantity} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}


export default connect(mapStateToProps)(Details)
