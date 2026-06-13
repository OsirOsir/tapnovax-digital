import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart2, Users, Zap, Globe, MessageSquare, TrendingUp, Star, ChevronRight } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Online Marketing', desc: 'Drive targeted traffic and grow your digital presence with data-backed strategies tailored to your market.' },
  { icon: TrendingUp, title: 'Business Promotion', desc: 'Increase brand visibility and awareness across major digital channels in Kenya and beyond.' },
  { icon: Users, title: 'Customer Onboarding', desc: 'Structured programs to welcome, activate, and retain new clients from day one.' },
  { icon: MessageSquare, title: 'Sales Support', desc: 'Dedicated support to help your team close deals and manage leads at scale.' },
  { icon: BarChart2, title: 'Lead Generation', desc: 'Identify, attract, and qualify high-intent prospects who are ready to convert.' },
  { icon: Zap, title: 'Tech Support', desc: 'Technology-enabled tools to streamline your operations and boost business efficiency.' },
];

const testimonials = [
  {
    name: 'James Mwangi',
    title: 'CEO, Mwangi Traders Ltd',
    location: 'Nairobi',
    rating: 5,
    text: 'Tapnovax Digital completely transformed how we reach our customers online. Within 45 days we saw a 3x increase in inquiries. Their team is professional, responsive, and genuinely invested in your growth.',
  },
  {
    name: 'Amina Hassan',
    title: 'Founder, Aura Beauty Studio',
    location: 'Mombasa',
    rating: 5,
    text: 'I had no idea where to start with digital marketing. Tapnovax held our hand through everything — from setting up our social pages to running our first campaign. Sales have never been better.',
  },
  {
    name: 'Peter Otieno',
    title: 'Director, Otieno Logistics',
    location: 'Kisumu',
    rating: 5,
    text: 'The sales support service alone was worth every shilling. Our team went from struggling to close deals to consistently hitting targets. I highly recommend Tapnovax to any serious business owner.',
  },
  {
    name: 'Grace Wambui',
    title: 'Owner, GW Properties',
    location: 'Thika',
    rating: 5,
    text: 'Professional, fast, and results-driven. They built our entire online presence from scratch and we now get qualified leads every week. The onboarding process was smooth and very well organised.',
  },
  {
    name: 'Samuel Kipchoge',
    title: 'MD, Kipchoge Agro Supplies',
    location: 'Eldoret',
    rating: 5,
    text: 'We were skeptical about digital marketing but Tapnovax showed us real numbers. Our customer base grew by 60% in three months. Excellent communication and transparent reporting throughout.',
  },
  {
    name: 'Faith Njeri',
    title: 'CEO, Njeri Events & Catering',
    location: 'Nakuru',
    rating: 5,
    text: 'Booking inquiries through our website went from zero to dozens per month after Tapnovax worked on our online marketing. They understand the Kenyan market and know what works here.',
  },
];

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Tell us about your business and what digital support you need.' },
  { num: '02', title: 'Consultation', desc: 'Our team reviews your needs and crafts a tailored service plan.' },
  { num: '03', title: 'Onboarding', desc: 'Get set up smoothly with a dedicated account coordinator.' },
  { num: '04', title: 'Ongoing Support', desc: 'We execute, monitor, and report — you stay focused on your business.' },
];

const stats = [
  { val: '150+', label: 'Businesses Served' },
  { val: '98%', label: 'Client Satisfaction' },
  { val: '60 days', label: 'Avg. Time to Results' },
  { val: '4.9★', label: 'Average Rating' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wide">Registered Digital Services Provider — Mombasa, Kenya</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Your Business.<br />
              <span className="text-blue-400">Digital. Growing.</span><br />
              Results.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-2xl">
              Tapnovax Digital helps Kenyan businesses grow online — through marketing, lead generation, sales support, and customer onboarding that actually delivers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary px-7 py-3.5 text-sm font-semibold">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-white px-7 py-3.5 text-sm font-semibold">
                See Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="py-6 px-6 first:pl-0">
                  <div className="text-2xl font-bold text-blue-400">{s.val}</div>
                  <div className="text-white/40 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">What We Do</div>
              <h2 className="text-4xl font-bold text-navy-900 leading-tight">Digital services built<br />for real business growth</h2>
            </div>
            <Link to="/services" className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0">
              View all services <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group border border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-200">
                  <div className="w-11 h-11 bg-navy-950 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-base">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">The Process</div>
            <h2 className="text-4xl font-bold text-white">Simple. Structured. Effective.</h2>
            <p className="text-white/40 mt-3 max-w-lg mx-auto text-sm">From first contact to ongoing results — here's exactly how we work with you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.num} className="bg-navy-950 p-8">
                <div className="text-5xl font-bold text-blue-500/20 mb-4">{s.num}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Client Stories</div>
            <h2 className="text-4xl font-bold text-navy-900">What our clients say</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">Real results from real businesses across Kenya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.title} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TAPNOVAX ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">Why Choose Us</div>
              <h2 className="text-4xl font-bold text-navy-900 mb-5 leading-tight">Built around your<br />business goals</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                We combine digital expertise with a structured service delivery model to ensure every client sees measurable outcomes. From your first inquiry to active campaign management, we stay fully engaged.
              </p>
              <div className="space-y-3">
                {['Dedicated account management', 'Transparent progress reporting', 'Flexible engagement models', 'Experienced digital specialists', 'Results-focused approach', 'Scalable solutions for growing businesses'].map((r) => (
                  <div key={r} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/register" className="btn-primary px-7 py-3.5 text-sm font-semibold">
                  Get Started Today <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-8 mb-8">
                {[['150+', 'Clients Served'], ['98%', 'Satisfaction Rate'], ['12+', 'Service Types'], ['4.9★', 'Avg. Rating']].map(([val, lab]) => (
                  <div key={lab}>
                    <div className="text-3xl font-bold text-blue-400">{val}</div>
                    <div className="text-white/40 text-sm mt-1">{lab}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6 space-y-5">
                {testimonials.slice(0, 2).map((t) => (
                  <div key={t.name}>
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-white/60 text-sm italic leading-relaxed">"{t.text.slice(0, 100)}…"</p>
                    <div className="text-white/30 text-xs mt-2">— {t.name}, {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to grow your business?</h2>
          <p className="text-blue-100/70 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Join hundreds of Kenyan businesses using Tapnovax Digital to build their online presence, attract customers, and grow revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/register" className="bg-white text-blue-600 font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Create Free Account
            </Link>
            <Link to="/contact" className="border border-white/40 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
