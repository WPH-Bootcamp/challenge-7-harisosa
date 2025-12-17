import type { PropsWithChildren } from "react";
import type React from "react";
import './CircleCard.css';

const CircleCard: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            className="card-circle">
            {children}
        </div>
    )
}

export default CircleCard;