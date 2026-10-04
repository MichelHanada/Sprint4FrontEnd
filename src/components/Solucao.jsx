import { pilares } from "../data/conteudo.js";
import Container from "./Container.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Solucao() {
  return (
    <section id="solucao" aria-labelledby="solucao-titulo" className="py-16 text-center md:py-24">
      <Container>
        <SectionHead
          eyebrow="A Solução"
          id="solucao-titulo"
          titulo="Um modo de câmera dedicado a quem estuda em movimento."
        >
          <p className="max-w-[60ch] text-muted">
            Hoje a câmera do smartphone é usada quase sempre no automático. A Resenha ON cria um modo próprio, com OCR embarcado, para resolver uma dor real: registrar conteúdo de aula sem perder o ritmo da rotina.
          </p>
        </SectionHead>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((pilar, indice) => (
            <article
              key={pilar.titulo}
              className={`frame rounded-card border border-line bg-white px-7 py-8 ${
                indice === pilares.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p className="mb-3.5 font-mono text-[0.8rem] text-brand">{pilar.n}</p>
              <h3 className="mb-2.5 text-[1.15rem] font-semibold">{pilar.titulo}</h3>
              <p className="text-[0.95rem] text-muted">{pilar.texto}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
