import { ArrowDown, MapPin, MessageCircle, GraduationCap, Flag, BadgeCheck } from 'lucide-react';
import { MARQUEE_ITEMS, PROFILE } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Ambient background */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.10] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-40 h-[380px] w-[380px] rounded-full bg-violet-500/[0.10] blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        {/* Copy */}
        <div>
          <div className="animate-fade-up chip !border-emerald-400/20 !bg-emerald-400/[0.06] !text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Building the Green Flag Club
          </div>

          <h1
            className="animate-fade-up mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.4rem]"
            style={{ animationDelay: '80ms' }}
          >
            I test ideas like{' '}
            <span className="text-litmus font-serif text-[1.12em] font-normal italic tracking-[-0.01em]">litmus</span>,
            <br className="hidden sm:block" /> then build them{' '}
            <span className="relative whitespace-nowrap">
              in code
              <svg
                className="absolute -bottom-2 left-0 w-full text-emerald-400/80"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9C40 3 120 1 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Hi, I&apos;m <strong className="font-semibold text-zinc-100">{PROFILE.name}</strong> — a Class 12 Computer
            Science student at {PROFILE.school} and the founder of the upcoming{' '}
            <span className="text-emerald-300">Green Flag Club</span>, a student-led tech community for coding,
            hackathons and AI mentorship.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: '240ms' }}>
            <a href="#journey" className="btn-primary">
              Explore my journey <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#ask" className="btn-ghost">
              <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Ask my portfolio
            </a>
          </div>

          <dl
            className="animate-fade-up mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400"
            style={{ animationDelay: '320ms' }}
          >
            <div className="flex items-center gap-2">
              <dt className="sr-only">Location</dt>
              <MapPin className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <dd>{PROFILE.city}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Graduation</dt>
              <GraduationCap className="h-4 w-4 text-zinc-500" aria-hidden="true" />
              <dd>Graduating {PROFILE.graduation}</dd>
            </div>
          </dl>
        </div>

        {/* Portrait */}
        <div className="animate-fade-up relative mx-auto w-full max-w-[420px]" style={{ animationDelay: '200ms' }}>
          <div className="bg-litmus absolute -inset-px rounded-[2.2rem] opacity-60 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[2.2rem] border border-white/10 bg-ink-900 p-2.5 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={PROFILE.photo}
                alt={`Portrait of ${PROFILE.name}, smiling, wearing a black t-shirt`}
                width={640}
                height={640}
                {...({ fetchpriority: 'high' } as Record<string, string>)}
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[50%_30%] transition duration-700 hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-white">{PROFILE.name}</p>
                  <p className="text-xs text-zinc-300">Student · Developer · Founder</p>
                </div>
                <span className="chip !border-white/15 !bg-ink-950/60 backdrop-blur">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" /> Class 12
                </span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="animate-float absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block lg:-left-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Class 11 GPA</p>
            <p className="font-mono text-2xl font-semibold text-emerald-300">3.82</p>
          </div>
          <div
            className="animate-float absolute -right-3 top-1/2 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block lg:-right-8"
            style={{ animationDelay: '-3s' }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <Flag className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Founder
            </p>
            <p className="text-xs text-zinc-400">Green Flag Club</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-white/[0.06] bg-ink-900/40 py-4">
        <div className="marquee-mask overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                {item}
                <span className="text-emerald-400/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
