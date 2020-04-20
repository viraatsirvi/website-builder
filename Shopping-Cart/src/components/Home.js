import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {  addToCart,addQuantity,subtractQuantity} from './actions/cartActions'
import Details from './details'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    
    render(){

        let itemList = this.props.items.map(item=>{
            console.log(item)
            return(
                <div className="srch-card" key={item.id}>
                    <div className="srch-img">
                        <img src={item.img} alt={item.brand}/>
                        <div className="srch-offer">{item.offer != 0 ? item.offer : ''}% OFF</div>
                    </div>

                    <div className="srch-content">
                        <div className="brand">{item.brand}</div>
                        <div>{item.product}</div>
                        <div>{item.quantity}</div>
                        <div>MRP {item.mrp}</div>
                        <div>RS {item.price}</div>
                        <div className="add-remove">
                            <div className="cart-btn">
                                <span to="/" onClick={()=>{this.handleClick(item.id)}}><i>Add to cart</i></span>
                            </div>
                        </div>
                    </div>
                 </div>

            )
        })

        return(
            <div>
                
                {itemList}
                <div className="footer">
                  <Details />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)