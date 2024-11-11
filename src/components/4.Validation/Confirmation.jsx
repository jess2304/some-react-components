import React from 'react'

export default function Confirmation() {
  return (
    <>
      <label htmlFor='passwordConfirmation' className="text-slate-50 inline-block mt-5">
        Confirmation du mot de passe
      </label>
      <input type="text" id="passwordConfirmation" className="rounded w-full p-1 mt-2" />
    </>
  )
}
