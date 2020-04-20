import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from './checkout'
import { addQuantity,subtractQuantity} from './actions/cartActions'

class Mycart extends Component{
   
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.brand}</span>
                                        <p>{item.product}</p>
                                        <p><b>Price: ₹{item.price}</b></p> 
                                        
                                        <div style={{display:'flex'}}>
                                        <Link to="/cart"><i className="qty" onClick={()=>{this.handleAddQuantity(item.id)}}>+</i></Link>
                                        <p className="added-item">
                                            <b>{item.quantity}</b> 
                                        </p>
                                        <Link to="/cart"><i className="qty" onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</i></Link>
                                        </div>

                                    </div>
                                    
                                    <input type="hidden" name='products' value={item} />
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
           <form action="/checkout" method="post">
            <div className="container">
                <h5>You have ordered:</h5>
                <div className="srch-card">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <div className="srch-card" >
                <Checkout /> 
                <div style={{margin:'auto',marginRight:'10px'}}>
                    <input type="submit" className="submit-btn" value="make payment" />
                </div> 
                </div>        
            </div>
            </form>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mycart)