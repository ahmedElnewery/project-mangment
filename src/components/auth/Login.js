import React, { Component } from 'react';
import { signIn } from './../../redux/actions/authAction';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const target = e.target
        this.setState({
            [target.id]: target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.signIn(this.state)
        this.setState({
            email: "",
            password: ''
        })

    }
    render() {
        const { email, password } = this.state
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        const signupLink = <Link to="/signup">Sign up</Link>
        return (
            <div className="Login">
                <div className="container">
                    <form className="login-form white" onSubmit={this.handleSubmit}>
                        <h4>Login</h4>
                        <div className="input-field ">
                            <input id="email" type="email" className="validate" onChange={this.handleChange} value={email} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field ">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="validate" onChange={this.handleChange} value={password} />
                        </div>

                        <button type="submit" className="btn waves-effect waves-light">Login</button>
                        {authError ?
                         <div className="center red-text">{authError}`</div> 
                         : null}

                    </form>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);