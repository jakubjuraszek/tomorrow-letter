'use client';

import { useState, useEffect } from 'react';

interface Question {
  id: number;
  section: string;
  question: string;
  minChars: number;
  helpText: string;
}

interface QuestionCardProps {
  question: Question;
  answer: string;
  onAnswerChange: (answer: string) => void;
}

export default function QuestionCard({ question, answer, onAnswerChange }: QuestionCardProps) {
  const [charCount, setCharCount] = useState(answer.length);
  const isValid = charCount >= question.minChars;

  useEffect(() => {
    setCharCount(answer.length);
  }, [answer]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswer = e.target.value;
    setCharCount(newAnswer.length);
    onAnswerChange(newAnswer);
  };

  return (
    <div className="bg-paper-light/30 border border-leather/20 p-8 md:p-12 relative">
      {/* Section label */}
      <div className="mb-4">
        <p
          className="text-[10px] uppercase tracking-[0.3em] text-ink-light/40 font-ui"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          {question.section}
        </p>
      </div>

      {/* Question text */}
      <h2
        className="text-2xl md:text-3xl font-display font-light text-ink mb-6 leading-relaxed"
        style={{ fontFamily: 'var(--font-family-display)', fontWeight: 300 }}
      >
        {question.question}
      </h2>

      {/* Help text */}
      <p
        className="text-sm text-ink-light/60 mb-6 font-ui"
        style={{ fontFamily: 'var(--font-family-ui)' }}
      >
        {question.helpText}
      </p>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={answer}
          onChange={handleChange}
          placeholder="Start writing..."
          rows={8}
          className="w-full p-4 bg-paper border border-leather/20 text-ink font-body text-base leading-relaxed resize-none focus:outline-none focus:border-leather/40 transition-colors"
          style={{
            fontFamily: 'var(--font-family-body)',
            lineHeight: 1.8
          }}
        />

        {/* Character counter */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            {!isValid && charCount > 0 && (
              <p className="text-xs text-ink-light/60 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                At least {question.minChars} characters needed
              </p>
            )}
            {isValid && (
              <p className="text-xs text-gold font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                ✓ Good to go
              </p>
            )}
          </div>

          <p
            className={`text-xs font-ui ${isValid ? 'text-ink-light/40' : 'text-ink-light/60'}`}
            style={{ fontFamily: 'var(--font-family-ui)' }}
          >
            {charCount} / {question.minChars} characters
          </p>
        </div>
      </div>
    </div>
  );
}
