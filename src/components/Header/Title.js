import React from 'react';

const Title = ({ text }) => {
    return (
        <div className="blog-title">
            <a href="#">
                <h1>{text}</h1>                            
            </a>
        </div>
    );
}

export default Title;