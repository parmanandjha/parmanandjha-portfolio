import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 font-mono text-[13px] font-bold text-ink-950">PJ</span>
          <div>
            <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} · {PROFILE.school}, {PROFILE.city}
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#top" className="btn-ghost self-start !px-4 !py-2 text-xs md:self-auto">
          Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
