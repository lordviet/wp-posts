import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './Posts.css';
import PostPreview from './PostPreview/PostPreview';
import Loader from '../Loader/Loader';


export default class Posts extends Component {
    state = {
        posts: [],
        hasLoaded: false,
        // the first page to be loaded
        nextPage: 1 
    }

    componentDidMount() {
        axios.get(`/wp-json/wp/v2/posts?post_type=post&count=10&page=${this.state.nextPage}`)
            .then(res => this.setState({
                posts: res.data,
                hasLoaded: true,
            }))
            .catch(e => console.log(e));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.nextPage !== this.state.nextPage) {
            axios.get(`/wp-json/wp/v2/posts?post_type=post&count=10&page=${this.state.nextPage}`)
                .then(res => this.setState({
                    posts: [...this.state.posts, ...res.data],
                    hasLoaded: true,
                }))
                .catch(e => console.log(e));
        }
    }

    // Change the next page to be loaded on click
    loadMoreOnClick = () => { this.setState({ nextPage: this.state.nextPage + 1 }) }

    render() {
        const { posts, hasLoaded } = this.state;
        return (
            <div className="posts">
                {hasLoaded ?
                    <Fragment>
                        {posts.map(p => (
                            <PostPreview
                                key={p.id}
                                postId={p.id}
                                title={p.title.rendered}
                                excerpt={p.excerpt.rendered}
                                thumbnail={p.jetpack_featured_media_url}
                            />
                        ))}
                        <button onClick={this.loadMoreOnClick}> Load More </button>
                    </Fragment> :
                    <Loader />
                }
            </div>
        );
    }
}