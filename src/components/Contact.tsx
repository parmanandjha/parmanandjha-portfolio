import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const socials = [
    { label: 'Instagram', handle: PROFILE.instagram.handle, href: PROFILE.instagram.url, icon: Instagram, tint: 'group-hover:text-pink-300' },
    { label: 'LinkedIn', handle: PROFILE.linkedin.handle, href: PROFILE.linkedin.url, icon: Linkedin, tint: 'group-hover:text-sky-300' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="reveal text-center">
          <p className="eyebrow justify-center">
            <span className="text-zinc-500">05</span>
            <span className="h-px w-6 bg-emerald-400/50" aria-hidden="true" />
            Contact
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl">
            Let&apos;s build something{' '}
            <span className="text-litmus font-serif font-normal italic">worth testing</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
            Whether it&apos;s a project, a hackathon, mentorship for the Green Flag Club or just a hello — my inbox is open.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${PROFILE.email}?subject=Portfolio%20Inquiry`} className="btn-primary !px-6 !py-3 text-base">
              <Mail className="h-4 w-4" aria-hidden="true" /> {PROFILE.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost !py-3" aria-live="polite">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" aria-hidden="true" /> Copy email
                </>
              )}
            </button>
          </div>
        </div>

        <ul className="reveal mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group card card-hover flex items-center justify-between p-5"
                >
                  <span className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 text-zinc-400 transition ${s.tint}`} aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-semibold text-white">{s.label}</span>
                      <span className="block text-xs text-zinc-500">{s.handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            );
          })}
          <li className="card flex items-center gap-3 p-5">
            <MapPin className="h-5 w-5 text-zinc-400" aria-hidden="true" />
            <span>
              <span className="block text-sm font-semibold text-white">Based in</span>
              <span className="block text-xs text-zinc-500">{PROFILE.city}</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
