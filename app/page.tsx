export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Texture Layers */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(26, 20, 16, 0.02) 100%)',
        }}
      />

      {/* SECTION 1: HERO - User Regret + Founder Story Hybrid */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
          {/* Overline */}
          <p
            className="text-[11px] uppercase tracking-[0.4em] text-ink-light/40 font-ui"
            style={{ fontFamily: 'var(--font-family-ui)' }}
          >
            What if you had written 5 years ago?
          </p>

          {/* Main Headline - User Regret */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-ink leading-[1.15] tracking-tight"
            style={{
              fontFamily: 'var(--font-family-display)',
              fontWeight: 300
            }}
          >
            You'd know exactly
            <br />
            where you were.
            <br />
            <span className="text-ink-light/60">You didn't write it.</span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex justify-center py-4">
            <div className="w-1 h-1 rounded-full bg-gold opacity-60" />
          </div>

          {/* Story - Pivot to Founder */}
          <div
            className="text-lg md:text-xl font-body text-ink-light/80 leading-loose max-w-xl mx-auto space-y-4"
            style={{
              fontFamily: 'var(--font-family-body)',
              lineHeight: 1.8
            }}
          >
            <p>Neither did I.</p>
            <p>I wrote to my future self five years ago. Then I lost it.</p>
            <p>I looked for a tool that would keep it safe. Nothing existed.</p>
            <p className="font-semibold text-ink">So I built it for both of us.</p>
          </div>

          {/* Value Prop - Urgency */}
          <div className="pt-4">
            <p
              className="text-base md:text-lg font-ui text-ink-light/70 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.7 }}
            >
              You can't go back.
              <br />
              But you can write today.
              <br />
              <span className="font-semibold text-ink">Five years from now, you'll be glad you did.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 text-base font-ui text-ink border-b-2 border-ink pb-1 hover:border-gold hover:text-gold transition-all duration-500"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              <span>Write your first letter</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Small Text */}
          <p className="text-xs font-ui text-ink-light/50" style={{ fontFamily: 'var(--font-family-ui)' }}>
            1 free letter • No credit card • Delivered when you choose
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-ink-light/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM - Emotional Mirror */}
      <section className="relative py-32 px-6 bg-paper-light/50">
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-12 border-l-2 border-gold/30">
            <div className="absolute -left-8 top-0 text-6xl text-gold/20 font-display" style={{ fontFamily: 'var(--font-family-display)' }}>"</div>

            <blockquote
              className="text-2xl md:text-4xl font-display italic text-ink leading-relaxed mb-8"
              style={{
                fontFamily: 'var(--font-family-display)',
                lineHeight: 1.6
              }}
            >
              You're stuck. You can't see the pattern.
              You don't have perspective yet.
              <br />
              <br />
              That's not weakness—that's where you are.
            </blockquote>

            <p
              className="text-sm font-ui text-ink-light/60 tracking-wide"
              style={{ fontFamily: 'var(--font-family-ui)' }}
            >
              — Someone who's been there
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION - Time Capsule Timeline */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-display font-light text-ink text-center mb-24"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line Desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-leather/20 to-transparent" style={{ top: '80px' }} />

            {/* Card 1: Past You */}
            <div className="relative group">
              <div
                className="bg-paper border border-leather/20 p-12 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transform: 'rotate(-0.5deg)',
                  boxShadow: '0 4px 8px rgba(26, 20, 16, 0.08), 0 8px 16px rgba(26, 20, 16, 0.12)',
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center relative z-10">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-display font-semibold text-ink text-center mb-4" style={{ fontFamily: 'var(--font-family-display)' }}>
                  Reflect deeply
                </h3>

                <p className="text-base font-ui text-ink-light/70 text-center leading-relaxed" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.7 }}>
                  Answer 25 questions about your struggles, fears, and dreams. Be honest. This is for you.
                </p>
              </div>
            </div>

            {/* Card 2: Today */}
            <div className="relative group">
              <div
                className="bg-paper border border-leather/20 p-12 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transform: 'rotate(0.3deg)',
                  boxShadow: '0 4px 8px rgba(26, 20, 16, 0.08), 0 8px 16px rgba(26, 20, 16, 0.12)',
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center relative z-10">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-display font-semibold text-ink text-center mb-4" style={{ fontFamily: 'var(--font-family-display)' }}>
                  AI writes back
                </h3>

                <p className="text-base font-ui text-ink-light/70 text-center leading-relaxed" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.7 }}>
                  Not generic advice. Real perspective from the person who lived through what you're facing.
                </p>
              </div>
            </div>

            {/* Card 3: Future You */}
            <div className="relative group">
              <div
                className="bg-paper border border-leather/20 p-12 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transform: 'rotate(-0.3deg)',
                  boxShadow: '0 4px 8px rgba(26, 20, 16, 0.08), 0 8px 16px rgba(26, 20, 16, 0.12)',
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-paper-light border-2 border-leather/30 flex items-center justify-center relative z-10">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-display font-semibold text-ink text-center mb-4" style={{ fontFamily: 'var(--font-family-display)' }}>
                  Receive when ready
                </h3>

                <p className="text-base font-ui text-ink-light/70 text-center leading-relaxed" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.7 }}>
                  1 month. 1 year. 5 years. The letter arrives when you've forgotten—and most need to remember.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROOF - Example Letter Fragment */}
      <section className="relative py-32 px-6 bg-ink">
        <div className="max-w-4xl mx-auto">
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
            }}
          />

          <div className="relative">
            {/* Letter Card */}
            <div
              className="bg-paper p-12 md:p-20 relative"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0, 0, 0, 0.2)',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence baseFrequency=\'0.04\' numOctaves=\'5\' /%3E%3CfeColorMatrix values=\'0 0 0 0 0.96, 0 0 0 0 0.95, 0 0 0 0 0.92, 0 0 0 1 0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23paper)\' opacity=\'0.3\'/%3E%3C/svg%3E")',
              }}
            >
              {/* Date stamp */}
              <p
                className="text-sm font-body text-ink-light/50 mb-8 tracking-wide text-right"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                January 15, 2030
              </p>

              {/* Letter content */}
              <div
                className="space-y-6 text-lg md:text-xl font-body text-ink-light"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  lineHeight: 1.9
                }}
              >
                <p>Hey.</p>
                <p>
                  It's you—five years from now. I know where you are right now.
                  I remember the weight of it.
                </p>
                <p>
                  The not knowing. The fear that you're wasting time, that you've
                  already missed your chance. The way you lie awake wondering if
                  this is all there is.
                </p>
                <p className="italic font-semibold">
                  I need you to hear this: you're going to make it.
                </p>

                {/* Blur overlay */}
                <div className="relative h-32 -mx-12 md:-mx-20 mt-8">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper" />
                  <p className="blur-sm opacity-40">
                    Not in the way you think. Not by forcing it. But you'll...
                  </p>
                </div>
              </div>

              {/* Unlock overlay */}
              <div className="text-center mt-8">
                <p
                  className="text-2xl font-display italic text-ink-light/60"
                  style={{ fontFamily: 'var(--font-family-display)' }}
                >
                  Continue reading in your time capsule...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING - Investment Cards */}
      <section className="relative py-32 px-6" id="start">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-display font-light text-ink mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Choose your depth
            </h2>
            <p className="text-lg font-ui text-ink-light/70 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-family-ui)' }}>
              Start free. Go deeper when ready.
            </p>
          </div>

          {/* Pricing Grid - 2 Tiers */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-paper border border-leather/20 p-10 hover:shadow-xl transition-all duration-500">
              <div className="text-sm uppercase tracking-[0.3em] text-ink-light/60 mb-4 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Start Here
              </div>

              <h3 className="text-3xl font-display font-semibold text-ink mb-2" style={{ fontFamily: 'var(--font-family-display)' }}>Free</h3>

              <div className="flex items-baseline mb-8">
                <span className="text-7xl font-display font-light text-ink" style={{ fontFamily: 'var(--font-family-display)', fontWeight: 300 }}>$0</span>
              </div>

              <ul className="space-y-4 mb-10 text-base font-ui text-ink-light/80" style={{ fontFamily: 'var(--font-family-ui)' }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>1 letter (lifetime)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>10 questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Full letter (1000 words)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 3 months ahead</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Email delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-ink-light/30 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-ink-light/50">Unlock early: $49</span>
                </li>
              </ul>

              <button className="w-full py-4 border border-ink/20 text-ink text-sm font-semibold uppercase tracking-wider hover:bg-ink/5 transition-colors font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Begin Journey
              </button>
            </div>

            {/* Lifetime - Featured */}
            <div className="relative bg-ink text-paper border-2 border-gold p-10 transform md:scale-105 shadow-2xl">
              {/* Early Bird Badge - Smaller, cleaner */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold text-ink text-[10px] font-semibold uppercase tracking-[0.25em] rounded-full font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Early Bird
              </div>

              <div className="text-sm uppercase tracking-[0.3em] text-paper/60 mb-4 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Best Value
              </div>

              <h3 className="text-3xl font-display font-semibold mb-3" style={{ fontFamily: 'var(--font-family-display)' }}>Lifetime</h3>

              {/* Price with strikethrough */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-7xl font-display font-light" style={{ fontFamily: 'var(--font-family-display)', fontWeight: 300 }}>$79</span>
                <span className="text-3xl font-display text-paper/40 line-through" style={{ fontFamily: 'var(--font-family-display)', fontWeight: 300 }}>$99</span>
              </div>
              <p className="text-xs text-paper/50 mb-1 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>One payment, forever</p>
              <p className="text-xs text-gold uppercase tracking-wider mb-8 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>First 100 users only</p>

              <ul className="space-y-4 mb-10 text-base text-paper/90" style={{ fontFamily: 'var(--font-family-ui)' }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited letters (forever)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>20 deep questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Full letter (1500 words)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited years (1-50 years)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Upload photos (10 per letter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Upload video (2 min per letter)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlock early: FREE</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Future updates included</span>
                </li>
              </ul>

              <button className="w-full py-4 bg-gold text-ink text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Get Lifetime Access
              </button>
            </div>
          </div>

          {/* Video Feature Value Prop */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <p className="text-base font-ui text-ink-light/70 italic leading-relaxed" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.8 }}>
              Capture your voice, your face, your energy. Watch yourself from 5 years ago.
              <br />
              You'll barely recognize who you were.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRUST - Quality Indicators */}
      <section className="relative py-24 px-6 bg-paper-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm font-ui text-ink-light/70" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Powered by Claude
                <br />
                <span className="text-xs text-ink-light/50">(Anthropic AI)</span>
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm font-ui text-ink-light/70" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Encrypted & private
                <br />
                <span className="text-xs text-ink-light/50">Your data stays yours</span>
              </p>
            </div>

            <div>
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="text-sm font-ui text-ink-light/70" style={{ fontFamily: 'var(--font-family-ui)' }}>
                30-day refund
                <br />
                <span className="text-xs text-ink-light/50">No questions asked</span>
              </p>
            </div>
          </div>

          {/* Founder Story */}
          <div className="mt-20 pt-12 border-t border-leather/10">
            <p className="text-base font-ui italic text-ink-light/60 text-center max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.8 }}>
              Built by someone who lost 100kg and learned that perspective only comes
              after you've lived through what you're going through. This isn't theory—it's
              what I needed five years ago.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="relative py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-display font-light text-ink mb-16 text-center"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Questions
          </h2>

          <div className="space-y-12">
            {[
              {
                q: "How does time-locking work?",
                a: "Your letter is stored encrypted on our servers and only sent to you on the date you choose. The full letter arrives via email when you're ready. It's like FutureMe, but with AI perspective instead of just your past words."
              },
              {
                q: "Can I unlock my letter early?",
                a: "Free users can unlock early for $49. Lifetime members can unlock anytime for free. But we recommend waiting—the magic is in forgetting what you wrote, then rediscovering it when you've changed."
              },
              {
                q: "Can I add photos or video?",
                a: "Yes, Lifetime plan includes up to 10 photos and 2-minute video per letter. Capture your voice, your face, your energy. Watch yourself from 5 years ago—you'll barely recognize who you were."
              },
              {
                q: "What if I lose access to my email?",
                a: "You can update your email anytime in settings. We'll also send reminder emails 1 week before delivery. If you lose access, contact support and we'll verify identity and update it."
              },
              {
                q: "Is my data secure?",
                a: "Yes. All answers and letters are encrypted at rest. We use industry-standard security. Your data is never shared, sold, or used for anything except generating your letter. Read our privacy policy for details."
              },
              {
                q: "What if I want a refund?",
                a: "30-day unconditional refund for Lifetime plan. Email us, we'll refund immediately. No questions, no hard feelings. This product isn't for everyone, and that's okay."
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-leather/10 pb-8">
                <h3
                  className="text-xl md:text-2xl font-display font-semibold text-ink mb-4"
                  style={{ fontFamily: 'var(--font-family-display)' }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-base font-ui text-ink-light/70 leading-relaxed pl-0 md:pl-6"
                  style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.8 }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--gold-cta) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <h2
            className="text-5xl md:text-7xl font-display font-light text-ink leading-tight"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            The person you're becoming
            <br />
            <span className="font-semibold italic">is waiting to meet you</span>
          </h2>

          <div>
            <a
              href="#start"
              className="inline-block group"
            >
              <span
                className="text-2xl font-display italic text-ink border-b-2 border-ink pb-2 group-hover:border-gold group-hover:text-gold transition-all duration-500"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Write your first letter →
              </span>
            </a>
          </div>

          <p className="text-sm font-ui text-ink-light/60" style={{ fontFamily: 'var(--font-family-ui)' }}>
            1 free letter • No credit card required • Private & secure
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 py-16 border-t border-leather/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h4
                className="text-xl font-display font-semibold text-ink mb-4"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Tomorrow's Letter
              </h4>
              <p className="text-sm font-ui text-ink-light/70 leading-relaxed max-w-md" style={{ fontFamily: 'var(--font-family-ui)', lineHeight: 1.7 }}>
                A time capsule for your soul. Write to your future self, receive wisdom
                when you're ready. Built with care for those who value delayed gratification.
              </p>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider text-ink-light/60 mb-4 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Product
              </h5>
              <ul className="space-y-2 text-sm font-ui text-ink-light/70" style={{ fontFamily: 'var(--font-family-ui)' }}>
                <li><a href="#" className="hover:text-ink transition-colors">How it works</a></li>
                <li><a href="#start" className="hover:text-ink transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-ink transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider text-ink-light/60 mb-4 font-ui" style={{ fontFamily: 'var(--font-family-ui)' }}>
                Legal
              </h5>
              <ul className="space-y-2 text-sm font-ui text-ink-light/70" style={{ fontFamily: 'var(--font-family-ui)' }}>
                <li><a href="/legal" className="hover:text-ink transition-colors">Terms & Privacy</a></li>
                <li><a href="mailto:hello@tomorrowsletter.com" className="hover:text-ink transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-leather/10">
            <p className="text-xs font-ui text-ink-light/50" style={{ fontFamily: 'var(--font-family-ui)' }}>
              © 2025 Tomorrow's Letter. Made with patience.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
