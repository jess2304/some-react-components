import React, { useState } from "react";
import { CONTENUS_ONGLETS } from "../../assets/js/constantes";
export default function SystemeOnglets() {
  const [ongletSelectionne, setOngletSelectionne] = useState(0);
  return (
    <div className="w-full min-h-[30vh] mx-auto rounded border">
      <div className="flex divide-x divide-slate-700">
        {CONTENUS_ONGLETS.map((onglet, index) => {
          return (
            <>
              <button onClick={()=>{setOngletSelectionne(index)}} className="w-full mx-auto p-2 bg-slate-200">
                Onglet {index + 1}
              </button>
            </>
          );
        })}
      </div>
      <div className="text-slate-100 p-1">
        {CONTENUS_ONGLETS[ongletSelectionne].content}
      </div>
    </div>
  );
}
