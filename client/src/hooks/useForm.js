// write your custom hook here to control your checkout form
import React, { useState } from 'react';

export const useForm = (key, initialValues) => {

  const [values, setValues] = useState(key, initialValues)

  const handleChanges = e => {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
  }

  return [values, handleChanges, handleSubmit];
}