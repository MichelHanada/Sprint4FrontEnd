export default function SectionHead({ eyebrow, titulo, id, claro = false, children }) {
  return (
    <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
      <p className={claro ? "eyebrow eyebrow-claro" : "eyebrow"}>{eyebrow}</p>
      <h2
        id={id}
        className="text-[length:clamp(1.7rem,3.6vw,2.4rem)] leading-[1.15] font-semibold"
      >
        {titulo}
      </h2>
      {children}
    </div>
  );
}
