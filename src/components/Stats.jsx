import { numeros } from "../data/conteudo.js";
import Container from "./Container.jsx";

export default function Stats() {
  return (
    <section aria-label="Resenha ON em números" className="bg-ink py-14 text-center text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {numeros.map((item) => (
            <div key={item.texto} className="flex flex-col-reverse items-center gap-1">
              <dt className="text-[0.85rem] text-mist">{item.texto}</dt>
              <dd className="font-display text-[2.1rem] leading-tight font-semibold text-signal">{item.valor}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
