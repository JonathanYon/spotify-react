import { Component } from "react";
import "../Styles/sidebar.css";

export default class SideBar extends Component {
  state = {};

  render() {
    return (
      <div className="side-bar d-flex myWidth ml-n3">
        <div className="row">
          <div className="col-12">
            <div className="logo ml-4">
              <svg
                viewBox="0 0 1134 340"
                className="spotify-logo--text mt-4"
                id="logo"
              >
                <title>Spotify</title>
                <path
                  className="currentColor"
                  d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                ></path>
              </svg>
            </div>

            <section className="top mt-3 ml-4">
              <div className="row">
                <div className="col-12 d-flex align-items-center pb-3 put-color">
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <h6 className="d-flex pl-3 mb-0">Home</h6>
                  </div>
                </div>
                <div className="col-12 search d-flex align-items-center pb-3 put-color">
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <div className="d-flex">
                    <h6 className="d-flex pl-3 mb-0">Search</h6>
                  </div>
                </div>
                <div className="col-12 library d-flex align-items-center pb-3 put-color">
                  <div className="d-flex">
                    <svg
                      viewBox="0 0 512 512"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      id="library-icon"
                    >
                      <path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"></path>
                    </svg>
                  </div>
                  <div className="d-flex">
                    <h6 className="pl-3 mb-0">Your Library</h6>
                  </div>
                </div>
              </div>
            </section>

            <section className="middle mt-5 ml-4">
              <div className="d-flex create align-items-center put-color">
                <div
                  onclick="addPlaylist()"
                  className="border d-flex btn-create mysecond"
                  //   style="background-color: #b6b6b6"
                >
                  <div className="plus-btn"></div>
                </div>

                <div className="d-flex">
                  <h6 className="pl-3 mb-0">Create Playlist</h6>
                </div>
              </div>
              <div className="d-flex liked align-items-center pb-3 pt-3 put-color">
                <div className="liked-songs">
                  <svg
                    role="img"
                    height="14"
                    width="23"
                    viewBox="0 0 16 22"
                    className="Svg-ulyrgf-0 ghlXvf"
                  >
                    <path fill="none" d="M0 0h16v16H0z"></path>
                    <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
                  </svg>
                </div>

                <div className="d-flex">
                  <h6 className="pl-3 mb-0">Liked Songs</h6>
                </div>
              </div>

              <div className="mr-3">
                <div className="border-bottom"></div>
              </div>
            </section>
            <section className="playlist mt-4 ml-4">
              <div className="added-playlist">
                <ul className="list-unstyled text-white-50" id="add-list">
                  <li></li>
                </ul>
              </div>
            </section>
            <section className="ml-4">
              <footer>
                <div className="d-flex align-items-center pt-3 put-color">
                  <div className="pb-3 footer-logo d-flex">
                    <svg
                      className="color-svg"
                      role="img"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                      className="Svg-ulyrgf-0 ghlXvf"
                    >
                      <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm5.366 15.857a.955.955 0 01-1.302.367 11.409 11.409 0 00-4.451-1.402 11.443 11.443 0 00-4.653.482.957.957 0 01-.582-1.823 13.32 13.32 0 015.429-.563c1.843.188 3.59.738 5.193 1.636.46.259.624.842.366 1.303zm1.318-3.341a.957.957 0 01-1.29.407 14.965 14.965 0 00-5.423-1.618 14.887 14.887 0 00-5.675.505.958.958 0 01-.53-1.838 16.847 16.847 0 016.398-.571c2.153.219 4.21.833 6.114 1.825.468.244.65.822.406 1.29zm.476-2.779a.957.957 0 01-.426-.1 18.475 18.475 0 00-6.406-1.849 18.472 18.472 0 00-6.66.526.958.958 0 01-.494-1.849 20.386 20.386 0 017.346-.581c2.478.251 4.856.938 7.066 2.04a.956.956 0 01-.426 1.813z"></path>
                    </svg>
                  </div>
                  <div className="d-flex">
                    <h6 className="mb-3 pl-1">Upgrade to premium</h6>
                  </div>
                </div>
                <div
                  className="position-relative show-album d-none mythird"
                  //   style="height: 218px"
                >
                  <div className="under-upgrade">
                    <img
                      src="./img/drake.png"
                      className="under-premium"
                      alt=""
                    />
                    <div className="photo-play-two">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
