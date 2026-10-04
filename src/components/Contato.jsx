import { useState } from "react";
import { redes } from "../data/conteudo.js";
import Container from "./Container.jsx";
import SectionHead from "./SectionHead.jsx";

const valoresIniciais = { nome: "", email: "", mensagem: "" };
const limiteMensagem = 500;

function validar({ nome, email, mensagem }) {
  const erros = {};
  if (nome.trim().length < 2) erros.nome = "Informe seu nome (mínimo de 2 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) erros.email = "Informe um e-mail válido.";
  if (mensagem.trim().length < 10) erros.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres.";
  return erros;
}

const campoClasses =
  "w-full rounded-card border bg-transparent px-4 py-3.5 text-left text-white placeholder:text-white/50";

function Campo({ id, rotulo, erro, children }) {
  return (
    <div className="grid gap-1.5 text-center">
      <label htmlFor={id} className="font-mono text-[0.75rem] text-mist">
        {rotulo}
      </label>
      {children}
      {erro && (
        <p id={`${id}-erro`} className="text-[0.82rem] text-red-300">
          {erro}
        </p>
      )}
    </div>
  );
}

export default function Contato() {
  const [valores, setValores] = useState(valoresIniciais);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(null);

  const atualizar = (evento) => {
    const { name, value } = evento.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
    if (erros[name]) setErros((anterior) => ({ ...anterior, [name]: undefined }));
  };

  const enviar = (evento) => {
    evento.preventDefault();
    const encontrados = validar(valores);
    setErros(encontrados);
    if (Object.keys(encontrados).length === 0) {
      setEnviado(valores.nome.trim());
      setValores(valoresIniciais);
    }
  };

  const propsCampo = (nome) => ({
    id: nome,
    name: nome,
    value: valores[nome],
    onChange: atualizar,
    "aria-invalid": erros[nome] ? "true" : undefined,
    "aria-describedby": erros[nome] ? `${nome}-erro` : undefined,
    className: `${campoClasses} ${erros[nome] ? "border-red-300" : "border-white/25"}`,
  });

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-ink py-16 text-center text-white md:py-24">
      <Container>
        <SectionHead eyebrow="Contato" id="contato-titulo" titulo="Quer testar a Resenha ON?" claro>
          <p className="max-w-[48ch] text-mist">
            Fale com o time para conhecer o protótipo completo e a documentação técnica da solução.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[0.8rem]">
            {redes.map((rede) => (
              <li key={rede.rotulo}>
                <a href={rede.href} className="border-b border-white/30 pb-0.5 hover:border-signal">
                  {rede.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </SectionHead>

        <div className="mx-auto mt-12 max-w-xl">
          {enviado ? (
            <div role="status" className="grid justify-items-center gap-3 rounded-card border border-signal px-6 py-10">
              <h3 className="text-xl font-semibold">Mensagem validada, {enviado}!</h3>
              <p className="text-mist">
                Seus dados estão corretos. Este formulário está em modo de demonstração, ainda sem envio a um servidor.
              </p>
              <button type="button" className="btn mt-2" onClick={() => setEnviado(null)}>
                Preencher novamente
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={enviar} className="grid gap-5">
              <Campo id="nome" rotulo="Nome" erro={erros.nome}>
                <input type="text" autoComplete="name" placeholder="Seu nome" {...propsCampo("nome")} />
              </Campo>
              <Campo id="email" rotulo="E-mail" erro={erros.email}>
                <input type="email" autoComplete="email" placeholder="voce@exemplo.com" {...propsCampo("email")} />
              </Campo>
              <Campo id="mensagem" rotulo="Mensagem" erro={erros.mensagem}>
                <textarea
                  rows={4}
                  maxLength={limiteMensagem}
                  placeholder="Como podemos ajudar?"
                  {...propsCampo("mensagem")}
                  className={`${propsCampo("mensagem").className} min-h-28 resize-y`}
                />
                <p className="font-mono text-[0.7rem] text-mist">
                  {valores.mensagem.length}/{limiteMensagem}
                </p>
              </Campo>
              <button
                type="submit"
                className="cursor-pointer justify-self-center rounded-card bg-signal px-7 py-3.5 font-mono text-[0.8rem] font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
