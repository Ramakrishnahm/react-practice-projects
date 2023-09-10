import { useState } from "react";
import people from "./data";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [position, setPosition] = useState(0);
  const { name, job, image, text } = people[position];

  return (
    <article className="container">
      <h1 style={{ color: "green" }}>Fectch Data from data.js</h1>
      <h2>{name}</h2>
      <h2>{job}</h2>
      <img src={image} className="img" />
      <p>{text}</p>
      <FaChevronLeft />
      <FaChevronRight />
      <FaQuoteRight />
    </article>
  );
};

export default App;
