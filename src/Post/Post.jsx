import React from 'react';
import StringExtended from 'string';
import './Post.css';

export default function Post({ title, authorName, date, img, content }) {    
    return (
        <div className="post">
            <h1>{StringExtended(title).unescapeHTML().s}</h1>
            <small>Written by {authorName} / {new Date(date).toUTCString()}</small>
            <picture>
                <source media="(min-width: 327px)"
                    type="image/jpeg" srcSet={img} />
                <source type="image/jpeg"
                    srcSet={img} />
                <img src={img} alt="post"
                    width="800" height="530"/>
            </picture>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    );
}