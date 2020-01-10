import React, { Component } from "react";

class Event extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    console.log(this.props.eventData);
  }

  //   getPosts = () => {
  //     axios
  //       .get("/api/events")
  //       .then(res => this.setState({ events: res.data }))
  //       .cach(err => console.log(err));
  //   };

  render() {
    const {
      title,
      img,
      description,
      date,
      creator,
      _id
    } = this.props.eventData;
    return (
      <div className="event box clearfix" data-attr={_id}>
        <h2 className="is-title is-2">{title}</h2>
        <div className="postPhotos">
          <img src={img} alt="" />
        </div>
        <p className="description">{description}</p>
        <span className="dates">{date.start}</span>
        <div className="username">{creator.firstName}</div>
        <div className="userphoto">
          <img src={creator.photo} alt="" />
        </div>
      </div>
    );
  }
}

export default Event;
