import React from 'react';

const AuthPage = props => {
    return(
        <div>
            <p>{this.props.authInfo}</p>
        </div>
    );
};

AuthPage.propTypes = {
    authInfo: React.PropTypes.string.isRequired
};

export default AuthPage;