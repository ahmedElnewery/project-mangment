;
export function createProject(project) {
    return function (dispatch, getState, { getFirebase, getFirestore }) {
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', err })
        })
    }

}