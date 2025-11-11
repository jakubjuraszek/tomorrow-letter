'use client';

import { useEffect, useState } from 'react';

export default function GeneratePage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('tomorrow-letter-answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1
          className="text-4xl md:text-5xl font-display font-light text-ink"
          style={{ fontFamily: 'var(--font-family-display)', fontWeight: 300 }}
        >
          Generating your letter...
        </h1>

        <p
          className="text-lg text-ink-light/70 font-ui"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          This is a placeholder. AI generation coming in Day 3.
        </p>

        <div className="mt-8 p-6 bg-paper-light/30 border border-leather/20 text-left">
          <p
            className="text-sm text-ink-light/60 font-ui mb-4"
            style={{ fontFamily: 'var(--font-family-ui)' }}
          >
            Collected answers:
          </p>
          <pre className="text-xs text-ink-light/80 font-body overflow-auto">
            {JSON.stringify(answers, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
