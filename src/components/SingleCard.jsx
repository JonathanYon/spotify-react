import { Component } from "react";
import { Card } from "react-bootstrap";
import "../Styles/index.css";
import { IconName } from "react-icons/fa";

export default class SingleCard extends Component {
  state = {};
  render() {
    return (
      <div class="card h-100 bgcard mr-2">
        <div className="position-relative">
          <img
            src={this.props.album.album.cover_medium}
            className="card-img-top img-fluid rounded py-3 px-2"
            alt="cover album"
          />
          <div className="play"></div>
        </div>
        <div className="card-body px-2 pt-0">
          <h5 className="card-title mb-1 text-white">
            {this.props.album.title}
          </h5>
          <p className="card-text text-white-50">
            {this.props.album.artist.name}
          </p>
        </div>
      </div>
    );
  }
}
