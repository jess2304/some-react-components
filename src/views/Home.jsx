import React from "react";
import Validation from "../components/4.Validation/Validation";
import FenetreModale from "../components/1.Créer-une-fenêtre-modale-avec-un-portal/FenetreModale";
import SystemeOnglets from "../components/2.Créer-un-systeme-d-onglets/SystemeOnglets";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <FenetreModale />
        <SystemeOnglets />
        <Validation />
      </div>
    </div>
  );
}
