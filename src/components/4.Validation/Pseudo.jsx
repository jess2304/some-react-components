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
        onChange={e => setInputsStates({...inputsStates, pseudo:e.target.value})}
      />
    </>
  );
}
