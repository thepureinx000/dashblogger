import React, { Component } from 'react';

import AuthPage from '../components/AuthPage';

class Auth extends Component {

    render() {
        return (
            <div>
                <AuthPage infoAuth={'Hello Auth Page!'} />
            </div>
        );
    }
}

export default Auth;