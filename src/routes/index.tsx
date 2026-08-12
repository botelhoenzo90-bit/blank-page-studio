import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seu projeto — pronto para construir" },
      {
        name: "description",
        content:
          "Ponto de partida do seu app: uma base limpa, rápida e bonita. Diga o que você quer criar e a página toma forma.",
      },
      { property: "og:title", content: "Seu projeto — pronto para construir" },
      {
        property: "og:description",
        content:
          "Ponto de partida do seu app: uma base limpa, rápida e bonita. Diga o que você quer criar.",
      },
    ],
  }),
  component: Index,
});

const ideias = [
  {
    titulo: "Site institucional",
    texto: "Páginas de serviços, sobre e contato com SEO cuidado.",
  },
  {
    titulo: "Painel de dados",
    texto: "Login, banco de dados e gráficos com dados reais.",
  },
  {
    titulo: "Loja ou catálogo",
    texto: "Listagem de produtos, busca e página de detalhe.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-14 px-6 py-24">
        <header className="space-y-6">
          <span className="inline-block rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            base pronta
          </span>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            A página não está mais em branco.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A base do seu projeto está funcionando: tipografia, cores e estrutura
            já definidas. Agora me diga o que você quer construir aqui.
          </p>
        </header>

        <section className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {ideias.map((ideia) => (
            <article key={ideia.titulo} className="bg-card p-6">
              <h2 className="font-display text-lg tracking-tight">{ideia.titulo}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {ideia.texto}
              </p>
            </article>
          ))}
        </section>

        <p className="text-sm text-muted-foreground">
          Escreva no chat, por exemplo:{" "}
          <span className="text-foreground">
            “landing page para minha cafeteria com menu e horários”
          </span>
          .
        </p>
      </div>
    </main>
  );
}
