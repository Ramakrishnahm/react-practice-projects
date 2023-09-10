import { useState } from "react";
import people from "./data";
import "./App.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [position, setPosition] = useState(0);
  const { name, job, image, text } = people[position];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setPosition((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setPosition((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="container">
      <h1 style={{ color: "gray" }}>Fectch Data from data.js</h1>
      <div>
        {" "}
        <span>
          {" "}
          <FaQuoteRight />
        </span>
        <img src={image} className="img" />
      </div>

      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </article>
  );
};

export default App;
