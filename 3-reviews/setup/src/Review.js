import React, {useState} from "react";
import people from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];

  const increase = () => {
    setIndex(index < people.length - 1 ? index + 1 : index);
  };
  const decrease = () => {
    setIndex(index > 0 ? index - 1 : 0);
  };
  const random = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <section className="review">
      <div className="img-container">
        <img className="person-img" src={person.image} alt={person.name} />
        <FaQuoteRight className="quote-icon" />
      </div>
      <h4 className="author">{person.name}</h4>
      <h4 className="job">{person.job}</h4>
      <p className="info">{person.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={decrease}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={increase}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        Suprise me!
      </button>
    </section>
  );
};

export default Review;
