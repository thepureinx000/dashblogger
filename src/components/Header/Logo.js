import React from 'react';

const Logo = ({ blogImage }) => {
    return (
        <div className="blog-image">
            <img src={blogImage} alt="blog" />                
        </div>
    );
}

export default Logo;