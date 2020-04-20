import React from 'react';
import { Link } from 'react-router-dom'
 const Menubar = ()=>{
    return(
            <div className="nav-wrapper">    
                    <div className="right">
                        <div><Link to="/">Shop</Link></div>
                        <div><Link to="/cart">My cart</Link></div>
                    </div>
            </div>
   
        
    )
}

export default Menubar;