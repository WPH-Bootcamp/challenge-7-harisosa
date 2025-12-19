import React, { useState } from "react";
import "./Accordion.css";
import type { FaqItem } from "../../../types";

interface AccordionProps  {
  items: FaqItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx: number) => {
    setOpenIndex((cur) => (cur === idx ? -1 : idx));
  };

  return (
    <div className="accordion">
      {items.map((it, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div key={it.id ?? idx} className="item">
            <button
              type="button"
              className="toogle-btn"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span className="question">{it.question}</span>
              <span className="toogle-icon">{isOpen ? "−" : "+"}</span>
            </button>

            <div className={`content ${isOpen ? "is-open" : ""}`}>
              <div className="answer">{it.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
