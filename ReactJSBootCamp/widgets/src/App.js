import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "What is react?", content: "Front-End Framework" },
  { title: "Why use react?", content: "Popular" },
  { title: "How do you use react?", content: "Creating Components" },
];

const options = [
  {
    label: "A Shade of Red",
    value: "red",
  },
  {
    label: "A Shade of Green",
    value: "greed",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setselected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setselected}
        options={options}
      />
    </div>
  );
};
