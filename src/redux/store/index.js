import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './../reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './../../config/fbConfig';
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig, {
            useFirestoreForProfile: true,
            userProfile: 'users',
            attachAuthIsReady: true}),
        reduxFirestore(fbConfig) // redux bindings for firestore
    )
);


export default store