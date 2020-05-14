import React from 'react';
import './PostPreview.css';
import StringExtended from 'string';
import { Link } from 'react-router-dom';

function PostPreview({ title, excerpt, thumbnail, postId }) {
    return (
        <div className="post-preview">
            <div className="post-preview-info">
                <h3>{StringExtended(title).unescapeHTML().s}</h3>
                <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                <Link to={`/post/${postId}`}>Read More</Link>
            </div>
            <img src={thumbnail} alt="thumbnail" />
        </div>
    );
}

export default PostPreview;