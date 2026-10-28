import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Bot, Send, RotateCcw, Sparkles, ShieldCheck } from 'lucide-react';
import { answerFor, PROFILE, SUGGESTIONS } from '../data';
import SectionHeading from './SectionHeading';

type Message = { id: number; sender: 'user' | 'bot'; text: string };

const WELCOME: Message = {
  id: 0,
  sender: 'bot',
  text: "Hello! I can answer questions about Parmanand Jha's academic journey, his studies at Arniko Awasiya Secondary School, and the Green Flag Club.",
};

export default function AskBot() {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const ask = (raw: string) => {
    const query = raw.trim();
    if (!query || typing) return;
    setMessages((m) => [...m, { id: nextId.current++, sender: 'user', text: query }]);
    setInput('');
    setTyping(true);
    const reply = answerFor(query);
    window.setTimeout(() => {
      setMessages((m) => [...m, { id: nextId.current++, sender: 'bot', text: reply }]);
      setTyping(false);
    }, 550 + Math.min(reply.length * 4, 600));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const reset = () => {
    setMessages([WELCOME]);
    setTyping(false);
  };

  return (
    <section id="ask" className="relative py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            index="04"
            eyebrow="Ask"
            title={
              <>
                Questions? <span className="font-serif font-normal italic text-emerald-300">Just ask.</span>
              </>
            }
            description="A small assistant grounded only in facts from this portfolio. It runs entirely in your browser — no API keys, no tracking, instant answers."
          />
          <ul className="reveal mt-8 space-y-3 text-sm text-zinc-400">
            {['Answers only from verified portfolio facts', 'Runs 100% locally in your browser', 'Try asking about grades, the club, or contact info'].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="reveal card overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={PROFILE.photo} alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full object-cover object-top" />
                <span className="absolute -bottom-0.5 -right-0.5 grid h-4 w-4 place-items-center rounded-full bg-emerald-400 ring-2 ring-ink-900">
                  <Bot className="h-2.5 w-2.5 text-ink-950" aria-hidden="true" />
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Portfolio Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · replies instantly
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-200"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Reset
            </button>
          </div>

          {/* Log */}
          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            aria-label="Conversation with portfolio assistant"
            className="chat-scroll h-80 space-y-3 overflow-y-auto bg-ink-950/40 px-5 py-5 text-sm"
          >
            {messages.map((m) => (
              <div key={m.id} className={`animate-fade-up flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'rounded-br-md bg-emerald-400 text-ink-950'
                      : 'rounded-bl-md border border-white/[0.07] bg-ink-800 text-zinc-200'
                  }`}
                >
                  <span className="sr-only">{m.sender === 'user' ? 'You: ' : 'Assistant: '}</span>
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start" aria-label="Assistant is typing">
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-white/[0.07] bg-ink-800 px-4 py-3.5">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 animate-dot rounded-full bg-zinc-400" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="border-t border-white/[0.07] px-5 pt-4">
            <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              <Sparkles className="h-3 w-3" aria-hidden="true" /> Suggested
            </p>
            <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  disabled={typing}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-emerald-400/40 hover:text-white disabled:opacity-50"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input — native form submission handles Enter (IME-safe) */}
          <form onSubmit={onSubmit} className="flex gap-2 p-4">
            <label htmlFor="ask-input" className="sr-only">
              Ask a question about Parmanand
            </label>
            <input
              id="ask-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about academics, projects or the club…"
              autoComplete="off"
              className="flex-1 rounded-full border border-white/10 bg-ink-950 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-400/60 focus:outline-none focus:ring-4 focus:ring-emerald-400/10"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              aria-label="Send question"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-400 text-ink-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
