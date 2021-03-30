import React, { Component } from 'react';
import { createProject } from './../../redux/actions/projectAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
class CreateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
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
        this.props.createProject(this.state)
        this.setState({
            title: "",
            content: ""
        })
        this.props.history.push('/')
    }
    render() {
        const { title, content } = this.state
        const {auth} =this.props
        if (!auth.uid) return <Redirect to="/login"/>
        return (
            <div className="new-project">
                <div className="container">
                    <form className="project-form white" onSubmit={this.handleSubmit}>
                        <h4>ADD NEW PROJECT</h4>
                        <div className="input-field ">
                            <input id="title" type="text" className="validate" onChange={this.handleChange} value={title} />
                            <label htmlFor="title">Title</label>
                            <span className="helper-text">Helper text</span>
                        </div>
                        <div className="input-field ">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} value={content} />
                            <span className="helper-text">Helper text</span>
                        </div>

                        <button type="submit" className="btn waves-effect waves-light">Add Project</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);