import React from "react";
import { Formik, Form } from "formik";
import "./second.css";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormRadioGroup from "./FormRadioGroup";
import FormTextArea from "./FormTextArea";

const initialValues = {
  fullname: "",
  address: "",
  birthdate: "",
  gender: "",
  number: "",
  email: "",
  company: "",
  courses: "",
  comments: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  birthdate: Yup.string().required("Required!"),
  gender: Yup.string().required("Required!"),
  number: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  company: Yup.string().required("Required!"),
  courses: Yup.string().required("Required!"),
  comments: Yup.string().optional("optional"),
});

function SecondForm() {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "na", label: "N/A" },
  ];

  const courseOptions = [
    { value: "english101", label: "English 101" },
    { value: "creativeWriting", label: "Creative Writing" },
    { value: "maths101", label: "Maths 101" },
    { value: "history202", label: "History 202" },
    { value: "english102", label: "English 102" },
    { value: "maths102", label: "Maths 102" },
    { value: "creativeWriting1", label: "Creative Writing 1" },
    { value: "history104", label: "History 104" },
    { value: "windows8", label: "Windows 8" },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="name-container">
          <FormInput label="First Name" name="firstName" type="text" />
          <FormInput label="Last Name" name="lastName" type="text" />
        </div>
        <FormInput label="Address" name="address" type="text" />
        <FormInput label="City" name="city" type="text" />
        <FormInput label="State/Province" name="province" type="text" />

        <div className="first-box">
          <FormInput label="Month" name="birthMonth" type="text" />
          <FormInput label="Day" name="birthDay" type="text" />
          <FormInput label="Year" name="birthYear" type="text" />
        </div>

        <div class="gender-options">
          <FormRadioGroup
            label="Gender"
            name="gender"
            options={genderOptions}
          />
        </div>
        <div className="address">
          <FormInput label="Phone Number" name="phoneNumber" type="text" />
        </div>

        <div className="address">
          <FormInput label="Email" name="email" type="email" />
        </div>

        <div className="address">
          <FormInput label="Company" name="company" type="text" />
        </div>

        <div className="courses">
          <FormRadioGroup
            label="Courses"
            name="courses"
            options={courseOptions}
          />
        </div>
        <div className="comments">
          <FormTextArea label="Comments" name="comments" rows="6" cols="50" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default SecondForm;
