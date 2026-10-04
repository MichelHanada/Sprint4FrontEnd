import { equipe } from "../data/conteudo.js";
import Container from "./Container.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Equipe() {
  return (
    <section id="equipe" aria-labelledby="equipe-titulo" className="py-16 text-center md:py-24">
      <Container>
        <SectionHead
          eyebrow="Nossa Equipe — Resenha ON"
          id="equipe-titulo"
          titulo="Quem constrói a Resenha ON."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {equipe.map((pessoa) => (
            <article
              key={pessoa.rm}
              className="grid justify-items-center gap-1 rounded-card border border-t-[3px] border-line border-t-signal bg-white px-5 py-8"
            >
              <span
                aria-hidden="true"
                className="mb-3 grid size-16 place-items-center rounded-full bg-ink font-display text-lg font-semibold text-signal"
              >
                {pessoa.iniciais}
              </span>
              <h3 className="text-[0.98rem] font-semibold">{pessoa.nome}</h3>
              <p className="mt-1 font-mono text-[0.72rem] text-brand">{pessoa.funcao}</p>
              <p className="text-[0.8rem] text-muted">{pessoa.rm}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
