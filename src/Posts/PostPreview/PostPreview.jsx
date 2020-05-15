import React from 'react';
import './PostPreview.css';
import StringExtended from 'string';
import { Link } from 'react-router-dom';

export default function PostPreview({ title, excerpt, thumbnail, postId }) {
    return (
        <Link to={`/post/${postId}`} className="post-preview">
            <div className="post-preview-info">
                <h3>{StringExtended(title).unescapeHTML().s}</h3>
                <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
            </div>
            <picture>
                <source media="(min-width: 327px)"
                    type="image/jpeg" srcSet={thumbnail} />
                <source type="image/jpeg"
                    srcSet={thumbnail} />
                <img src={thumbnail} alt="thumbnail"
                    width="280" height="260" />
            </picture>
        </Link>
    );
}