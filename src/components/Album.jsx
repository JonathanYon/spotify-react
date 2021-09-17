import { useState } from "react";
import { useEffect } from "react";
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
  }, []);
  console.log(song);
  console.log(tracks);
  return (
    <>
      <div className="container-fluid pl-0">
        <div className="row big-row">
          <div style={{ width: "210px" }}></div>

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

      <section class="all-songs">
        <div class="container-songs mt-5">
          <div class="row rowz ml-3 mr-4 pt-1 mb-2">
            {tracks.map((son, i) => (
              <>
                <div className="col-4 padding-img d-flex pt-1 pl-5">
                  <div
                    className="num-icon d-flex position-relative play-button-list"
                    onclick="playSong()"
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
};
export default Album;
