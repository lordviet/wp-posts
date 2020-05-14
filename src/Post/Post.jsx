import React from 'react';
import StringExtended from 'string';
import './Post.css';

export default function Post({ title, authorName, date, img, content }) {    
    return (
        <div className="post">
            <h1>{StringExtended(title).unescapeHTML().s}</h1>
            <small>Written by {authorName} / {new Date(date).toUTCString()}</small>
            <img src={img} alt="post" />
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    );
}