import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data';
import { useActiveSection, useScrolled } from '../hooks';

const IDS = NAV_LINKS.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(IDS);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="scroll-progress bg-litmus h-[2px] w-full" aria-hidden="true" />
      <div className="container-page pt-3">
        <nav
          aria-label="Primary"
          className={`flex h-14 items-center justify-between rounded-full border px-3 pl-4 transition-all duration-300 ${
            scrolled || open
              ? 'border-white/10 bg-ink-900/75 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${PROFILE.name} — home`}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-400 font-mono text-[13px] font-bold text-ink-950 transition group-hover:rotate-[-8deg]">
              PJ
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-zinc-100 sm:block">{PROFILE.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
                      isActive ? 'bg-white/[0.08] text-white' : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href={`mailto:${PROFILE.email}?subject=Hello%20Parmanand`} className="btn-primary hidden !px-4 !py-2 text-[13px] sm:inline-flex">
              Say hello <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="animate-fade-up mt-2 rounded-3xl border border-white/10 bg-ink-900/95 p-2 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium ${
                      active === link.id ? 'bg-white/[0.06] text-white' : 'text-zinc-300'
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${PROFILE.email}?subject=Hello%20Parmanand`}
              className="btn-primary mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Say hello
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
