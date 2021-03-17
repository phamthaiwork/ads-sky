import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="col-md-12">
      <nav className="navbar navbar-expand-md p-md-0">
        <div className="navbar-collapse collapse order-0 order-md-0 col-md-3">
          <Link to="/" className="nav-link navbar-brand">
            <img src={"images/logo.svg"} alt="" />
          </Link>
        </div>
        <div className="order-1 col-md-6">
          <ul className="navbar-nav navbar-collapse collapse d-flex justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Flow Ads &nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/check-content" className="nav-link">
                Check Content &nbsp;
              </Link>
            </li>
            <li className>
              <Link to="/check-discount" className="nav-link">
                Check 20% &nbsp;
              </Link>
            </li>
            <li className>
              <Link to="/ads-account" className="nav-link">
                Ads Account &nbsp;
              </Link>
            </li>
            <li className>
              <Link to="/user-insights" className="nav-link">
                User Insights &nbsp;
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse order-2 col-md-3">
          <div className="dropdown ml-auto d-flex">
            <img className="mr-3" src={"images/iconSetting.svg"} alt="" />
            <img
              className="pr-4"
              style={{ borderRight: "1px solid #F6F6FB" }}
              src={"images/iconNotify.svg"}
              alt=""
            />
            <div className="user--name ml-4">T</div>
            <button
              className="user-avatar--button"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="user-avatar--image"
                alt=""
              />
            </button>
            <div
              style={{ right: "10%", left: "auto" }}
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item">Action</a>
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">Something else here</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
