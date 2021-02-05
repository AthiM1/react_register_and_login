import React ,{Component} from 'react'


class Navbar extends Component{
    render(){
        let buttons;

        if(this.props.user){
            buttons = (
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 form-group form-control p-3 ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/" onClick={() => localStorage.clear()}>Logout</a>
                  </li>
                    </ul>
            )
        }else{
            buttons = (
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 form-group form-control p-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Sign up</a>
                  </li>
                    </ul>
                   
            )
        }
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-top form-group form-control p-3">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Home</a>
              <div className="row align-items-end">
              <div className="col">
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                {buttons}
            </div>
                    </div>
              </div>
            </div>
          </nav>
          </div>
        )
    }
}

export default Navbar;