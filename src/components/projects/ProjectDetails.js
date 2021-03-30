import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import moment from 'moment'
const ProjectDetails = ({project, auth}) => {
    if (!auth.uid) return <Redirect to="/login"/>
    if (project) {
        return (
            <div className="project-detail">
                <div className="container">
                    <div className="card z-depth-0">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{project.title} </span>
                            <p>{project.content}
          </p>
                        </div>
                        <div className="card-action">
        <p className="grey-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                            <p className="grey-text">{moment(project.createAt.toDate()).calendar()}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
         project: project,
         auth: state.firebase.auth
     }
}

export default compose(
    connect(mapStateToProps), (firestoreConnect([
        { collection: "projects" }
    ]))
)(ProjectDetails);