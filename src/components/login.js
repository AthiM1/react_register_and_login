import React ,{Component} from 'react'
import axios from 'axios'

class Login extends Component{
    
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            
            email: this.email,
            password: this.password,
        }
        axios.post('login',data)
        .then(res => {
            localStorage.setItem('token', res.data.token);

        } ).catch(

            err => {
                console.log(err)
            }

        )
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h3> Login
            </h3>
          
  
           
            <div className="form-group p-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" 
                onChange={e=> this.email = e.target.value}/>

            </div>
            <div className="form-group p-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder=" Password" 
                onChange={e=> this.password = e.target.value}/>

            </div>
            
            <button className="btn btn-primary btn-block form-control ">Login </button>
        </form>

        )
    }
}

export default Login;