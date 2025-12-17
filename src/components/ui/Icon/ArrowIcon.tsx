import React from "react";
import type { IconProps } from "./icon-props";

const ArrowIcon :React.FC<IconProps> = ({
  size = 14,
  color = "currentColor",
  strokeWidth = 2,
  className = ""
}) => {
  const titleId = "arrow-icon-title";
  return (
    <svg
      width={size}
      height={(size * 8) / 14}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title id={titleId}>Arrow Icon</title>
      <path
        d="M13 7L7 1L1 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;