import React from 'react';
import './PostPreview.css';
import StringExtended from 'string';

function PostPreview(props) {
    
    const { title, excerpt, thumbnail } = props;
    
    return (
        <div className="post-preview">
            <img src={thumbnail} alt="thumbnail" />
            <div className="post-preview-info">
                <h3>{StringExtended(title).unescapeHTML().s}</h3>
                <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                <p>Read More</p>
            </div>
        </div>
    );
}

export default PostPreview;