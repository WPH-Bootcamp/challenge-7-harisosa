import React from "react";
import "./Checkbox.css";
import CheckIcon from "../Icon/CheckIcon";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const id = `checkbox-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
  <label className="checkbox">
    <input
      id={id}
      className="checkbox-input"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />

    <span className="checkbox-box" aria-hidden="true">
      <CheckIcon className="checkbox-check" />
    </span>

    <span className="checkbox-label">{label}</span>
  </label>
  );
}

export default Checkbox;
