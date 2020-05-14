import React, { Component } from 'react';
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
            console.log(post);
            const name = post._embedded.author[0].name;
            console.log(name);
        }
        return (
            <div>
                <h1>Post title</h1>
            </div>
        )
    }
}
