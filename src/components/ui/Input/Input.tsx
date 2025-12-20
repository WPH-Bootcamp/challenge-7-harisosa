import React from "react";
import type { InputProps } from "./input-props";
import "./Input.css";

const Input: React.FC<InputProps> = (props) => {
  const { label, type = "text", name, value, onChange, placeholder, required, rows } = props;

   if (props.type === "textarea") {
    return (
      <div className="form-field">
        <label className="form-label">{props.label}</label>
        <textarea
          rows={rows ?? 5}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="form-textarea"
        />
      </div>
    );
  }

  return <div className="form-field">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}

      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>;
};

export default Input;
