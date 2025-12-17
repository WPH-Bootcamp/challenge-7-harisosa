import React from "react";
import "./ServiceCard.css";
import type { Service } from "../../../types";

interface ServiceCardProps{
    item : Service;
}

const ServiceCard: React.FC<ServiceCardProps> =  ({ item }) => {
  return (
    <div className="service-card">
      <img
        src={item.iconUrl}
        alt={item.iconAlt}
        className="service-card-icon"
      />

      <h3 className="service-card-title">{item.title}</h3>

      <p className="service-card-desc">{item.description}</p>
    </div>
  );
}

export default ServiceCard;
