import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
const Dashboard = ({ projects, auth, notifications }) => {
    if (!auth.uid) return <Redirect to='/login'/>
    return (
        <div className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notifications={notifications}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' , orderBy:['createAt', 'desc']},
        { collection: 'notifications', limit: 3,orderBy:['time', 'desc']}
    ])
)(Dashboard)