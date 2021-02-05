
import './App.css';
import React ,{Component} from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/nav'
import Login from './components/login'
import Register from './components/register'
import axios from 'axios';
class App extends Component{ 
  state ={};
  componentDidMount = () => {

    axios.get('user').then(
        res => {
             this.setState({
                 user: res.data
             });   
        },

        err => {
            console.log(err)
      }
    )
};

  render() {
  return (
    <BrowserRouter>
    <div className="App">
  <Navbar user={this.state.user} />
<div class="auth-wrapper">
  <div class="auth-inner">
  <Switch>
    < Route exact path ="/" component={() => <Home user={this.state.user}/>} />
    < Route exact path ="/login" component={Login} />
    < Route exact path ="/register" component={Register} />

  </Switch>
 
  </div>
</div>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
