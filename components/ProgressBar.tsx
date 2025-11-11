'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      {/* Counter */}
      <div className="flex items-center justify-between mb-3">
        <p
          className="text-sm font-ui text-ink-light/70"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          Question {current} of {total}
        </p>
        <p
          className="text-xs font-ui text-ink-light/50"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          {Math.round(percentage)}% complete
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-leather/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
