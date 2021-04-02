import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faGoogle} from '@fortawesome/free-solid-svg-icons'


<i class="fab fa-google"></i>
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };



    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    var provider = new firebase.auth.GoogleAuthProvider();
    const handelGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var {displayName,email} = result.user;
                const signInUser ={name: displayName,email}
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                
            });
    }
    return (
        <div style={{textAlign:'center'}}>
            <Button onClick={handelGoogleSignIn}>
                
                 Sign in Google</Button>
            <h3>{loggedInUser.email}</h3>
        </div>
    );
};

export default Login;