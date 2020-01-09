import React, { Component } from "react";

class Post extends Component {
  /*  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get("/api/posts")
      .then(res => this.setState({ posts: res.data }))
      .cach(err => console.log(err));
  }; */

  render() {
    return (
      <div className="post box clearfix" data-attr={this.props._id}>
        <img alt="" className="postPhotos" src={this.props.photos} />
        <p>{this.props.msg}</p>
        <div className="username">{this.props.firstName}</div>
        <img alt="" className="userphoto" src={this.props.creatorPhoto} />
      </div>
    );
  }
}

export default Post;
