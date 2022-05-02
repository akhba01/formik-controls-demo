import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{"Select an option"}</label>
      <Field id={name} name={name} as="select" {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
