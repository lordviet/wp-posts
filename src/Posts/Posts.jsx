import React, { Component } from 'react';
import axios from 'axios';
import './Posts.css';
import PostPreview from './PostPreview/PostPreview';


export default class Posts extends Component {
    state = {
        posts: [],
        hasLoaded: false
    }

    componentDidMount() {
        axios.get('/wp-json/wp/v2/posts?per_page=10')
            .then(res => this.setState({
                posts: res.data,
                hasLoaded: true
            }))
            .catch(e => console.log(e));
    }

    render() {
        const { posts, hasLoaded } = this.state;
        
        return (
            <div className="posts">
                {hasLoaded ?
                    posts.map(p => <PostPreview key={p.id} postId={p.id} title={p.title.rendered}
                        excerpt={p.excerpt.rendered} thumbnail={p.jetpack_featured_media_url} />) :
                    <div>Loading...</div>}
            </div>
        );

    }
}