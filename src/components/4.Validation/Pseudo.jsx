import React from "react";

export default function Pseudo({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="userName" className="text-slate-50">
        Pseudo (3-64 caractères)
      </label>
      <input
        type="text"
        id="userName"
        className="rounded w-full p-1 mt-2"
        value={inputsStates.pseudo}
        onChange={(e) =>
          setInputsStates({ ...inputsStates, pseudo: e.target.value })
        }
      />
      {showValidation.pseudo && (
        <p className="text-red-400 font-semibold">
          votre pseudo doit contenir entre 3 et 64 caractères !
        </p>
      )}
    </>
  );
}
