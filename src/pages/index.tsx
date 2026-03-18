import Head from "next/head";

const setupSteps = [
  "Copy .env.example to .env and point DATABASE_URL at a Postgres database.",
  "Run pnpm db:push to sync the sample Post model.",
  "Start the app with pnpm dev or build the Cloudflare-targeted bundle with pnpm build.",
];

const commands = ["pnpm dev", "pnpm build", "pnpm deploy", "pnpm db:push", "pnpm lint", "pnpm typecheck"];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vinext Boilerplate</title>
        <meta content={"Minimal Next.js, Prisma, Oxc, Vinext, and Wrangler starter."} name={"description"} />
      </Head>
      <main className={"page-shell"}>
        <section className={"hero-card"}>
          <p className={"eyebrow"}>Next.js + Prisma + Cloudflare</p>
          <h1>Vinext Boilerplate</h1>
          <p className={"lead"}>
            Minimal Pages Router starter built for local web development first and Cloudflare Workers deployment second.
          </p>
          <div className={"chip-row"}>
            <span className={"chip"}>Next 16</span>
            <span className={"chip"}>React 19</span>
            <span className={"chip"}>Prisma 7</span>
            <span className={"chip"}>vinext</span>
            <span className={"chip"}>wrangler</span>
            <span className={"chip"}>oxfmt + oxlint</span>
          </div>
        </section>

        <section className={"content-grid"}>
          <article className={"panel"}>
            <h2>Bootstrap flow</h2>
            <ol className={"ordered-list"}>
              {setupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className={"panel"}>
            <h2>Key commands</h2>
            <ul className={"command-list"}>
              {commands.map((command) => (
                <li key={command}>
                  <code>{command}</code>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
