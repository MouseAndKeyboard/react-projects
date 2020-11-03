import React, {useState} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const Question = ({title, info}) => {
  const [open, setOpen] = useState(false);

  const expandIcon = open ? <AiOutlineMinus /> : <AiOutlinePlus />;
  const infoContent = open ? <p>{info}</p> : <></>;

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setOpen(!open)}>
          {expandIcon}
        </button>
      </header>
      {infoContent}
    </div>
  );
};

export default Question;
