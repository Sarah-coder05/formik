import React from "react";
import { Field, ErrorMessage } from "formik";

const FormTextArea = ({ label, name, ...rest }) => (
  <div className="form-textarea">
    <label htmlFor={name}>{label}</label>
    <Field as="textarea" id={name} name={name} {...rest} />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

export default FormTextArea;
