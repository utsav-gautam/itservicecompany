import React, { Component } from 'react'
import './Login.css'
import CrudServices from '../../Services/CrudServices';
const service = new CrudServices();
class Login extends Component {
    constructor() {
        super();
        this.state = {
            Username: "",
            Password: "",
            flag: false,
        }
    }

    onNameChange = (event) => {
        this.setState({ Username: event.target.value })
        console.log(this.state)
    }
    onPasswordChange = (event) => {
        this.setState({ Password: event.target.value })
        console.log(this.state)
    }
    handleClick = () => {
        console.log("entered")
        let data = {
            "username": this.state.Username,
            "userpassword": this.state.Password
        }
        service.CreateRecord(data).then((data) => {
            console.log(data)
            if (data.request.status == 200) {
                this.props.colorChange();
                window.history.replaceState(null,null,"http://localhost:3000/")
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    render() {
        const state = this.state;
        return (
            <div className='body'>
                <div className="center">
                    <h1>Login</h1>
                    < form>
                        <div className="txt_field">
                            <input onChange={this.onNameChange} value={state.Username} type="text" required />
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div className="txt_field">
                            <input onChange={this.onPasswordChange} value={state.Password} type="text" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div className="pass">Forgot Password?</div>
                    </form>
                    <input onClick={this.handleClick} type="submit" value="Login" />
                </div>
            </div>
        );
    }
}

export default Login