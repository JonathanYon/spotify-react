import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import "../Styles/index.css";
import { IconName } from "react-icons/fa";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import BottomBar from "./BottomBar";

export default class Home extends Component {
  state = {
    album: [],
    input: "",
  };

  handleSearch = () => {};

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=drake",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ0Y2I5NThiZTkxNjAwMTUwN2Y4NzkiLCJpYXQiOjE2MzE4OTg1MTcsImV4cCI6MTYzMzEwODExN30.maiwEWUdQ9QhdvEZrhFvGl37dIUy8a7TnJin1GoqlkM",
          },
        }
      );
      const res = await response.json();
      this.setState({
        album: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onkeydown="userInput(event)"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onclick="fetchData()"
          >
            Search
          </button>
        </form>

        <Container>
          <Row className="px-3 manual-query" id="card-row">
            {this.state.album.map((card) => (
              <Col sm={3} className="pl-0">
                <SingleCard album={card} key={card.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
