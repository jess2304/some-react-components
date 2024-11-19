import Home from "./views/Home";
import Fruity from "./views/Fruity";
import Navbar from "./components/3.Coder-une-navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <BrowserRouter>
        <header className="bg-slate-800 shadow-lg">
          <Navbar />
        </header>
        <main className="flex-grow-1 pt-10">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fruity" element={<Fruity />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
      <footer className="fixed bottom-0 w-full bg-slate-800 text-slate-300 py-1">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Divers Composants - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
