import { TrendingUp } from 'lucide-react';
import { GPA_TRAJECTORY, STATS } from '../data';
import { useCountUp, useInView } from '../hooks';

function StatCard({ stat, start }: { stat: (typeof STATS)[number]; start: boolean }) {
  const value = useCountUp(stat.value, start);
  const isTarget = 'target' in stat && stat.target;
  return (
    <div className="card card-hover p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{stat.sub}</p>
      <p
        className={`mt-3 font-mono text-4xl font-semibold tabular-nums tracking-tight sm:text-[2.6rem] ${
          isTarget ? 'text-litmus' : stat.decimals === 0 ? 'text-white' : 'text-emerald-300'
        }`}
      >
        {value.toFixed(stat.decimals)}
      </p>
      <p className="mt-1.5 text-sm text-zinc-400">{stat.label}</p>
    </div>
  );
}

function Trajectory({ start }: { start: boolean }) {
  // Chart geometry
  const W = 320;
  const H = 150;
  const pad = { l: 24, r: 24, t: 28, b: 14 };
  const min = 3.4;
  const max = 4.0;
  const pts = GPA_TRAJECTORY.map((d, i) => ({
    ...d,
    x: pad.l + (i * (W - pad.l - pad.r)) / (GPA_TRAJECTORY.length - 1),
    y: pad.t + (1 - (d.gpa - min) / (max - min)) * (H - pad.t - pad.b),
  }));
  const solid = `M${pts[0].x},${pts[0].y} L${pts[1].x},${pts[1].y}`;
  const dashed = `M${pts[1].x},${pts[1].y} L${pts[2].x},${pts[2].y}`;
  const area = `M${pts[0].x},${H} L${pts[0].x},${pts[0].y} L${pts[1].x},${pts[1].y} L${pts[2].x},${pts[2].y} L${pts[2].x},${H} Z`;

  return (
    <div className="card col-span-2 flex flex-col p-5 sm:p-6 lg:col-span-2 lg:row-span-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">GPA trajectory</p>
          <p className="mt-2 text-lg font-semibold text-white">Climbing every single year</p>
        </div>
        <span className="chip !border-emerald-400/20 !text-emerald-300">
          <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> +0.36
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-6 w-full flex-1"
        role="img"
        aria-label="GPA rising from 3.60 in Class 10 to 3.82 in Class 11, with a target of 3.96 in Class 12"
      >
        <defs>
          <linearGradient id="gpa-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[3.6, 3.8, 4.0].map((g) => {
          const y = pad.t + (1 - (g - min) / (max - min)) * (H - pad.t - pad.b);
          return <line key={g} x1={pad.l} x2={W - pad.r} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />;
        })}
        <path d={area} fill="url(#gpa-area)" className={`transition-opacity duration-1000 ${start ? 'opacity-100' : 'opacity-0'}`} />
        <path
          d={solid}
          fill="none"
          stroke="#34d399"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset={start ? 0 : 1}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <path d={dashed} fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" className={`transition-opacity delay-700 duration-700 ${start ? 'opacity-100' : 'opacity-0'}`} />
        {pts.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="9" fill={'target' in p ? '#a78bfa' : '#34d399'} opacity="0.15" />
            <circle cx={p.x} cy={p.y} r="4" fill={'target' in p ? '#07090c' : '#34d399'} stroke={'target' in p ? '#a78bfa' : 'none'} strokeWidth="2" />
            <text x={p.x} y={p.y - 14} textAnchor="middle" className="fill-zinc-100 font-mono text-[11px] font-semibold">
              {p.gpa.toFixed(2)}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-3 grid grid-cols-3 text-center">
        {GPA_TRAJECTORY.map((d) => (
          <div key={d.label}>
            <p className="text-xs font-medium text-zinc-300">{d.label}</p>
            <p className="text-[11px] text-zinc-500">{d.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section aria-label="Academic highlights" className="relative pb-8">
      <div className="container-page">
        <div ref={ref} className="reveal grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Trajectory start={inView} />
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
