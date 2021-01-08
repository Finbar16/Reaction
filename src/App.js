import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
function Header() {
  return (
    <header>
      <h1>Hello World</h1>
      <Nav />
    </header>
  );
}

export default function App() {
  return <Header />;
}
