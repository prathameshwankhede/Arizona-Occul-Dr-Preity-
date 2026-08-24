import React from 'react';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ badge, title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-200 text-sky-900 text-xs font-semibold uppercase tracking-wider mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
