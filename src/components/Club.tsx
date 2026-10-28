import { Code2, Trophy, Brain, Flag, Mail, Ban } from 'lucide-react';
import { CLUB_PILLARS, CLUB_ROADMAP, PROFILE } from '../data';
import SectionHeading from './SectionHeading';

const PILLAR_ICONS = [Code2, Trophy, Brain];

export default function Club() {
  return (
    <section id="club" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-gradient-to-b from-emerald-950/50 via-ink-900 to-ink-900 p-6 sm:p-10 lg:p-14">
          {/* Decorative */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/15 blur-[100px]" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(52,211,153,0.6)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeading
                index="03"
                eyebrow="Founder"
                title={
                  <>
                    Green Flag <span className="font-serif font-normal italic text-emerald-300">Club</span>
                  </>
                }
                description="A student-led tech initiative at Arniko Awasiya — focused strictly on software, full-stack web development, hackathons and AI mentorship."
              />
              <div className="reveal mt-6 flex flex-wrap gap-2">
                <span className="chip !border-emerald-400/25 !bg-emerald-400/10 !text-emerald-200">
                  <Flag className="h-3.5 w-3.5" aria-hidden="true" /> Launching soon
                </span>
                <span className="chip">
                  <Ban className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" /> Software only — no hardware
                </span>
              </div>
            </div>

            {/* Flag visual */}
            <div className="reveal hidden justify-center lg:flex" aria-hidden="true">
              <div className="relative h-56 w-64">
                <div className="absolute bottom-0 left-8 top-0 w-2 rounded-full bg-gradient-to-b from-zinc-300 to-zinc-600" />
                <div className="absolute left-[1.6rem] top-[-6px] h-5 w-5 rounded-full bg-zinc-200" />
                <div className="animate-wave absolute left-10 top-3 h-28 w-48 origin-left rounded-r-2xl bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600 shadow-[0_20px_60px_-10px_rgba(52,211,153,0.6)]">
                  <div className="flex h-full items-center justify-center font-mono text-sm font-bold tracking-[0.25em] text-emerald-950/80">
                    &lt;GFC/&gt;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <ul className="relative mt-14 grid gap-4 md:grid-cols-3">
            {CLUB_PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <li key={p.title} className="reveal group rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/30">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300 transition group-hover:bg-emerald-400 group-hover:text-ink-950">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{p.tag}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
                </li>
              );
            })}
          </ul>

          {/* Roadmap */}
          <div className="relative mt-14">
            <h3 className="reveal font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">Roadmap</h3>
            <ol className="reveal mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CLUB_ROADMAP.map((step, i) => {
                const current = step.status === 'In progress';
                return (
                  <li key={step.title} className="relative">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border font-mono text-xs font-semibold ${
                          current ? 'border-emerald-400 bg-emerald-400 text-ink-950' : 'border-white/15 text-zinc-400'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className={`hidden h-px flex-1 lg:block ${i < CLUB_ROADMAP.length - 1 ? 'bg-white/10' : 'bg-transparent'}`} aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                    <p className={`mt-2 text-xs font-medium ${current ? 'text-emerald-300' : 'text-zinc-500'}`}>{step.status}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* CTA */}
          <div className="reveal relative mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/[0.08] bg-ink-950/60 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-semibold text-white">Want to join, mentor or collaborate?</p>
              <p className="mt-1 text-sm text-zinc-400">Students, alumni and developers are all welcome to reach out.</p>
            </div>
            <a href={`mailto:${PROFILE.email}?subject=Green%20Flag%20Club`} className="btn-primary shrink-0">
              <Mail className="h-4 w-4" aria-hidden="true" /> Get involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
