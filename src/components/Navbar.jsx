import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <h1>Logo</h1>
          <form className="search-box">
            <span></span>
            <input type="text" placeholder="Search" />
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
