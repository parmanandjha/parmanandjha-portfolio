import type { ReactNode } from 'react';
import {
  Award,
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Languages,
  PenLine,
  Monitor,
  Hammer,
  Flag,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Target,
} from 'lucide-react';
import { CS50_TOPICS, PROFILE, SUBJECTS } from '../data';
import SectionHeading from './SectionHeading';

const SUBJECT_ICONS: Record<(typeof SUBJECTS)[number], typeof Atom> = {
  'Computer Science': Monitor,
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Calculator,
  English: PenLine,
  Nepali: Languages,
};

function GpaBar({ value, max = 4, target = false }: { value: number; max?: number; target?: boolean }) {
  return (
    <div className="mt-4">
      <div className="flex items-baseline justify-between">
        <span className={`font-mono text-3xl font-semibold tabular-nums ${target ? 'text-litmus' : 'text-white'}`}>
          {value.toFixed(2)}
        </span>
        <span className="font-mono text-xs text-zinc-500">/ {max.toFixed(1)} GPA</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`h-full rounded-full ${target ? 'bg-litmus' : 'bg-emerald-400'}`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
}

function Chapter({
  num,
  tense,
  title,
  status,
  statusTone,
  children,
  last = false,
}: {
  num: string;
  tense: string;
  title: string;
  status: string;
  statusTone: 'done' | 'now' | 'next';
  children: ReactNode;
  last?: boolean;
}) {
  const tone = {
    done: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/20',
    now: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
    next: 'bg-violet-400/10 text-violet-300 border-violet-400/25',
  }[statusTone];
  const dot = { done: 'bg-zinc-400', now: 'bg-emerald-400', next: 'bg-violet-400' }[statusTone];

  return (
    <li className="relative grid gap-6 pb-16 last:pb-0 lg:grid-cols-[260px_1fr] lg:gap-12">
      {/* Rail */}
      {!last && (
        <span
          className="absolute left-[11px] top-8 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-white/15 to-white/0 lg:left-[11px]"
          aria-hidden="true"
        />
      )}
      <div className="relative pl-10 lg:sticky lg:top-28 lg:self-start">
        <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-ink-950">
          <span className={`h-2 w-2 rounded-full ${dot} ${statusTone === 'now' ? 'animate-pulse' : ''}`} />
        </span>
        <p className="font-mono text-xs text-zinc-500">Chapter {num}</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-1 font-serif text-lg italic text-zinc-400">{tense}</p>
        <span className={`mt-4 inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tone}`}>{status}</span>
      </div>
      <div className="reveal grid gap-4 pl-10 sm:grid-cols-2 lg:pl-0">{children}</div>
    </li>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Journey"
          title={
            <>
              What I&apos;ve done, what I&apos;m doing, <span className="text-zinc-500">and what&apos;s next.</span>
            </>
          }
          description="A steady climb — from strong board results to self-driven computer science, and now to building a community of student developers."
        />

        <ol className="mt-16">
          {/* ---------- PAST ---------- */}
          <Chapter num="01" tense="What I have done" title="Foundation" status="Completed" statusTone="done">
            <article className="card card-hover p-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Award className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-widest">Class 10 · SEE</span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-white">Secondary Education Examination</h4>
              <p className="mt-1 text-sm text-zinc-400">National board curriculum, with consistent academic discipline.</p>
              <GpaBar value={3.6} />
            </article>

            <article className="card card-hover p-6">
              <div className="flex items-center gap-2 text-emerald-300">
                <Award className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-widest">Class 11 · Science</span>
              </div>
              <h4 className="mt-3 text-lg font-semibold text-white">+2 Science, first year</h4>
              <p className="mt-1 text-sm text-zinc-400">A clear jump in results while stepping into computer science.</p>
              <GpaBar value={3.82} />
            </article>

            <article className="card card-hover p-6 sm:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-sky-300">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-widest">Coursework · Harvard</span>
                  </div>
                  <h4 className="mt-3 text-lg font-semibold text-white">CS50 Web Development</h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    Completed online coursework covering web programming, modern JavaScript, backend logic and API
                    architecture — preparation for a career in computer science.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> Completed
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics covered">
                {CS50_TOPICS.map((t) => (
                  <li key={t} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Chapter>

          {/* ---------- PRESENT ---------- */}
          <Chapter num="02" tense="What I am doing" title="Right now" status="In progress" statusTone="now">
            <article className="card relative overflow-hidden p-6 sm:col-span-2">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-[11px] uppercase tracking-widest">Class 12 · Second year</span>
                  </div>
                  <h4 className="mt-3 text-xl font-semibold text-white">Computer Science Stream</h4>
                  <p className="mt-1 text-sm text-zinc-400">
                    {PROFILE.school}, {PROFILE.city.split(',')[0]}
                  </p>
                </div>
                <div className="sm:w-56">
                  <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Target className="h-3.5 w-3.5" aria-hidden="true" /> Target grade
                  </p>
                  <GpaBar value={3.96} target />
                </div>
              </div>

              <p className="relative mt-8 text-sm text-zinc-400">Six core disciplines this year:</p>
              <ul className="relative mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {SUBJECTS.map((s) => {
                  const Icon = SUBJECT_ICONS[s];
                  return (
                    <li
                      key={s}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-ink-950/50 px-3 py-2.5 text-sm text-zinc-200 transition hover:border-emerald-400/30"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-emerald-300/80" aria-hidden="true" />
                      {s}
                    </li>
                  );
                })}
              </ul>
            </article>

            <article className="card card-hover p-6">
              <Hammer className="h-5 w-5 text-zinc-300" aria-hidden="true" />
              <h4 className="mt-4 font-semibold text-white">Building full-stack web apps</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                Alongside daily school studies, I build self-contained full-stack web applications to put theory into practice.
              </p>
            </article>
            <article className="card card-hover p-6">
              <Flag className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <h4 className="mt-4 font-semibold text-white">Planning the Green Flag Club</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                Preparing the operational plan for a student-led tech club at school.
              </p>
            </article>
          </Chapter>

          {/* ---------- FUTURE ---------- */}
          <Chapter num="03" tense="What I will be doing" title="Up next" status="Upcoming" statusTone="next" last>
            <a
              href="#club"
              className="group card card-hover relative overflow-hidden p-6 sm:col-span-2"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/[0.08] via-transparent to-violet-400/[0.08]" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-300">Upcoming initiative</span>
                  <h4 className="mt-3 text-xl font-semibold text-white">Founding the Green Flag Club</h4>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-zinc-400">
                    An official tech &amp; innovation club focused strictly on software and digital skills — workshops, hackathons and AI mentorship.
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 transition group-hover:border-emerald-400/40 group-hover:bg-emerald-400 group-hover:text-ink-950">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
            <article className="card p-6 sm:col-span-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">High school graduation</h4>
                    <p className="text-sm text-zinc-400">Completing Class 12 Science</p>
                  </div>
                </div>
                <span className="font-mono text-lg font-semibold text-violet-300">{PROFILE.graduation}</span>
              </div>
            </article>
          </Chapter>
        </ol>
      </div>
    </section>
  );
}
