import { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
// import "../Styles/index.css";
import "../Styles/singlecard.css";
import { IconName } from "react-icons/fa";
import { withRouter, Link } from "react-router-dom";

class SingleCard extends Component {
  state = {};
  render() {
    console.log("this props", this.props.album);
    return (
      <Card className="h-100 bg-dark">
        <div className="position-relative">
          <img
            className="card-img-top img-fluid rounded py-3 px-2"
            src={this.props.album.album.cover_medium}
          />
          <div className="play"></div>
        </div>
        <Card.Body className="px-2 pt-0">
          <Link to={`/album/${this.props.album.album.id}`}>
            <Card.Title className="mb-1 text-white">
              {this.props.album.album.title}
            </Card.Title>
          </Link>

          <Link to={`/artist/${this.props.album.artist.id}`}>
            <Card.Text className="text-white">
              {this.props.album.artist.name}
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>

      /* <Row className="justify-content-between px-3">
        <div className="d-flex"><h6 className="mt-3 h6-body">Shows to try</h6></div>
        <div className="d-flex"><h6 className="sea-all mt-3">SEE ALL</h6></div>
      </Row>
      <Row className="px-3">
      <div className="d-flex">
        <h6 className="sub-title">Podcasts we think you might like</h6>
      </div>
      </Row>
      <Row className="px-3 manual-query">
      <Col className="pl-0">
      <Card className="h-100">
      <div className="position-relative">
      <img className="card-img-top img-fluid rounded py-3 px-2" src="holder.js/100px180" />
      </div>
      <Card.Body className="px-2 pt-0">
      <Card.Title className="mb-1 text-white">Joe Rogan Experience</Card.Title>
      <Card.Text className="text-white text-white-50">Joe Rogan</Card.Text>
      </Card.Body>
      </Card>
      </Col>
      </Row> 
  
    
    */
    );
  }
}
export default withRouter(SingleCard);
