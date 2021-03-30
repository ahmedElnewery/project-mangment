import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './../../redux/actions/authAction';
const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
}
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
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
        e.preventDefault();
        this.props.signUp(this.state)
        this.setState(initialState)

    }
    render() {
        const { email, password, firstName, lastName } = this.state
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="signup ">
                <div className="container">

                    <form className="signup-form white" onSubmit={this.handleSubmit}>
                        <h4>Sign Up</h4>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" className="validate" onChange={this.handleChange} value={firstName} />
                        </div>

                        <div className="input-field ">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" className="validate" onChange={this.handleChange} value={lastName} />

                        </div>
                        <div className="input-field ">
                            <input id="email" type="email" className="validate" onChange={this.handleChange} value={email} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field ">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="validate" onChange={this.handleChange} value={password} />
                        </div>


                        <button type="submit" className="btn waves-effect waves-light">Sign Up</button>
                        <div className="helper-text center red-text">{authError ? authError : null}</div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);