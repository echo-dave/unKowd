import React from "react";
import axios from "axios";
import Post from "../components/Post";
import Event from "../components/Event";
import Postform from "../components/PostForm";
import authenticatedAxios from "../utils/AuthenticatedAxios";
import EventMap from "../components/Map";
import socketIOClient from "socket.io-client";
import EventForm from "../components/EventForm";

class Viewer extends React.Component {
  state = {
    posts: [],
    events: []
  };

  componentDidMount() {
    this.getPosts();
    this.getEvents();
    const socket = socketIOClient();
    // socket.on("new post", data => console.log(data));

    socket.on("new post", post => {
      console.log(post);
      this.setState({
        posts: [post, ...this.state.posts]
      });
    });

    socket.on("new event", event => {
      console.log(event);
      this.setState({
        events: [event, ...this.state.events]
      });
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  getPosts = () => {
    axios
      .get("/api/posts")
      .then(res => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  };

  getEvents = () => {
    axios
      .get("/api/events")
      .then(res => {
        this.setState({ events: res.data });
        console.log(this.state.events);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container main">
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1 id="title">UnKnowd</h1>
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start"></div>
          </div>
        </nav>
        <div className="columns">
          <div className="column posts">
            {this.state.events.map(event => (
              <Event key={event._id} eventData={event} />
            ))}
          </div>
          <div className="column events">
            <EventMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Viewer;
