import React, { useCallback, useMemo, useRef } from "react";

export default function useFormWithValidation(initialValue = {}) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const initialState = useRef(initialValue)
  const isEmailValidator = require('validator').isEmail;

  const handleChange = useCallback((evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    if (name === 'email') {
      if (isEmailValidator(value)) {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity('Что-то пошло не так...');
      }
    }

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: input.validationMessage }));
    setIsValid(input.closest("form").checkValidity());
  }, []);

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const isDirty = useMemo(() => {
    const initial = initialState.current;

    return Object.keys(values).some((key) => {
      return !initial[key] || initial[key] !== values[key]
    })
  }, [values]);

  return { values, setValues, handleChange, resetFrom, errors, isValid, isDirty };
}
