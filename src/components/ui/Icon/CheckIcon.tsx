import React from "react";
import type { IconProps } from "./icon-props";

const CheckIcon :React.FC<IconProps> = ({
  className = ""
}) => {
  return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
        </svg>
  );
}

export default CheckIcon;