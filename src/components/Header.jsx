import { useState } from "react";
import { links } from "../data/conteudo.js";
import Container from "./Container.jsx";

const linkClasses =
  "relative py-1 after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-signal after:transition-[width] after:duration-300 hover:after:w-full";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-4">
        <a href="#topo" onClick={fechar} className="font-display text-lg font-bold">
          Resenha<span className="text-brand">ON</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden justify-center lg:flex">
          <ul className="flex gap-8 text-[0.92rem] font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses}>
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center justify-self-end">
          <a href="#contato" className="btn hidden lg:inline-flex">
            Falar com o time
          </a>
          <button
            type="button"
            className="border border-ink px-3 py-2 font-mono text-[0.8rem] lg:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            onClick={() => setAberto((valor) => !valor)}
          >
            {aberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </Container>

      {aberto && (
        <nav id="menu-mobile" aria-label="Menu de navegação" className="border-t border-line lg:hidden">
          <Container>
            <ul className="grid gap-1 py-4 text-center">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={fechar} className="block py-3 text-[0.95rem] font-medium">
                    {link.rotulo}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contato" onClick={fechar} className="btn w-full">
                  Falar com o time
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
