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
            <div className="details-wrapper">
                <div>
                    <div>Total: ₹{this.props.total}</div>
                    <div>Qty: {quantity} </div>
                </div>
                <div style={{margin:'auto',marginRight:'10px'}}>
                    <div ><Link to="/cart"><i className="details-btn">Checkout</i></Link></div>
                </div>
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
