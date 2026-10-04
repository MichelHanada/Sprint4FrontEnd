import Container from "./Container.jsx";

export default function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="pt-16 pb-14 text-center md:pt-24 md:pb-20">
      <Container>
        <div className="mx-auto grid max-w-3xl justify-items-center gap-6">
          <p className="eyebrow">Resenha ON · JOVI Camera Challenge 2026</p>
          <h1
            id="hero-titulo"
            className="text-[length:clamp(2.2rem,6vw,3.8rem)] leading-[1.05] font-semibold"
          >
            A câmera que <em className="text-brand not-italic">lê, entende</em> e organiza a rotina do estudante.
          </h1>
          <p className="max-w-[52ch] text-[1.08rem] text-muted">
            Resenha ON é um modo de câmera para os smartphones JOVI que transforma quadros, slides e anotações em texto digital pesquisável, na mesma velocidade de uma foto.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="#solucao" className="btn">
              Ver a solução
            </a>
            <a href="#galeria" className="btn btn-ghost">
              Ver protótipo
            </a>
          </div>
        </div>

        <div
          role="img"
          aria-label="Ilustração do visor da câmera no Modo Estudo, com o reconhecimento de texto ativo"
          className="relative mx-auto mt-14 grid aspect-[3/4] w-full max-w-[300px] place-items-center overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_60px_rgba(11,14,26,0.25)] md:max-w-[340px]"
        >
          <span className="absolute top-5 left-5 font-mono text-[0.7rem] text-white/80">RESENHA ON</span>
          <div className="grid size-[170px] place-items-center rounded-full border-2 border-signal motion-safe:animate-pulse-ring md:size-[190px]">
            <span className="font-mono text-[0.85rem] tracking-[0.2em] text-white">OCR</span>
          </div>
          <span className="absolute right-5 bottom-5 font-mono text-[0.7rem] text-white/80">MODO ESTUDO</span>
        </div>
      </Container>
    </section>
  );
}
