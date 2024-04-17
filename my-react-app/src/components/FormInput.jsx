import React from "react";
import { Field, ErrorMessage } from "formik";

const FormInput = ({ label, name, type, ...rest }) => (
  <div className="form-input">
    <label htmlFor={name}>{label}</label>
    <Field type={type} id={name} name={name} {...rest} />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

export default FormInput;
