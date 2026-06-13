import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'KES 9,900',
    period: '/month',
    desc: 'Perfect for small businesses just getting started online.',
    highlight: false,
    badge: null,
    features: [
      'Social media setup (2 platforms)',
      'Monthly content calendar',
      '8 branded posts per month',
      'Basic SEO setup',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Get Started',
    link: '/contact',
  },
  {
    name: 'Growth',
    price: 'KES 24,900',
    period: '/month',
    desc: 'For growing businesses that need real digital traction and lead flow.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Social media management (4 platforms)',
      '20 branded posts per month',
      'Google Ads campaign management',
      'Lead generation & qualification',
      'Customer onboarding support',
      'Bi-weekly performance reports',
      'WhatsApp & email support',
      'Dedicated account coordinator',
    ],
    cta: 'Start Growing',
    link: '/contact',
  },
  {
    name: 'Business',
    price: 'KES 49,900',
    period: '/month',
    desc: 'Full-service digital management for established businesses ready to scale.',
    highlight: false,
    badge: null,
    features: [
      'Full social media management (6 platforms)',
      '40+ branded posts per month',
      'Google & Meta Ads management',
      'Advanced lead generation system',
      'Full sales support & CRM setup',
      'Weekly reporting & strategy calls',
      'Priority WhatsApp & phone support',
      'Dedicated account manager',
      'Competitor analysis & insights',
    ],
    cta: 'Talk to Us',
    link: '/contact',
  },
];

const addons = [
  { name: 'Website Design & Development', price: 'From KES 35,000', desc: 'Professional business website built and deployed.' },
  { name: 'Logo & Brand Identity', price: 'From KES 8,500', desc: 'Logo, colours, and brand guidelines for your business.' },
  { name: 'WhatsApp Business Setup', price: 'KES 4,500', desc: 'Full WhatsApp Business account setup and automation.' },
  { name: 'Google My Business Setup', price: 'KES 3,500', desc: 'Get found on Google Maps and local search.' },
  { name: 'Video Content (4 videos/month)', price: 'KES 18,000', desc: 'Short-form video content for Reels, TikTok, and YouTube Shorts.' },
  { name: 'Email Marketing Setup', price: 'From KES 6,000', desc: 'Email list setup, templates, and monthly campaigns.' },
];

const faqs = [
  { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute consultation to understand your business needs before recommending a plan.' },
  { q: 'Are there any setup fees?', a: 'No hidden setup fees. The price you see is what you pay monthly. One-time services like website development are quoted separately.' },
  { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
  { q: 'Do you work with businesses outside Mombasa?', a: 'Yes. We work with businesses across Kenya — Nairobi, Kisumu, Nakuru, Eldoret, and more. All services are delivered digitally.' },
  { q: 'How soon will I see results?', a: 'Most clients start seeing measurable improvements in online visibility and inquiries within 30–60 days of onboarding.' },
  { q: 'What payment methods do you accept?', a: 'We accept M-Pesa, bank transfer, and major debit/credit cards.' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Pricing</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Simple, transparent pricing</h1>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            No contracts. No hidden fees. Choose a plan that fits your business and scale as you grow.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 flex flex-col relative ${plan.highlight ? 'bg-navy-950 text-white shadow-2xl shadow-navy-950/30 scale-105' : 'bg-white border border-gray-100'}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                      <Star size={10} className="fill-white" /> {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-blue-400' : 'text-blue-600'}`}>{plan.name}</div>
                  <div className="flex items-end gap-1 mb-3">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-navy-900'}`}>{plan.price}</span>
                    <span className={`text-sm pb-1 ${plan.highlight ? 'text-white/40' : 'text-gray-400'}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/50' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                <div className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-blue-400' : 'text-green-500'}`} />
                      <span className={plan.highlight ? 'text-white/70' : 'text-gray-600'}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={plan.link}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${plan.highlight ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-navy-950 hover:bg-navy-800 text-white'}`}>
                  {plan.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">All prices are in Kenyan Shillings (KES). Monthly billing. Cancel anytime.</p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Add-ons</div>
            <h2 className="text-3xl font-bold text-navy-900">Enhance your plan</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">One-time or recurring add-ons you can bolt onto any plan.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addons.map((a) => (
              <div key={a.name} className="border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-navy-900 text-sm">{a.name}</h3>
                  <Zap size={14} className="text-blue-500 shrink-0 mt-0.5" />
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{a.desc}</p>
                <div className="text-blue-600 font-bold text-sm">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">FAQ</div>
            <h2 className="text-3xl font-bold text-navy-900">Common questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Not sure which plan is right for you?</h2>
          <p className="text-blue-100/70 mb-8 text-sm max-w-lg mx-auto">Talk to our team. We'll help you figure out exactly what your business needs — no pressure.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-white text-blue-600 font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/254769989480?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20pricing." target="_blank" rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.856L.044 23.5l5.789-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.385l-.36-.214-3.733.946.986-3.629-.234-.373A9.818 9.818 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
