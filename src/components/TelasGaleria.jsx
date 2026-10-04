const trechos = ["w-2/3", "w-full", "w-11/12", "w-4/5", "w-3/5"];

function Linhas({ tom = "bg-white/25" }) {
  return (
    <div className="grid gap-2">
      <div className="h-2 w-1/2 rounded-sm bg-white/60" />
      {trechos.map((largura) => (
        <div key={largura} className={`h-1.5 rounded-sm ${largura} ${tom}`} />
      ))}
    </div>
  );
}

function TelaCaptura() {
  return (
    <div className="relative h-full bg-[#171c36]">
      <span className="absolute top-3 left-3 font-mono text-[8px] text-white/70">RESENHA ON</span>
      <span className="absolute top-3 right-3 font-mono text-[8px] text-signal">MODO ESTUDO</span>
      <div className="frame absolute inset-x-6 top-12 bottom-36 border border-white/20 bg-white/5 p-3">
        <Linhas />
      </div>
      <div className="absolute inset-x-0 bottom-20 flex justify-center gap-4 font-mono text-[9px] text-white/60">
        <span>Foto</span>
        <span className="text-signal">Resenha ON</span>
        <span>Vídeo</span>
      </div>
      <div className="absolute bottom-5 left-1/2 grid size-12 -translate-x-1/2 place-items-center rounded-full border-4 border-white">
        <span className="size-7 rounded-full bg-signal" />
      </div>
    </div>
  );
}

function TelaRecorte() {
  return (
    <div className="relative h-full bg-[#171c36]">
      <div className="absolute inset-x-6 top-14 bottom-40 grid place-items-center">
        <div className="relative h-full w-full bg-white/10 p-3 [transform:perspective(420px)_rotateY(-14deg)]">
          <Linhas />
          <span className="absolute -top-1 -left-1 size-2.5 bg-signal" />
          <span className="absolute -top-1 -right-1 size-2.5 bg-signal" />
          <span className="absolute -bottom-1 -left-1 size-2.5 bg-signal" />
          <span className="absolute -right-1 -bottom-1 size-2.5 bg-signal" />
        </div>
      </div>
      <span className="absolute inset-x-0 bottom-24 mx-auto w-fit rounded-full bg-signal px-3 py-1 font-mono text-[9px] font-medium text-ink">
        Perspectiva corrigida
      </span>
      <div className="absolute inset-x-5 bottom-6 grid grid-cols-2 gap-2 font-mono text-[9px]">
        <span className="rounded border border-white/30 py-2 text-center">Refazer</span>
        <span className="rounded bg-white py-2 text-center text-ink">Usar recorte</span>
      </div>
    </div>
  );
}

function TelaTexto() {
  return (
    <div className="h-full bg-paper p-4 text-ink">
      <p className="font-mono text-[8px] tracking-widest text-brand uppercase">Texto reconhecido</p>
      <h4 className="mt-2 font-display text-[13px] font-semibold">Cálculo I — Derivadas</h4>
      <div className="mt-3 grid gap-2 rounded bg-white p-3 text-[10px] leading-snug text-muted">
        <p>A derivada de f(x) mede a taxa de variação instantânea da função em cada ponto.</p>
        <p>
          <mark className="bg-signal/40 px-0.5">Regra da cadeia:</mark> (f∘g)'(x) = f'(g(x)) · g'(x)
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[9px]">
        <span className="rounded bg-brand py-2 text-center text-white">Copiar texto</span>
        <span className="rounded border border-line py-2 text-center">Editar</span>
      </div>
    </div>
  );
}

const pastas = [
  ["Cálculo I", "12 notas"],
  ["Algoritmos", "8 notas"],
  ["Física", "5 notas"],
  ["Inglês", "3 notas"],
];

function TelaNotas() {
  return (
    <div className="h-full bg-paper p-4 text-ink">
      <p className="font-mono text-[8px] tracking-widest text-brand uppercase">Notas por disciplina</p>
      <ul className="mt-3 grid gap-2">
        {pastas.map(([nome, quantidade]) => (
          <li key={nome} className="flex items-center justify-between rounded bg-white px-3 py-2.5 text-[11px]">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-sm bg-signal" />
              {nome}
            </span>
            <span className="font-mono text-[9px] text-muted">{quantidade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const resultados = [
  ["Regra da cadeia", "Cálculo I"],
  ["Derivada de funções compostas", "Cálculo I"],
  ["Taxa de variação em gráficos", "Física"],
];

function TelaBusca() {
  return (
    <div className="h-full bg-paper p-4 text-ink">
      <div className="flex items-center gap-2 rounded border border-line bg-white px-3 py-2 text-[11px]">
        <span className="size-2.5 rounded-full border-2 border-muted" />
        <span>derivada</span>
        <span className="h-3 w-px bg-brand" />
      </div>
      <p className="mt-4 font-mono text-[8px] tracking-widest text-muted uppercase">3 resultados</p>
      <ul className="mt-2 grid gap-2">
        {resultados.map(([titulo, disciplina]) => (
          <li key={titulo} className="grid gap-1 rounded bg-white px-3 py-2.5 text-left">
            <span className="text-[11px] font-medium">{titulo}</span>
            <span className="w-fit rounded-full bg-signal/30 px-2 py-0.5 font-mono text-[8px]">{disciplina}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const destinos = [
  ["Grupo de estudos", true],
  ["App de anotações", false],
  ["E-mail", false],
];

function TelaCompartilhar() {
  return (
    <div className="relative h-full bg-[#171c36]">
      <div className="absolute inset-x-6 top-10 rounded bg-white/10 p-3">
        <Linhas />
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-t-2xl bg-paper p-4 text-ink">
        <p className="font-mono text-[8px] tracking-widest text-brand uppercase">Compartilhar nota</p>
        <ul className="mt-3 grid gap-2">
          {destinos.map(([nome, destaque]) => (
            <li key={nome} className="flex items-center justify-between rounded bg-white px-3 py-2 text-[11px]">
              <span>{nome}</span>
              <span
                className={`rounded px-2 py-1 font-mono text-[8px] ${
                  destaque ? "bg-brand text-white" : "border border-line"
                }`}
              >
                Enviar
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const telas = {
  captura: TelaCaptura,
  recorte: TelaRecorte,
  texto: TelaTexto,
  notas: TelaNotas,
  busca: TelaBusca,
  compartilhar: TelaCompartilhar,
};
