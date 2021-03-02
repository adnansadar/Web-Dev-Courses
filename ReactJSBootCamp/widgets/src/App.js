import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  { title: "What is react?", content: "Front-End Framework" },
  { title: "Why use react?", content: "Popular" },
  { title: "How do you use react?", content: "Creating Components" },
];

export default () => {
  return (
    <div>
      {/* <h1>Widgets App</h1> */}
      <Search />
    </div>
  );
};
