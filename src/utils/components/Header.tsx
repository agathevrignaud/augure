import React from 'react';

const Header: React.FC<{}> = React.memo(
  () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-3" href="https://www.google.com/">Augure</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.google.com/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://www.google.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://www.google.com/">Action</a>
                <a className="dropdown-item" href="https://www.google.com/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="https://www.google.com/">Something else here</a>
              </div>
            </li>
          </ul>
        </div>  
      </nav>
    );
  }
);

export default Header;