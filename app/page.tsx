export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Paper Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none"
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
           }}
      />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-48 md:pt-40 md:pb-56 flex flex-col items-center justify-center text-center">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-leather/30 to-transparent" />

        <p
          className="text-xs uppercase tracking-[0.3em] text-ink-light/60 mb-8 font-ui"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          A Time Capsule for Your Soul
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-ink mb-8 max-w-5xl leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          A letter from the person
          <br />
          <span className="font-semibold italic">you're becoming</span>
        </h1>

        <div className="w-16 h-px bg-gold mb-8" />

        <p
          className="text-lg md:text-xl text-ink-light/80 mb-16 max-w-2xl leading-relaxed font-light"
          style={{ fontFamily: 'var(--font-family-ui)' }}
        >
          Answer questions your future self already knows the answers to.
          <br />
          Receive wisdom you can't see yet — delivered when you're ready.
        </p>

        <button
          className="group relative px-12 py-5 bg-paper border-2 border-ink text-ink font-ui font-medium text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-ink hover:text-paper hover:tracking-[0.25em] overflow-hidden"
          style={{
            fontFamily: 'var(--font-family-ui)',
            boxShadow: '4px 4px 0 0 rgba(44, 36, 22, 0.1)',
          }}
        >
          <span className="relative z-10">Begin Your Letter</span>
          <div className="absolute inset-0 bg-ink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>

        <p className="mt-8 text-xs text-ink-light/50 font-ui">
          Free • 3 time capsules • No credit card
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-6 py-32 bg-paper-light/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 border border-leather/20 rounded-full text-xs uppercase tracking-[0.25em] text-ink-light/70 mb-12 font-ui">
            The Magic of Waiting
          </div>

          <h2
            className="text-4xl md:text-5xl font-display font-light text-ink mb-12 leading-tight"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Some insights can only be seen
            <br />
            <span className="italic font-semibold">from the other side</span>
          </h2>

          <div className="prose prose-lg mx-auto">
            <p
              className="text-lg md:text-xl text-ink-light/70 leading-loose mb-8 font-light"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              You're stuck in a moment. You can't see the pattern yet.
              You don't have the perspective. That's okay.
            </p>
            <p
              className="text-lg md:text-xl text-ink-light/70 leading-loose font-light"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              Your future self does. And they're writing you a letter.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Timeline */}
      <section className="px-6 py-32 relative">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-display font-light text-ink text-center mb-24"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Your journey
          </h2>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leather/20 to-transparent" />

            {/* Step 1 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center text-3xl font-display font-light text-gold relative z-10 group-hover:border-gold transition-all duration-500 group-hover:shadow-lg">
                01
              </div>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                Reflect deeply
              </h3>
              <p className="text-base text-ink-light/70 leading-relaxed max-w-xs mx-auto font-ui">
                Answer questions about your struggles, fears, and dreams.
                Be honest. This is for you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center text-3xl font-display font-light text-gold relative z-10 group-hover:border-gold transition-all duration-500 group-hover:shadow-lg">
                02
              </div>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                AI writes back
              </h3>
              <p className="text-base text-ink-light/70 leading-relaxed max-w-xs mx-auto font-ui">
                Not generic advice. Real perspective from the person
                who lived through what you're going through.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center group">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center text-3xl font-display font-light text-gold relative z-10 group-hover:border-gold transition-all duration-500 group-hover:shadow-lg">
                03
              </div>
              <h3 className="text-2xl font-display font-semibold text-ink mb-4">
                Receive when ready
              </h3>
              <p className="text-base text-ink-light/70 leading-relaxed max-w-xs mx-auto font-ui">
                1 month. 1 year. 5 years. The letter arrives
                when you've forgotten — and most need to remember.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Letter Preview */}
      <section className="px-6 py-32 bg-paper-light/50">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-6 py-2 border border-leather/20 rounded-full text-xs uppercase tracking-[0.25em] text-ink-light/70 mb-12 font-ui">
            What to expect
          </div>

          <div
            className="relative bg-paper border border-leather/20 p-12 md:p-16 shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(26, 20, 16, 0.15), 0 0 1px rgba(26, 20, 16, 0.1)',
            }}
          >
            <div className="absolute -top-8 left-12 px-4 py-2 bg-paper border border-leather/30 text-xs text-ink-light/60 font-ui">
              Preview
            </div>

            <p
              className="text-sm text-ink-light/50 mb-6 font-body tracking-wide"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Received: January 15, 2025
            </p>

            <div
              className="text-lg md:text-xl leading-loose text-ink-light font-body space-y-6"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              <p>
                Hey. It's you — five years from now.
              </p>
              <p>
                I know where you are right now. I remember the weight of it.
                The not knowing. The fear that you're wasting time, that you've
                already missed your chance.
              </p>
              <p>
                I need you to hear this: <span className="italic">you're going to make it.</span>
              </p>
              <p className="text-ink-light/40 italic">
                [Continue reading in your time capsule...]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Premium Cards */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-display font-light text-ink mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Choose your depth
            </h2>
            <p className="text-lg text-ink-light/70 font-ui max-w-2xl mx-auto">
              Start free. Go deeper when ready.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Free */}
            <div className="relative bg-paper border border-leather/20 p-8 hover:shadow-2xl transition-all duration-500 group">
              <h3 className="text-2xl font-display font-semibold text-ink mb-3">Free</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-display font-light text-ink">$0</span>
              </div>
              <ul className="space-y-3 text-sm text-ink-light/80 mb-8 font-ui">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>3 time capsules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>10 questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Letter preview</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>1 year max</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-ink/20 text-ink text-sm font-semibold uppercase tracking-wider hover:bg-ink/5 transition-colors font-ui">
                Start Free
              </button>
            </div>

            {/* Monthly */}
            <div className="relative bg-paper border border-leather/30 p-8 hover:shadow-2xl transition-all duration-500 group">
              <h3 className="text-2xl font-display font-semibold text-ink mb-3">Monthly</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-display font-light text-ink">$10</span>
                <span className="text-sm text-ink-light/60 ml-2 font-ui">/month</span>
              </div>
              <ul className="space-y-3 text-sm text-ink-light/80 mb-8 font-ui">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Unlimited capsules</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>25 deep questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Full letter (1500w)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>5+ year delays</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gold text-ink text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors font-ui">
                Subscribe
              </button>
            </div>

            {/* Annual - Featured */}
            <div className="relative bg-ink text-paper border-2 border-ink p-8 shadow-2xl transform md:scale-105 group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-ink text-xs font-semibold uppercase tracking-wider rounded-full font-ui">
                Best Value
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3">Annual</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-display font-light">$69</span>
                <span className="text-sm text-paper/60 ml-2 font-ui">/year</span>
              </div>
              <p className="text-xs text-paper/50 mb-6 font-ui">Save $51 vs monthly</p>
              <ul className="space-y-3 text-sm text-paper/90 mb-8 font-ui">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>All Monthly features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Early access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Yearly ritual</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gold text-ink text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors font-ui">
                Get Annual
              </button>
            </div>

            {/* Lifetime */}
            <div className="relative bg-paper border border-leather/30 p-8 hover:shadow-2xl transition-all duration-500 group">
              <h3 className="text-2xl font-display font-semibold text-ink mb-3">Lifetime</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-display font-light text-ink">$199</span>
              </div>
              <p className="text-xs text-success line-through mb-6 font-ui">Early bird: $149</p>
              <ul className="space-y-3 text-sm text-ink-light/80 mb-8 font-ui">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Forever access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>All features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>VIP support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Future updates</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-leather text-paper text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity font-ui">
                One Payment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimal */}
      <section className="px-6 py-32 bg-paper-light/30">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-display font-light text-ink mb-16 text-center"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How does it work?",
                a: "You answer deep questions. AI (Claude) generates a letter from your future self. You choose when to receive the full version — the preview comes immediately, the full letter arrives when you're ready."
              },
              {
                q: "Can I read my letter now?",
                a: "You'll see a preview right away. The full letter is time-locked and delivered via email. The magic is in forgetting, then remembering."
              },
              {
                q: "Is my data private?",
                a: "Yes. Your answers are encrypted. We never share or sell your data. This is between you and your future self."
              },
              {
                q: "What if I want to cancel?",
                a: "Cancel anytime. Your existing time capsules will still be delivered as scheduled. No hard feelings."
              },
              {
                q: "Refund policy?",
                a: "30-day money-back guarantee. If it doesn't resonate, email us. We'll refund immediately."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-leather/10 pb-8">
                <h3 className="text-xl font-display font-semibold text-ink mb-3">
                  {faq.q}
                </h3>
                <p className="text-base text-ink-light/70 leading-relaxed font-ui">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, var(--gold-cta) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}
        />
        <div className="relative z-10">
          <h2
            className="text-4xl md:text-6xl font-display font-light text-ink mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Your future self
            <br />
            <span className="italic font-semibold">is waiting</span>
          </h2>

          <button
            className="group relative px-12 py-5 bg-ink text-paper font-ui font-medium text-sm uppercase tracking-[0.2em] hover:tracking-[0.25em] transition-all duration-500"
            style={{
              fontFamily: 'var(--font-family-ui)',
              boxShadow: '8px 8px 0 0 rgba(44, 36, 22, 0.1)',
            }}
          >
            <span className="relative z-10">Write Your First Letter</span>
          </button>

          <p className="mt-8 text-sm text-ink-light/60 font-ui">
            3 free time capsules • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-leather/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-2xl font-display font-semibold text-ink mb-4">
                Tomorrow's Letter
              </h4>
              <p className="text-sm text-ink-light/70 leading-relaxed font-ui">
                A time capsule for your soul. Built with care by someone who believes in delayed gratification.
              </p>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider text-ink-light/60 mb-4 font-ui">Product</h5>
              <ul className="space-y-2 text-sm text-ink-light/70 font-ui">
                <li><a href="#" className="hover:text-ink transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-wider text-ink-light/60 mb-4 font-ui">Legal</h5>
              <ul className="space-y-2 text-sm text-ink-light/70 font-ui">
                <li><a href="/legal" className="hover:text-ink transition-colors">Terms & Privacy</a></li>
                <li><a href="mailto:hello@tomorrowsletter.com" className="hover:text-ink transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-leather/10">
            <p className="text-xs text-ink-light/50 font-ui">
              © 2025 Tomorrow's Letter. Made with patience.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
