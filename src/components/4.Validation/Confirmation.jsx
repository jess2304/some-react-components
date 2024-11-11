import React from "react";

export default function Confirmation({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label
        htmlFor="passwordConfirmation"
        className="text-slate-50 inline-block mt-5"
      >
        Confirmation du mot de passe
      </label>
      <input
        type="password"
        id="passwordConfirmation"
        className="rounded w-full p-1 mt-2"
        value={inputsStates.passwordConfirmation}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            passwordConfirmation: e.target.value,
          })
        }
      />
      {showValidation.passwordConfirmation && (
        <p className="text-red-400 font-semibold">
          Les mots de passes ne sont pas identiques !
        </p>
      )}
    </>
  );
}
