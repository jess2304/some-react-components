import { useState } from "react";
import Pseudo from "./Pseudo";
import Password from "./Password";
import Confirmation from "./Confirmation";
export default function Validation() {
  const [inputsState, setInputsStates] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });
  const { showValidation, setShowValidation } = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto border p-10 rounded"
    >
      <p class="text-slate-100 text-xl mb-6">
        Créez votre pseudo et votre mot de passe
      </p>

      <Pseudo />
      <Password />
      <Confirmation />

      <button
        onSubmit={handleSubmit}
        className="mt-10 bg-slate-100 px-4 py-2 rounded"
      >
        Valider
      </button>
    </form>
  );
}
