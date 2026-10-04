import { persona } from "../data/conteudo.js";
import Container from "./Container.jsx";
import SectionHead from "./SectionHead.jsx";

export default function Publico() {
  return (
    <section
      id="publico"
      aria-labelledby="publico-titulo"
      className="border-y border-line bg-white py-16 text-center md:py-24"
    >
      <Container>
        <div className="frame mx-auto mb-12 grid aspect-[16/9] w-full max-w-3xl place-items-end bg-[linear-gradient(160deg,#1E3FD6,#12237A)] md:aspect-[21/9]">
          <p className="w-full p-5 font-display text-[1.3rem] leading-tight text-white md:p-6 md:text-[1.6rem]">
            Estudantes Full-time
          </p>
        </div>

        <SectionHead
          eyebrow="Público-Alvo"
          id="publico-titulo"
          titulo="Quem concilia estudo, vida social e ambição — o tempo todo."
        />

        <ul className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {persona.map((item) => (
            <li key={item.rotulo} className="grid justify-items-center gap-2 border-t border-line px-2 py-6">
              <b className="font-mono text-[0.75rem] font-medium text-brand">{item.rotulo}</b>
              <span className="text-[0.95rem] text-muted">{item.texto}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
