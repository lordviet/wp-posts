import React from 'react';
import './PostPreview.css';

function PostPreview(props) {
    console.log(props);
    const { title, excerpt, thumbnail } = props;
    console.log(typeof excerpt)
    return (
        <div className="post-preview">
            <img src={thumbnail} alt="thumbnail" />
            <div className="post-preview-info">
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                <p>Read More</p>
            </div>
        </div>
    );
}

export default PostPreview;