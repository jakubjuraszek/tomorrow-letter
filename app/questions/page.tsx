'use client';

import { useState, useEffect } from 'react';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import questionsData from '@/data/questions.json';
import { useRouter } from 'next/navigation';

export default function QuestionsPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load questions (FREE tier = 10 questions)
  const questions = questionsData.free;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  // Load answers from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('tomorrow-letter-answers');
    const savedIndex = localStorage.getItem('tomorrow-letter-current-index');

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }

    setIsLoading(false);
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('tomorrow-letter-answers', JSON.stringify(answers));
      localStorage.setItem('tomorrow-letter-current-index', currentIndex.toString());
    }
  }, [answers, currentIndex, isLoading]);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Save final state
    localStorage.setItem('tomorrow-letter-answers', JSON.stringify(answers));
    localStorage.setItem('tomorrow-letter-completed', 'true');

    // Redirect to generate page
    router.push('/generate');
  };

  const isCurrentAnswerValid = () => {
    const answer = answers[currentQuestion.id] || '';
    return answer.length >= currentQuestion.minChars;
  };

  const isLastQuestion = currentIndex === totalQuestions - 1;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <p className="text-ink-light/60 font-ui">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper relative">
      {/* Paper grain texture */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />

        {/* Question Card */}
        <div className="mt-12">
          <QuestionCard
            question={currentQuestion}
            answer={answers[currentQuestion.id] || ''}
            onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
          />
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 border border-ink/20 text-ink text-sm font-semibold uppercase tracking-wider hover:bg-ink/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-ui"
            style={{ fontFamily: 'var(--font-family-ui)' }}
          >
            ← Previous
          </button>

          {!isLastQuestion ? (
            <button
              onClick={handleNext}
              disabled={!isCurrentAnswerValid()}
              className="px-6 py-3 bg-ink text-paper text-sm font-semibold uppercase tracking-wider hover:bg-ink/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-ui"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentAnswerValid()}
              className="px-8 py-3 bg-gold text-ink text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-ui"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              Generate Letter
            </button>
          )}
        </div>

        {/* Help text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-ink-light/50 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
            Your answers are automatically saved. You can return anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
