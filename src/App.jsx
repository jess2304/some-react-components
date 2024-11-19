import FenetreModale from "./components/1.Créer-une-fenêtre-modale-avec-un-portal/FenetreModale";
import SystemeOnglets from "./components/2.Créer-un-systeme-d-onglets/SystemeOnglets";
import Navbar from "./components/3.Coder-une-navbar/Navbar";
import Validation from "./components/4.Validation/Validation";

function App() {
  return (
    <div className="h-full max-h-full w-full max-w-full flex flex-col bg-slate-700">
      <header className="bg-slate-800 shadow-lg">
        <Navbar />
      </header>
      <main className="flex-grow-1 pt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-4">
            <FenetreModale />
            <SystemeOnglets />
            <Validation />
          </div>
        </div>
      </main>
      <footer className="bg-slate-800 text-slate-300 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Divers Composants - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
