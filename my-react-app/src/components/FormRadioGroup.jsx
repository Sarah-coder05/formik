import React from "react";
import { Field, ErrorMessage } from "formik";

const FormRadioGroup = ({ label, name, options }) => (
  <div className="form-radio-group">
    <label>{label}</label>
    <div className="radio-options">
      {options.map((option) => (
        <div key={option.value} className="radio-option">
          <Field
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

export default FormRadioGroup;
