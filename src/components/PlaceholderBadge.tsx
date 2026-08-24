import React from 'react';
import { Info } from 'lucide-react';

interface Props {
  text: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<Props> = ({ text, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium ${className}`}>
      <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
};
