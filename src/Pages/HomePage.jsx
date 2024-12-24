import React from "react";
import Main from "src/Components/Template/Main";
import SideBar from "src/Components/Template/SideBar";

const style = { display: "flex" };

function HomePage() {
  return (
    <div style={style}>
      <SideBar />
      <Main />
    </div>
  );
}

export default HomePage;
