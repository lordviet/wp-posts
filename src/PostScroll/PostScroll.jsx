import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post';

export default class PostScroll extends Component {
  state = {
    posts: [],
    hasLoaded: false
  };

  // Load the first post
  componentDidMount() {
    // We use embed to have access to the author's name
    axios.get(`/wp-json/wp/v2/posts/${this.props.match.params.id}?_embed`)
      .then(res => this.setState({
        posts: [res.data],
        hasLoaded: true
      }))
      .catch(e => console.log(e));
  }

  // Get next post
  fetchMoreData = () => {
    if (this.state.hasLoaded) {
      // We use the data of the current last post to determine what the previous one is
      axios.get(`/wp-json/wp/v2/posts?_embed&per_page=1&?_embed&before=${this.state.posts[this.state.posts.length - 1].date}`)
        .then(res => this.setState({
          posts: [...this.state.posts, ...res.data]
        }))
        .catch(e => console.log(e));
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-scroll-template">
        <InfiniteScroll
          dataLength={posts.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
          {posts.map(p => (
            <Post
              title={p.title.rendered}
              authorName={p._embedded.author[0].name}
              date={p.date}
              img={p.jetpack_featured_media_url}
              content={p.content.rendered}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
