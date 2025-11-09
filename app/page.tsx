export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1
          className="text-4xl md:text-6xl font-display font-semibold text-ink mb-6 max-w-3xl leading-tight"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          A letter from the person you&apos;re becoming
        </h1>
        <p
          className="text-lg md:text-xl text-ink-light mb-12 max-w-2xl leading-relaxed"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          Answer deep questions about your struggles, fears, and dreams.
          <br className="hidden md:block" />
          Receive a letter from your future self — delivered when you need it most.
        </p>
        <button
          className="px-8 py-4 bg-gold text-ink font-ui font-semibold uppercase tracking-wider text-sm rounded-sm border border-leather transition-all duration-300 hover:bg-gold-dark hover:-translate-y-1 shadow-md hover:shadow-lg"
          style={{
            fontFamily: 'var(--font-family-ui)',
            boxShadow: '0 4px 8px rgba(26, 20, 16, 0.08), 0 8px 16px rgba(26, 20, 16, 0.1)'
          }}
        >
          Write Your Letter
        </button>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 md:py-24 bg-paper-light">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-display font-semibold text-ink text-center mb-16"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center md:text-left">
              <div className="text-5xl font-display text-gold mb-4">1</div>
              <h3 className="text-xl font-display font-semibold text-ink mb-3">
                Answer deep questions
              </h3>
              <p className="text-ink-light leading-relaxed">
                Reflect on where you are now: your struggles, fears, and what you truly want.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center md:text-left">
              <div className="text-5xl font-display text-gold mb-4">2</div>
              <h3 className="text-xl font-display font-semibold text-ink mb-3">
                AI generates your letter
              </h3>
              <p className="text-ink-light leading-relaxed">
                Your future self writes back — honest, compassionate, with the perspective you need.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center md:text-left">
              <div className="text-5xl font-display text-gold mb-4">3</div>
              <h3 className="text-xl font-display font-semibold text-ink mb-3">
                Receive it when ready
              </h3>
              <p className="text-ink-light leading-relaxed">
                Choose when to receive the full letter: 1 month, 1 year, or 5 years from now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-display font-semibold text-ink text-center mb-16"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Choose your journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Free Tier */}
            <div className="border border-leather/30 rounded-md p-6 bg-paper-light hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold text-ink mb-2">Free</h3>
              <div className="text-3xl font-display font-bold text-ink mb-4">$0</div>
              <ul className="space-y-2 text-sm text-ink-light mb-6">
                <li>✓ 3 time capsules</li>
                <li>✓ 10 questions</li>
                <li>✓ Letter preview</li>
                <li>✓ Up to 1 year delay</li>
              </ul>
              <button className="w-full py-2 border border-leather text-ink rounded-sm text-sm font-semibold hover:bg-paper transition-colors">
                Start Free
              </button>
            </div>

            {/* Monthly */}
            <div className="border border-leather/30 rounded-md p-6 bg-paper-light hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold text-ink mb-2">Monthly</h3>
              <div className="text-3xl font-display font-bold text-ink mb-4">$9.99</div>
              <ul className="space-y-2 text-sm text-ink-light mb-6">
                <li>✓ Unlimited capsules</li>
                <li>✓ 25 deep questions</li>
                <li>✓ Full letter (1500w)</li>
                <li>✓ Up to 5+ years</li>
              </ul>
              <button className="w-full py-2 bg-gold text-ink rounded-sm text-sm font-semibold hover:bg-gold-dark transition-colors">
                Subscribe
              </button>
            </div>

            {/* Annual */}
            <div className="border-2 border-gold rounded-md p-6 bg-paper-light hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-ink text-xs font-semibold rounded-full">
                SAVE $50
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-2">Annual</h3>
              <div className="text-3xl font-display font-bold text-ink mb-4">$69</div>
              <ul className="space-y-2 text-sm text-ink-light mb-6">
                <li>✓ All Monthly features</li>
                <li>✓ Save $50/year</li>
                <li>✓ Priority support</li>
                <li>✓ Yearly commitment</li>
              </ul>
              <button className="w-full py-2 bg-gold text-ink rounded-sm text-sm font-semibold hover:bg-gold-dark transition-colors">
                Get Annual
              </button>
            </div>

            {/* Lifetime */}
            <div className="border border-leather/30 rounded-md p-6 bg-paper-light hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-semibold text-ink mb-2">Lifetime</h3>
              <div className="text-3xl font-display font-bold text-ink mb-1">$199</div>
              <div className="text-xs text-ink-light line-through mb-3">Early bird: $149</div>
              <ul className="space-y-2 text-sm text-ink-light mb-6">
                <li>✓ All features forever</li>
                <li>✓ One-time payment</li>
                <li>✓ VIP support</li>
                <li>✓ Future updates</li>
              </ul>
              <button className="w-full py-2 bg-leather text-paper rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity">
                Get Lifetime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24 bg-paper-light">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-display font-semibold text-ink text-center mb-12"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Questions?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                How does it work?
              </h3>
              <p className="text-ink-light leading-relaxed">
                You answer deep questions about your current struggles and dreams. Our AI (powered by Claude) generates a letter from your future self with the perspective and wisdom you need. You choose when to receive the full letter.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                Can I read my letter immediately?
              </h3>
              <p className="text-ink-light leading-relaxed">
                You&apos;ll see a preview (first 200-300 words) right away. The full letter is time-locked and delivered via email at your chosen date — the magic is in the delayed reflection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                Is my data private?
              </h3>
              <p className="text-ink-light leading-relaxed">
                Absolutely. Your answers and letters are encrypted and only accessible by you. We never share or sell your data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                What if I want to cancel my subscription?
              </h3>
              <p className="text-ink-light leading-relaxed">
                You can cancel anytime. Your existing time capsules will still be delivered as scheduled.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-display font-semibold text-ink mb-2">
                Refund policy?
              </h3>
              <p className="text-ink-light leading-relaxed">
                30-day money-back guarantee, no questions asked. Email us and we&apos;ll refund immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-leather/20">
        <div className="max-w-6xl mx-auto text-center text-sm text-ink-light">
          <p className="mb-4">
            Built with care by someone who believes in the power of delayed gratification.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/legal" className="hover:text-ink transition-colors">Terms & Privacy</a>
            <a href="mailto:hello@tomorrowsletter.com" className="hover:text-ink transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
