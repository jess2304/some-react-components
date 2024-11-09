import FenetreModale from "./components/1.Créer-une-fenêtre-modale-avec-un-portal/FenetreModale"
import SystemeOnglets from "./components/2.Créer-un-systeme-d-onglets/SystemeOnglets"
function App() {
  return (
    <div className="min-h-screen bg-slate-700 pt-10 flex flex-col space-y-4">
      <FenetreModale />
      <SystemeOnglets />
    </div>
  )
}

export default App
