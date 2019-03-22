import React, { Component } from "react";
import './Login.css';

class Login extends Component {
  state = {
    id: '',
    password: ''
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  submitLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      id: '',
      password: ''
    })
  }

  render() {
    return (
      <div className="Login">
        <div className="box">
          <h3>Authentication</h3>

          <div className="input-group">
            <label htmlFor="id">Identifier</label>
            <input
              type="text"
              name="id"
              className="login-input"
              placeholder="ID..."
              value={this.state.id}
              onChange={this.onChange}/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.onChange}/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
