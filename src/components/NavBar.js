import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const displayLinks = links.map((link, index) => {
    return (
      <a href={`#${link}`} key={index}>
        {link}
      </a>
    );
  });

  return <nav>{displayLinks}</nav>;
}

export default NavBar;
