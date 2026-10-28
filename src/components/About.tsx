import { useState } from 'react';
import { Quote, FlaskConical, Mountain, Code2 } from 'lucide-react';
import { PROFILE } from '../data';
import SectionHeading from './SectionHeading';

const SAMPLES = [
  {
    id: 'curiosity',
    label: 'Curiosity',
    icon: FlaskConical,
    color: '#fb7185',
    reading: 'Acidic · pH 3',
    ph: 3,
    title: 'Ask the sharp question',
    body: 'Curiosity is the reagent. It turns “how does this work?” into the first line of a new project.',
  },
  {
    id: 'challenge',
    label: 'Challenge',
    icon: Mountain,
    color: '#38bdf8',
    reading: 'Basic · pH 11',
    ph: 11,
    title: 'Let pressure reveal character',
    body: 'Hard problems show what an idea is really made of — so I lean into them instead of around them.',
  },
  {
    id: 'code',
    label: 'Code',
    icon: Code2,
    color: '#34d399',
    reading: 'Equilibrium · pH 7',
    ph: 7,
    title: 'Find balance, then build',
    body: 'When curiosity and challenge balance out, I test the idea through code and ship something practical.',
  },
] as const;

export default function About() {
  const [activeId, setActiveId] = useState<(typeof SAMPLES)[number]['id']>('code');
  const active = SAMPLES.find((s) => s.id === activeId)!;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="Philosophy"
          title={
            <>
              Curiosity is my <span className="font-serif font-normal italic text-emerald-300">litmus test</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Quote */}
          <figure className="reveal card relative overflow-hidden p-8 sm:p-10">
            <Quote className="h-10 w-10 text-emerald-400/30" aria-hidden="true" />
            <blockquote className="mt-6 font-serif text-2xl leading-[1.35] text-zinc-100 sm:text-[1.9rem]">
              “{PROFILE.philosophy}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <img
                src={PROFILE.photo}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white/10"
              />
              <div>
                <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
                <p className="text-xs text-zinc-500">
                  {PROFILE.school}, {PROFILE.city.split(',')[0]}
                </p>
              </div>
            </figcaption>
            <div className="bg-litmus absolute inset-x-0 bottom-0 h-1 opacity-70" aria-hidden="true" />
          </figure>

          {/* Interactive litmus strip */}
          <div className="reveal card flex flex-col p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="eyebrow !text-zinc-400">Run the litmus test</p>
              <span className="font-mono text-[11px] text-zinc-500">{active.reading}</span>
            </div>

            <div className="mt-6 flex flex-1 gap-6">
              {/* Paper strip */}
              <div
                className="relative w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#efe9dc]"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-x-0 bottom-0 transition-[height,background-color] duration-700 ease-out"
                  style={{ height: '62%', backgroundColor: active.color }}
                />
                <div className="absolute inset-x-0 bottom-[62%] h-6 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-400/60" />
              </div>

              <div className="flex flex-1 flex-col">
                <div role="group" aria-label="Choose a sample" className="flex flex-wrap gap-2">
                  {SAMPLES.map((s) => {
                    const Icon = s.icon;
                    const isActive = s.id === activeId;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveId(s.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          isActive
                            ? 'border-transparent text-ink-950'
                            : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20'
                        }`}
                        style={isActive ? { backgroundColor: s.color } : undefined}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.label}
                      </button>
                    );
                  })}
                </div>

                {/* pH scale */}
                <div className="mt-8" aria-hidden="true">
                  <div className="relative h-2 rounded-full bg-[linear-gradient(90deg,#ef4444,#f97316,#facc15,#34d399,#22d3ee,#3b82f6,#8b5cf6)]">
                    <span
                      className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-ink-950 shadow-lg transition-[left] duration-700 ease-out"
                      style={{ left: `${(active.ph / 14) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-500">
                    <span>0 · acid</span>
                    <span>7</span>
                    <span>base · 14</span>
                  </div>
                </div>

                <div key={active.id} className="animate-fade-up mt-auto pt-8" aria-live="polite">
                  <p className="text-xl font-semibold tracking-tight text-white">{active.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{active.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
