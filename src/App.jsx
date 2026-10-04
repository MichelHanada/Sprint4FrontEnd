import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Solucao from "./components/Solucao.jsx";
import Publico from "./components/Publico.jsx";
import Galeria from "./components/Galeria.jsx";
import Equipe from "./components/Equipe.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <Stats />
        <Solucao />
        <Publico />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
