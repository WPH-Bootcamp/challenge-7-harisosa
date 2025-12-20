import React from "react";
import "./TestimoniCard.css";
import type { Testimoni } from "../../../types";

interface TestimoniCardProps{
    item: Testimoni
}

const TestimoniCard: React.FC<TestimoniCardProps> = ({ item }) => {
  const stars = item?.stars ?? 5;

  return (
    <div className="tcard">
      <div>
        <div className="tcard-quote">
          <img src={'/assets/icons/quote.svg'} alt="quate" />
        </div>

        <div className="tcard-stars" aria-label="rating">
          {Array.from({ length: stars }).map((_, s) => (
            <img key={s} src={'/assets/icons/star.svg'} alt="star" />
          ))}
        </div>

        <p className="tcard-text">“{item.text}”</p>
      </div>

      <div className="tcard-footer">
        <div>
          <p className="tcard-name">{item.name}</p>
          <p className="tcard-role">{item.role}</p>
        </div>

        <img className="tcard-avatar" src={item.avatarUrl} alt={item.name} />
      </div>
    </div>
  );
}

export default TestimoniCard;