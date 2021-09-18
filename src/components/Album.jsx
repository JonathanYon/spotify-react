import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "../Styles/album.css";

const Album = (props) => {
  const [song, setSong] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${props.match.params.albumId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ0Y2I5NThiZTkxNjAwMTUwN2Y4NzkiLCJpYXQiOjE2MzE4OTg1MTcsImV4cCI6MTYzMzEwODExN30.maiwEWUdQ9QhdvEZrhFvGl37dIUy8a7TnJin1GoqlkM",
            },
          }
        );
        const res = await response.json();
        console.log(res);
        setSong(res);
        setTracks(res.tracks.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(props.match.params.albumId);
    console.log(props);
  }, []);
  console.log(song);
  console.log("tracks", tracks);
  return (
    <>
      <Container fluid>
        <Row className="big-row">
          <Col className="pr-0">
            <Jumbotron fluid className="pb-3">
              <Container fluid className="ml-3 mt-3 d-flex album-cover">
                <div>
                  <img
                    className="main-image"
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src={song.cover_medium}
                    alt="Top Throwbacks of 2020"
                  />
                </div>
                <div className="main-info d-inline-block pl-4 pt-5">
                  <h6 className="d-inline-block" style={{ color: "white" }}>
                    Playlist
                  </h6>
                  <h1 className="display-4 Throwbacks">
                    <strong>{song.title}</strong>
                  </h1>
                  <h6 className="jumbo-words-under">
                    <small>
                      The most-streamed classNameics and songs with comeback
                      moments in 2020. Cover: Fleetwood Mac
                    </small>
                  </h6>
                  <div className="d-flex d-inline">
                    <h6 className="a-changes-jumbo">Spotify</h6>

                    <small className="pl-3 jumbo-words">
                      <li>59,582 likes</li>
                    </small>
                    <small className="pl-3 jumbo-words">
                      <li>52 songs, 3 hr 30 min</li>
                    </small>
                  </div>
                </div>
              </Container>
            </Jumbotron>
            <Col className="d-flex align-items-center mt-4 ml-3">
              <div className="play-bottom position-relative">
                <div className="play-button-two"></div>
              </div>
              <div className="px-3 svg-under">
                <svg
                  role="img"
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  class="Svg-ulyrgf-0 ghlXvf"
                >
                  <path d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z"></path>
                </svg>
              </div>
              <div className="three-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container className="container-songs mt-5">
        <Row className="song-info pt-1">
          <Col className="d-flex" sm={4}>
            <div className="style-menu-sticy">#</div>
            <p
              className="hide-num mb-2 padding-list"
              style={{ width: "10px" }}
            ></p>
            <div className="pl-3 style-menu-sticy">TITLE</div>
          </Col>
          <Col className="albums-align style-menu-sticy" sm={3}>
            SONG
          </Col>
          <Col className="albums-align style-menu-sticy" sm={3}>
            ALBUM NAME
          </Col>
          <Col className="pl-4 d-flex align-items-center" sm={2}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                class="style-menu-sticy"
                d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
                fill="currentColor"
              ></path>
            </svg>
          </Col>
          <Col sm={11}></Col>
          <Col sm={1}></Col>
        </Row>
        {tracks.map((track, i) => (
          <Row className="ml-3 mr-4 pt-1 mb-2">
            <Col className="padding-img d-flex pt-1 pl-5" sm={4}>
              <div className="d-flex position-relative play-button-list num-icon">
                <audio src=""></audio>
                <p
                  className="hide-num mb-2 padding-list"
                  style={{ width: "10px" }}
                >
                  {i + 1}
                </p>
              </div>
              <div className="imgg mx-4">
                <img className="img-thumb" src={song.cover_small} alt="" />
                <p className="padding-list album-names mb-lg-2"></p>
              </div>
            </Col>
            <Col className="album-align pt-2" sm={3}>
              {track.title}
            </Col>
            <Col className="added-align pt-2" sm={3}>
              {song.title}
            </Col>
            <Col className="d-flex" sm={2}>
              <div className="heart d-flex text-white-50">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  viewBox="0 0 16 16"
                  class="Svg-ulyrgf-0 ghlXvf"
                >
                  <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
                </svg>
              </div>
              <div className="d-flex align-items-center">
                <p className="song-time mb-lg-n1 d-md-block d-sm-none text-white-50 pr-3 pb-2">
                  {Math.floor(track.duration / 60)}:
                  {Math.floor(track.duration % 60)}
                </p>
                <div className="dots text-white"></div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
export default Album;

/*

(
    <>
      <div className="container-fluid pl-0">
        <div className="row big-row">
          <div className="col pr-0">
            <div className="jumbotron jumbotron-fluid pb-3">
              <div className="container-fluid ml-3 mt-3 d-flex album-cover">
                <div>
                  <img
                    className="main-image"
                    aria-hidden="false"
                    draggable="false"
                    loading="eager"
                    src={song.cover_medium}
                    alt="Top Throwbacks of 2020"
                  />
                </div>
                <div className="main-info d-inline-block pl-4 pt-5">
                  <h6 className="d-inline-block" style={{ color: "white" }}>
                    Playlist
                  </h6>
                  <h1 className="display-4 Throwbacks">
                    <strong>{song.title}</strong>
                  </h1>
                  <h6 className="jumbo-words-under">
                    <small>
                      The most-streamed classNameics and songs with comeback
                      moments in 2020. Cover: Fleetwood Mac
                    </small>
                  </h6>
                  <div className="d-flex d-inline">
                    <h6 className="a-changes-jumbo">Spotify</h6>

                    <small className="pl-3 jumbo-words">
                      <li>59,582 likes</li>
                    </small>
                    <small className="pl-3 jumbo-words">
                      <li>52 songs, 3 hr 30 min</li>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="all-songs">
        <div className="container-songs mt-5">
          <div className="row rowz ml-3 mr-4 pt-1 mb-2">
            {tracks.map((son, i) => (
              <>
                <div className="col-4 padding-img d-flex pt-1 pl-5">
                  <div
                    className="num-icon d-flex position-relative play-button-list"
                    // onclick="playSong()"
                  >
                    <audio src="./audios/Ed_Sheeran_-_Galway_Girl_Audio_-_128K_MP3.mp3"></audio>
                    <p
                      className="hide-num mb-2 padding-list"
                      style={{ width: "10px" }}
                    >
                      {i + 1}
                    </p>
                  </div>
                  <div className="imgg mx-4"></div>
                </div>
                <div className="col-3 albums-align pt-2">{son.title}</div>
                <div className="col-3 added-align pt-2">DATE ADDED</div>
                <div className="col-2 d-flex">
                  <div className="heart d-flex text-white-50">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      className="Svg-ulyrgf-0 ghlXvf"
                    >
                      <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
                    </svg>
                  </div>
                  <div className="d-flex align-items-center">
                    <p
                      className="
                      song-time
                      mb-lg-n1
                      d-md-block d-sm-none
                      text-white-50
                      pr-3
                      pb-2
                    "
                    >
                      {Math.floor(son.duration / 60)}:
                      {Math.floor(son.duration % 60)}
                    </p>
                    <div className="dots text-white">...</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
 
*/
