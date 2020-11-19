import React from "react";
import "./Home.css";

import {
  Footer,
  Header,
  MprjDigital,
  NavBar,
  Partners,
  Products,
  Repos
} from "../../components";

export default function Home() {
  return (
    <div className="home-outer">
      <Header />
      <NavBar />
      <MprjDigital />
      <Partners />
      <Products />
      <Repos />
      <Footer />
    </div>
  );
}
