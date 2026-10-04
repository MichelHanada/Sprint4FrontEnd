import { useState } from "react";
import { passos } from "../data/conteudo.js";
import Container from "./Container.jsx";
import SectionHead from "./SectionHead.jsx";
import { telas } from "./TelasGaleria.jsx";

const numero = (indice) => String(indice + 1).padStart(2, "0");

export default function Galeria() {
  const [atual, setAtual] = useState(0);
  const total = passos.length;
  const passo = passos[atual];
  const Tela = telas[passo.id];

  const anterior = () => setAtual((indice) => (indice - 1 + total) % total);
  const proxima = () => setAtual((indice) => (indice + 1) % total);

  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="py-16 text-center md:py-24">
      <Container>
        <SectionHead eyebrow="Galeria" id="galeria-titulo" titulo="Telas e fluxo da Resenha ON.">
          <p className="max-w-[56ch] text-muted">
            Escolha uma etapa para ver como a tela se comporta. As telas são ilustrações do protótipo.
          </p>
        </SectionHead>

        <ol className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {passos.map((item, indice) => {
            const ativo = indice === atual;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={ativo ? "step" : undefined}
                  onClick={() => setAtual(indice)}
                  className={`grid h-full w-full cursor-pointer content-start justify-items-center gap-1 rounded-card border px-3 py-3 transition-colors ${
                    ativo ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"
                  }`}
                >
                  <b className={`font-mono text-[1.1rem] font-medium ${ativo ? "text-signal" : "text-brand"}`}>
                    {numero(indice)}
                  </b>
                  <span className="text-[0.82rem] leading-snug font-medium">{item.titulo}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 grid justify-items-center gap-8">
          <div
            role="img"
            aria-label={`Tela ilustrativa do protótipo: ${passo.titulo}`}
            className="w-[250px] rounded-[2.2rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_rgba(11,14,26,0.25)] md:w-[270px]"
          >
            <div aria-hidden="true" className="relative aspect-[9/17] overflow-hidden rounded-[1.7rem]">
              <Tela />
            </div>
          </div>

          <div aria-live="polite" className="grid max-w-xl justify-items-center gap-3">
            <p className="font-mono text-[0.75rem] text-brand">
              {numero(atual)} / {numero(total - 1)}
            </p>
            <h3 className="text-xl font-semibold">{passo.titulo}</h3>
            <p className="text-muted">{passo.descricao}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" className="btn btn-ghost" onClick={anterior}>
              Anterior
            </button>
            <button type="button" className="btn" onClick={proxima}>
              Próxima
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
