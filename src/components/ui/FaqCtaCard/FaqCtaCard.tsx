import React from "react";
import "./FaqCtaCard.css";
import Button from "../Button";

interface FaqCtaCardProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  onClick: () => void;
}

const FaqCtaCard: React.FC<FaqCtaCardProps> = (props) => {
    const { title, subtitle, image, buttonText, onClick } = props;
  return (
    <div className="faq-cta">
      <div className="faq-cta-content">
        <h3 className="faq-cta-title">{title}</h3>
        <p className="faq-cta-subtitle">{subtitle}</p>
        <img className="faq-cta-image" src={image} alt="Team Meeting" />
      </div>

      <Button ariaLabel="Book a free consultation" className="faq-cta-btn" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default FaqCtaCard;
