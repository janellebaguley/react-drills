import React, {Component} from 'react';

class Login extends Component {
    constructor(){
      super()
      this.state = {
        userName: '',
        password: ''
  
      }
      this.handleLogin = this.handleLogin.bind(this);
    }
    handleUsernameChange(name){
        this.setState({username: name});
}
handleLogin(){
    alert('Username: ${this.state.username} Password: ${this.state.password}')
}

render(){
    return (
      <section>
          <input onChange={e => this.handleUsernameChange(e.target.value)}/>
          <input onChange={e => this.handlePasswordChange(e.target.value)} type = 'text'/>
          <button onClick={this.handleLogin}>Login</button>
      </section>
    );
   }
  }
  
  export default Login;
  