import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle, Star } from 'lucide-react';

const services = [
  { num: '01', title: 'Online Marketing', desc: 'Data-backed strategies that drive targeted traffic and grow your digital presence.' },
  { num: '02', title: 'Business Promotion', desc: 'Increase brand visibility across major digital channels in Kenya and beyond.' },
  { num: '03', title: 'Customer Onboarding', desc: 'Structured programs to welcome, activate, and retain new clients from day one.' },
  { num: '04', title: 'Sales Support', desc: 'Dedicated support to help your team close deals and manage leads at scale.' },
  { num: '05', title: 'Lead Generation', desc: 'Identify, attract, and qualify high-intent prospects ready to convert.' },
  { num: '06', title: 'Tech Support', desc: 'Technology-enabled tools to streamline operations and boost efficiency.' },
];

const testimonials = [
  { name: 'James Mwangi', title: 'CEO, Mwangi Traders Ltd', location: 'Nairobi', text: 'Within 45 days we saw a 3x increase in inquiries. Their team is professional, responsive, and genuinely invested in your growth.' },
  { name: 'Amina Hassan', title: 'Founder, Aura Beauty Studio', location: 'Mombasa', text: 'Tapnovax held our hand through everything — from social pages to our first campaign. Sales have never been better.' },
  { name: 'Peter Otieno', title: 'Director, Otieno Logistics', location: 'Kisumu', text: 'Our team went from struggling to close deals to consistently hitting targets. I highly recommend Tapnovax to any serious business owner.' },
  { name: 'Grace Wambui', title: 'Owner, GW Properties', location: 'Thika', text: 'They built our entire online presence from scratch and we now get qualified leads every week. Very well organised.' },
  { name: 'Samuel Kipchoge', title: 'MD, Kipchoge Agro Supplies', location: 'Eldoret', text: 'Our customer base grew by 60% in three months. Excellent communication and transparent reporting throughout.' },
  { name: 'Faith Njeri', title: 'CEO, Njeri Events & Catering', location: 'Nakuru', text: 'Booking inquiries went from zero to dozens per month. They understand the Kenyan market and know what works here.' },
];

const stats = [
  { val: '150+', label: 'Businesses Served' },
  { val: '98%', label: 'Client Satisfaction' },
  { val: '60', label: 'Days Avg. to Results' },
  { val: '4.9', label: 'Average Rating' },
];

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Tell us about your business goals.' },
  { num: '02', title: 'Consultation', desc: 'We craft a tailored service plan.' },
  { num: '03', title: 'Onboarding', desc: 'Smooth setup with a dedicated coordinator.' },
  { num: '04', title: 'Results', desc: 'We execute, monitor, and report.' },
];

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-navy-950 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag text-blue-400 mb-6" style={{color: '#60a5fa'}}>
                <span className="w-4 h-px bg-blue-400 inline-block" />
                Digital Growth Partner — Mombasa, Kenya
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                Grow your<br/>
                business<br/>
                <span className="text-blue-400">digitally.</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
                Tapnovax Digital helps Kenyan businesses grow online — marketing, lead generation, sales support, and onboarding that delivers real results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary px-8 py-4 text-base">
                  Start a Conversation <ArrowRight size={17} />
                </Link>
                <Link to="/services" className="btn-outline-white px-8 py-4 text-base">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="hidden lg:grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy-950 p-10 hover:bg-navy-900 transition-colors">
                  <div className="text-5xl font-bold text-white mb-2">{s.val}</div>
                  <div className="text-white/40 text-sm tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
                <span className="w-4 h-px bg-blue-600 inline-block" />
                What We Do
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                Services built for<br/>real business growth
              </h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-sm font-semibold text-navy-950 hover:text-blue-600 transition-colors group shrink-0">
              View all services
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Service list — editorial numbered style */}
          <div className="divide-y divide-slate-100">
            {services.map((s) => (
              <div key={s.num} className="group grid grid-cols-12 gap-6 py-7 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors cursor-default">
                <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{s.num}</div>
                <div className="col-span-4 font-semibold text-navy-950 text-lg group-hover:text-blue-600 transition-colors">{s.title}</div>
                <div className="col-span-6 text-slate-500 text-sm leading-relaxed">{s.desc}</div>
                <div className="col-span-1 flex justify-end items-start pt-1">
                  <ArrowUpRight size={16} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              <span className="w-4 h-px bg-blue-400 inline-block" />
              The Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Simple. Structured.<br/>Effective.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.num} className="bg-navy-950 p-8 hover:bg-navy-900 transition-colors">
                <div className="text-6xl font-bold text-white/5 mb-6 font-mono">{s.num}</div>
                <div className="w-8 h-px bg-blue-500 mb-5" />
                <h3 className="font-bold text-white text-lg mb-3">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
                <span className="w-4 h-px bg-blue-600 inline-block" />
                Client Stories
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
                What our clients say
              </h2>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
              <span className="text-sm font-semibold text-slate-700 ml-2">4.9 average</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`bg-white rounded-2xl p-7 border border-slate-100 flex flex-col gap-5 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 ${i === 0 ? 'lg:col-span-1 border-blue-100 bg-blue-50' : ''}`}>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{t.title} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
                <span className="w-4 h-px bg-blue-600 inline-block" />
                Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 leading-tight mb-6">
                Built around your<br/>business goals
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10 text-base">
                We combine digital expertise with a structured service model to ensure every client sees measurable outcomes. From first inquiry to active campaign management, we stay fully engaged.
              </p>
              <div className="space-y-4 mb-10">
                {['Dedicated account management', 'Transparent progress reporting', 'Flexible engagement models', 'Results-focused approach', 'Scalable solutions for growing businesses', 'Kenya market expertise'].map((r) => (
                  <div key={r} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCircle size={12} className="text-blue-600" />
                    </div>
                    {r}
                  </div>
                ))}
              </div>
              <Link to="/register" className="btn-dark px-8 py-4 text-base">
                Get Started Today <ArrowRight size={17} />
              </Link>
            </div>

            {/* Dark panel */}
            <div className="bg-navy-950 rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-8 mb-10 relative">
                {[['150+', 'Clients Served'], ['98%', 'Satisfaction Rate'], ['60 days', 'Avg. Results'], ['4.9★', 'Rating']].map(([val, lab]) => (
                  <div key={lab}>
                    <div className="text-3xl font-bold text-white mb-1">{val}</div>
                    <div className="text-white/30 text-xs">{lab}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-8 space-y-6 relative">
                {testimonials.slice(0,2).map((t) => (
                  <div key={t.name} className="group">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-white/50 text-sm italic leading-relaxed">"{t.text.slice(0,90)}…"</p>
                    <div className="text-white/25 text-xs mt-2">— {t.name}, {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to grow<br/>your business?
            </h2>
            <p className="text-blue-100/70 mb-10 text-lg leading-relaxed max-w-xl">
              Join hundreds of Kenyan businesses using Tapnovax Digital to build their online presence, attract customers, and grow revenue.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-base inline-flex items-center gap-2">
                Create Free Account <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn-outline-white px-8 py-4 text-base">
                Talk to Us First
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
