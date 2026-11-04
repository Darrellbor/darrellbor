import { CopyEmail } from "@/components/CopyEmail";
import { Inspect } from "@/components/Inspect";
import { LayerStack } from "@/components/LayerStack";

const EMAIL = "idiagbordarrel@gmail.com";

const SELOIRA_RULES = [
  ["Product", "One activation metric decides whether it works: a business's first real booking within 14 days."],
  ["Data", "Postgres blocks double bookings with an exclusion constraint, so the rule can't be bypassed by a bug."],
  ["Payments", "Money lives in an append-only ledger in minor units, with idempotent Paystack and Flutterwave webhooks."],
  ["Frontend", "One design system and component library shared by the dashboard, the storefront and the website."],
  ["Ops", "CI/CD on GitHub Actions, background workers on BullMQ, product analytics with PostHog."],
];

const SELOIRA_STACK = ["TypeScript", "NestJS", "PostgreSQL", "Prisma", "Redis", "Next.js", "React", "Turborepo", "Fly.io", "Playwright"];

const EXPERIENCE = [
  ["2025 – now", "Senior Software Engineer & Tech Lead", "Lead the B2B fleet team building EV charging products for businesses.", "Elli · VW Group"],
  ["2024 – 2025", "Software Engineer, Backend", "Cut the complexity of automated invoicing runs by more than 30%.", "Elli · VW Group"],
  ["2022 – 2023", "Senior Full-Stack Engineer", "Advised clients and designed their cloud architectures on AWS and Azure.", "Futurice"],
  ["2022", "Senior Frontend Engineer", "Component library and admin payments rebuild.", "Moralis"],
  ["2021 – 2022", "Frontend Engineer", "Owned the main learning web app.", "uLesson"],
];

const TOOLKIT = [
  ["Back end & data", "Node.js, NestJS, TypeScript, Go, Python, PostgreSQL, Prisma, Redis, REST, OpenAPI, event-driven systems"],
  ["Front end", "React, Next.js, TypeScript, Tailwind, shadcn/ui, Storybook, design systems"],
  ["Cloud & DevOps", "AWS, Google Cloud, Azure, Terraform, Docker, Kubernetes, GitHub Actions, observability"],
  ["AI", "LLM features, structured output, prompt and context design, daily agentic workflows"],
  ["Leadership", "Tech lead, architecture decision records, technical operations budget, client advisory"],
  ["Credentials", "AWS Solutions Architect and DevOps Professional, Security Specialty. B.Sc. Computer Science, first class. English fluent, German B1."],
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <div className="bar gutter">
        <div className="inner">
          <a className="mark" href="#top" data-inspect="Logo">
            Darrel<span>.</span>
          </a>
          <nav className="nav" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <Inspect />
          </nav>
        </div>
      </div>

      <header className="hero gutter" id="top">
        <div className="inner">
          <div className="intro">
            <p className="label" data-inspect="Eyebrow">Senior software engineer · Tech lead · Germany</p>
            <h1 className="name" data-inspect="Display heading">
              Darrel
              <br />
              <span className="second">Idiagbor</span>
            </h1>
            <p className="lede" data-inspect="Lede">
              I build products end to end, <em>from the design system to the database</em>, and sweat the details people feel but never see.
            </p>
            <div className="status">
              <span className="pill" data-inspect="Status pill">
                <span className="live" />
                <b>Now</b> Tech lead at Elli (Volkswagen Group)
              </span>
              <span className="pill" data-inspect="Status pill">
                <b>Building</b> Seloira
              </span>
            </div>
            <div className="cta">
              <a className="btn primary" href="#work" data-inspect="Primary button">See the work</a>
              <a className="btn" href="#contact" data-inspect="Secondary button">Get in touch</a>
            </div>
            <p className="hint">
              Curious how it&apos;s built? Turn on <b>Inspect</b> and <span className="on-hover">hover</span><span className="on-touch">tap</span> anything.
            </p>
          </div>
          <LayerStack />
        </div>
      </header>

      <main>
        <section className="block gutter" id="work" aria-labelledby="work-h">
          <div className="inner">
            <div className="head">
              <p className="label">Selected work</p>
              <h2 id="work-h" data-inspect="Section heading">Products I&apos;ve built and shipped.</h2>
            </div>

            <article className="case">
              <div className="case-copy">
                <p className="label">Founder · 2026 – now</p>
                <h3 data-inspect="Case title">Seloira</h3>
                <p data-inspect="Body text">
                  A business operating system for service businesses: bookings, payments, clients and messages. It turns appointments that used to live in Instagram and WhatsApp DMs into paid, organised bookings.
                </p>
                <p className="muted">
                  I built it from the ground up, from finding the problem and setting the pricing to the architecture, the code and the launch, and took it from a waitlist to a live product with paid plans.
                </p>
                <ul className="rules">
                  {SELOIRA_RULES.map(([k, v]) => (
                    <li key={k}>
                      <span>{k}</span>
                      {v}
                    </li>
                  ))}
                </ul>
                <ul className="stack-chips" aria-label="Stack">
                  {SELOIRA_STACK.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="cta">
                  <a className="btn primary" href="https://seloira.com" {...external}>Visit seloira.com</a>
                  <a className="btn" href="https://store.seloira.com/demo" {...external}>Open the demo storefront</a>
                </div>
              </div>

              <div className="device">
                <div className="screen" data-inspect="Seloira booking screen">
                  <div className="s-top">
                    <div className="s-biz">
                      <span className="s-av">M</span>
                      <div>
                        <b>Mira&apos;s Nail Studio</b>
                        <small>Lekki, Lagos</small>
                      </div>
                    </div>
                    <span className="s-badge">Instant booking</span>
                  </div>
                  <div className="s-service" data-inspect="Service card">
                    <b>Gel manicure</b>
                    <span>60 min · ₦18,000 · ₦5,000 deposit</span>
                  </div>
                  <div className="s-days">
                    {[["Mon", 9], ["Tue", 10], ["Wed", 11], ["Thu", 12], ["Fri", 13]].map(([d, n]) => (
                      <div key={d} className={n === 10 ? "s-day sel" : "s-day"}>
                        {d}
                        <b>{n}</b>
                      </div>
                    ))}
                  </div>
                  <div className="s-slots">
                    <div className="s-slot held" data-inspect="Held slot">
                      10:00<small>being booked</small>
                    </div>
                    <div className="s-slot pick" data-inspect="Selected slot">11:30</div>
                    <div className="s-slot">14:00</div>
                  </div>
                  <div className="s-pay">
                    <span>Tue 10 Nov · 11:30</span>
                    <b>Pay deposit &amp; book</b>
                  </div>
                </div>
                <p className="caption">
                  Illustration in Seloira&apos;s real brand tokens. The 10:00 slot shows a temporary hold while another client pays.
                </p>
              </div>
            </article>

            <div className="more">
              <article className="card">
                <p className="label">Elli · Volkswagen Group</p>
                <h3>Invoicing runs</h3>
                <div className="bars" aria-label="Complexity of automated invoicing runs, before and after">
                  <div className="bar-row">
                    <span>Before</span>
                    <i style={{ width: "100%" }} />
                  </div>
                  <div className="bar-row after">
                    <span>After</span>
                    <i style={{ width: "68%" }} />
                    <b>30%+ less</b>
                  </div>
                </div>
                <p>
                  Reworked the automated runs that send invoices to business customers for EV charging, cutting their complexity by more than 30% so a money-critical process is easier to maintain and extend. I now lead the B2B fleet team.
                </p>
                <p className="foot">TypeScript · NestJS · GCP · Terraform</p>
              </article>
              <article className="card">
                <p className="label">Side project · AI</p>
                <h3>Senomy</h3>
                <div className="chat" aria-label="Illustrative conversation">
                  <div className="bubble flow">Long day? Tell me the part that&apos;s still on your mind.</div>
                  <div className="bubble you">The deadline, mostly.</div>
                  <div className="bubble flow">Okay. What would &ldquo;good enough&rdquo; look like by Friday?</div>
                </div>
                <p>
                  A wellness app where an AI companion talks people through how they&apos;re feeling and writes them personal daily messages. I designed its voice and the context it sees, so it feels like a friend instead of a form.
                </p>
                <p className="foot">Launched to 10–20 early users · currently offline · conversation is illustrative</p>
              </article>
              <article className="card">
                <p className="label">Moralis · 2022</p>
                <h3>web3uikit</h3>
                <div className="specimen" aria-label="Component specimen">
                  <span className="sp-btn">Connect wallet</span>
                  <span className="sp-btn ghost">View tx</span>
                  <span className="sp-badge">confirmed</span>
                </div>
                <p>
                  Improved Moralis&apos;s open-source React component library used by developers building on the platform, and led the rebuild of the admin dashboard&apos;s payments section.
                </p>
                <p className="foot">React · TypeScript · styled-components</p>
              </article>
            </div>
          </div>
        </section>

        <section className="block gutter" id="experience" aria-labelledby="exp-h">
          <div className="inner">
            <div className="head">
              <p className="label">Experience</p>
              <h2 id="exp-h">Eight years, frontend to infrastructure.</h2>
            </div>
            <ol className="timeline">
              {EXPERIENCE.map(([when, role, what, org]) => (
                <li key={when + role}>
                  <span className="when">{when}</span>
                  <div className="what">
                    <strong>{role}</strong>
                    <span>{what}</span>
                  </div>
                  <span className="org">{org}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="block gutter" aria-labelledby="kit-h">
          <div className="inner">
            <div className="head">
              <p className="label">Toolkit</p>
              <h2 id="kit-h">What I reach for.</h2>
            </div>
            <div className="kit">
              {TOOLKIT.map(([k, v]) => (
                <div key={k}>
                  <p className="label">{k}</p>
                  <p>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact gutter" id="contact" aria-labelledby="contact-h">
          <div className="inner">
            <p className="label">Contact</p>
            <h2 className="big" id="contact-h" data-inspect="Closing heading">
              Let&apos;s build
              <br />
              something <span>good.</span>
            </h2>
            <CopyEmail email={EMAIL} />
            <div className="cta">
              <a className="btn" href="https://linkedin.com/in/darrelidiagbor" {...external}>LinkedIn</a>
              <a className="btn" href="https://github.com/Darrellbor" {...external}>GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="gutter">
        <div className="inner">
          <span>Darrel Idiagbor · {new Date().getFullYear()}</span>
          <span>Hand-built with tokens, not templates.</span>
        </div>
      </footer>
    </>
  );
}
