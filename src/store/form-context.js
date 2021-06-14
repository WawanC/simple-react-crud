import React, { useState } from "react";

const FormContext = React.createContext({
  formData: {
    name: "",
    language: "",
  },
  nameHandler: (event) => {},
  languageHandler: (event) => {},
  submitForm: (closeModal) => {},
  isError: false,
  toggleError: (value) => {},
});

export const FormContextProvider = (props) => {
  const [nameText, setNameText] = useState("");
  const [languageText, setLanguageText] = useState("");
  const [error, setError] = useState(false);

  const nameChangeHandler = (event) => {
    setNameText(event.target.value);
  };

  const languageChangeHandler = (event) => {
    console.log(event.target.value);
    setLanguageText(event.target.value);
  };

  const toggleErrorHandler = (value) => {
    setError(value);
  };

  const submitFormHandler = (closeModal) => {
    if (nameText.trim().length === 0 || languageText.trim().length === 0) {
      setError(true);
      return;
    }
    console.log("submitted !");
    closeModal();
  };

  return (
    <FormContext.Provider
      value={{
        formData: {
          name: nameText,
          language: languageText,
        },
        submitForm: submitFormHandler,
        nameHandler: nameChangeHandler,
        languageHandler: languageChangeHandler,
        isError: error,
        toggleError: toggleErrorHandler,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
