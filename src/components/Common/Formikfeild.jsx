import React from "react";
import { ErrorMessage } from "formik";
import { Input } from "reactstrap";

export function formickTextField({
  placeholder,
  max,
  type,
  field,
  disabled,
  className,
}) {
  return (
    <div>
      <Input
      type={type}
        placeholder={placeholder}
        max={max}
        className={className}
        name={field.name}
        {...field}
        disabled={disabled}
      />
      <div className="text-red-600">
      <ErrorMessage name={field.name}  />
      </div>
    </div>
  );
}

export function formickSelectField({
  field,
  options,
  placeholder,
  type,
  disabled,
  className,
}) {
  return (
    <div>
      <Input
        name={field.name}
        className={className}
        type={type}
        disabled={disabled}
        {...field}
      >
        <option value="0">{placeholder}</option>
        {options}
      </Input>
      <ErrorMessage className="text-red-600" name={field.name} />
    </div>
  );
}
