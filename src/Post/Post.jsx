import React, { Component, Fragment } from 'react';
import StringExtended from 'string';
import axios from 'axios';
import './Post.css';


export default class Post extends Component {
    state = {
        post: {},
        hasLoaded: false
    }

    componentDidMount() {
        // We use embed to have access to the author's name
        axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}?_embed`)
            .then(res => this.setState({
                post: res.data,
                hasLoaded: true
            }))
            .catch(e => console.log(e));
    }
    render() {
        const { post, hasLoaded } = this.state;
        if (hasLoaded) {
            console.log(post.content.rendered);
        }
        return (
            <Fragment>
                {hasLoaded ?
                    <div className="post">
                        <h1>{StringExtended(post.title.rendered).unescapeHTML().s}</h1>
                        <small>Written by {post._embedded.author[0].name} / {new Date(post.date).toUTCString()}</small>
                        <img src={post.jetpack_featured_media_url} alt="post" />
                        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                    </div> :
                    <div>Loading...</div>
                }
            </Fragment>
        );
    }
}
