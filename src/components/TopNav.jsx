import { Component } from "react";
import "../Styles/index.css";

export default class TopNav extends Component {
  state = {};

  render() {
    return (
      <div
        className="
              row
              pt-3
              pb-3
              px-3
              justify-content-between
              navrow
              sticky-top
            "
      >
        <div className="btn-nav d-flex pl-4">
          <div className="buttom-nav-left">
            <svg
              role="img"
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="
                    Svg-sc-1usfroi-0
                    kcaoHR
                    _6fe5d5efc9b4a07d5c424071ac7cdacb-scss
                  "
            >
              <polyline
                points="16 4 7 12 16 20"
                fill="none"
                stroke="#ffffff"
              ></polyline>
            </svg>
          </div>
          <div className="buttom-nav-right ml-3">
            <svg
              role="img"
              focusable="false"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="
                    Svg-sc-1usfroi-0
                    kcaoHR
                    _6fe5d5efc9b4a07d5c424071ac7cdacb-scss
                  "
            >
              <polyline
                points="8 4 17 12 8 20"
                fill="none"
                stroke="#ffffff"
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="buttom-avatar-nav">
          <div className="avatar-nav d-flex justify-content-between pb-1">
            <div className="pl-1">
              <img
                src="./assets/yonatan.jpg"
                className="img-fluid img-avatar rounded-circle"
                alt=""
              />
            </div>
            <div>
              <span>Yonatan Hagos</span>
            </div>
            <div className="pr-2">
              <i className="bi bi-caret-down-fill"></i>
            </div>
            <div className="account-avatar">
              <div className="p-1 d-flex menu-avatar">
                <div
                  className="
                        d-flex
                        btw-menu-avatar
                        align-items-center
                        hide-over
                      "
                >
                  <p className="mb-0 py-2">Account</p>
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    className="Svg-ulyrgf-0 ghlXvf"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hide-over">
                  <p className="mb-0 py-2">Profile</p>
                </div>
                <div
                  className="
                        d-flex
                        btw-menu-avatar
                        align-items-center
                        hide-over
                      "
                >
                  <p className="mb-0 py-2">Go to Premium</p>
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    className="Svg-ulyrgf-0 ghlXvf"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hide-over">
                  <p className="mb-0 py-2">
                    <a href="./login.html" className="a-changes-menu">
                      Log out
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
