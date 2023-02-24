import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkAll = links.map((name) => {
    return <a key={name} href={"#"+name}>{name}</a>;
  })
  return ( 
    <nav>
     {linkAll}
    </nav>
  )
}

export default NavBar;
