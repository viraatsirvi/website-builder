import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Menubar from './components/menubar'
import Home from './components/Home'
import Mycart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Menubar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Mycart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
