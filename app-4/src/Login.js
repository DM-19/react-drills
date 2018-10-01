import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsername(name) {
        this.setState({
            username: name
        })
    }

    handlePass(pass) {
        this.setState({
            password: pass
        })
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
        this.setState({
            password: "",
            username: ""
        })
    }






    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleUsername(e.target.value)} value={this.state.username}></input>
                <input type="text" onChange={(e) => this.handlePass(e.target.value)} value={this.state.password}></input>
                <br />
                <br />
                <button onClick={this.handleLogin}>Login</button>

            </div>

        );
    }
}

export default Login;