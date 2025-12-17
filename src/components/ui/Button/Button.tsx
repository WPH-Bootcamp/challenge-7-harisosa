import React, { type PropsWithChildren, type ReactNode } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  className: string;
  ariaLabel: string;
  children?: ReactNode
}


const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, className, ariaLabel, children } = props;
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
};

export default Button;
