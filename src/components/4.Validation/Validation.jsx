import { useState } from "react";
import Pseudo from "./Pseudo";
import Password from "./Password";
import Confirmation from "./Confirmation";
export default function Validation() {
  const [inputsStates, setInputsStates] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationCheck()) console.log("Envoi du formulaire");
  };

  function validationCheck() {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };

    if (inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }

    if (inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if (inputsStates.password !== inputsStates.passwordConfirmation) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      areValid.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }

    return Object.values(areValid).every((value) => value);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto border p-10 rounded"
    >
      <p className="text-slate-100 text-xl mb-6">
        Créez votre pseudo et votre mot de passe
      </p>

      <Pseudo
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />
      <Password
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />
      <Confirmation
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />

      <button
        onSubmit={handleSubmit}
        className="mt-10 bg-slate-100 px-4 py-2 rounded"
      >
        Valider
      </button>
    </form>
  );
}
