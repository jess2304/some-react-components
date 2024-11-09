import React, { useState } from "react";
import { createPortal } from "react-dom";
import ContenuModal from "./ContenuModal";
export default function FenetreModale() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="block mx-auto p-2 bg-slate-200 rounded"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Ouvrir la fenêtre modale
      </button>
      {showModal && createPortal(<ContenuModal closeModal={()=>setShowModal(false)} />, document.body)}
    </div>
  );
}
