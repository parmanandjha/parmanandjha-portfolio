import type { ReactNode } from 'react';

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }: Props) {
  const centered = align === 'center';
  return (
    <div className={`reveal max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${centered ? 'justify-center' : ''}`}>
        <span className="text-zinc-500">{index}</span>
        <span className="h-px w-6 bg-emerald-400/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p>}
    </div>
  );
}
