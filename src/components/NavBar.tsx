import { useState } from "react";

interface NavBarProps {
  heading: string;
}

function NavBar({ heading }: NavBarProps) {
  const [theme, setTheme] = useState("light");
  const [moon, setMoon] = useState("svg/moon.svg");
  const [sun, setSun] = useState("svg/brightness-high.svg");
  const [list, setList] = useState("#f8f9fa");
  const [font, setFont] = useState("black");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.getElementById("navigen")?.setAttribute("data-bs-theme", newTheme);
    setTheme(newTheme);
    const newMoon =
      moon === "svg/moon.svg" ? "svg/moon-fill.svg" : "svg/moon.svg";
    let M = document.getElementById("moon") as HTMLImageElement;
    M.src = newMoon;
    setMoon(newMoon);
    const newSun =
      sun === "svg/brightness-high.svg"
        ? "svg/brightness-high-fill.svg"
        : "svg/brightness-high.svg";
    let S = document.getElementById("sun") as HTMLImageElement;
    S.src = newSun;
    setSun(newSun);
    const newList = list === "#f8f9fa" ? "2b3035" : "#f8f9fa";
    const newFont = font === "black" ? "white" : "black";
    let color = "background-color: " + "#" + newList + "; color: " + newFont;
    document.getElementById("list-group")?.setAttribute("style", color);
    setList(newList);
    setFont(newFont);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navigen">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {heading}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <div>
                <img
                  src="svg/moon.SVG"
                  alt="moon"
                  style={{ marginTop: 12 + "px", float: "right" }}
                  id="moon"
                />
                <div
                  className="form-check form-switch"
                  style={{ float: "right" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    style={{ marginTop: 12 + "px" }}
                    id="switch"
                    onClick={toggleTheme}
                  ></input>
                </div>
                <img
                  src="svg/brightness-high.svg"
                  alt="sun"
                  style={{
                    marginTop: 12 + "px",
                    float: "right",
                    marginRight: 6 + "px",
                  }}
                  id="sun"
                />
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
