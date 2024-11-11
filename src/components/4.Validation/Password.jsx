import React from 'react'

export default function Passsword() {
  return (
    <>
      <label htmlFor='password' className="text-slate-50 inline-block mt-5">
        Mot de passe (Au moins un chiffre et 6 caractères)
      </label>
      <input type="text" id="password" className="rounded w-full p-1 mt-2" />
    </>
  )
}
