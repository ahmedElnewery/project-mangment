
const initialState = {
    projects: [{ id: 1, title: "title no.1", content: "lorem lorem lorem blah blah" },
    { id: 2, title: "title no.2", content: "lorem lorem lorem blah blah " },
    { id: 3, title: "title no.3", content: " lorem lorem lorem blah blah" }
    ]
}

function projectReducer(state = initialState, action) {
    switch (action.type) {
        case ("CREATE_PROJECT"):
            Object.assign({}, state, {
                projects: state.projects.concat(action.project)
            })
            return state;
        case ('CREATE_PROJECT_ERR'):
            console.log("ERORR IN ADD PROJECT", action.err)
            return state;
        default:
            return state
    }
}
export default projectReducer