import React, { useState } from "react";

const FormContext = React.createContext({
  formData: {
    name: "",
    language: "",
  },
  nameHandler: (event) => {},
  languageHandler: (event) => {},
  submitForm: (closeModal) => {},
});

export const FormContextProvider = (props) => {
  const [nameText, setNameText] = useState("");
  const [languageText, setLanguageText] = useState("");

  const nameChangeHandler = (event) => {
    setNameText(event.target.value);
  };

  const languageChangeHandler = (event) => {
    console.log(event.target.value);
    setLanguageText(event.target.value);
  };

  const submitFormHandler = (closeModal) => {
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
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
