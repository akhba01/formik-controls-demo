import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "M", value: "" },
    { key: "F", value: "" },
    { key: "Other", value: "" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="description"
            name="description"
          />
          <FormikControl
            control="select"
            label="selectOption"
            name="selectOption"
            options={dropdownOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
