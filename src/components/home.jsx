import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";
import "../Styles/index.css";
import { IconName } from "react-icons/fa";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

export default class Home extends Component {
  state = {
    album: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=drake",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjBjNGIzNTgxNzAwMTVjMjI3MGQiLCJpYXQiOjE2MjU3NDgzNzQsImV4cCI6MTYyNjk1Nzk3NH0.BydDaakd8oh2658A1B7CI3-gjsU729gWFgfbKupLjFc",
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
      //   <Container fluid>
      <>
        <SideBar />
        <Container className="mr-n5">
          <TopNav />
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
          <div className="row px-3 manual-query ">
            {this.state.album.map((card) => (
              <div sm={3} key={card.id} className="pl-0">
                <SingleCard album={card} />
              </div>
            ))}
          </div>
        </Container>
      </>
      //   </Container>
    );
  }
}
