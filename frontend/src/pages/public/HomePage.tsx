import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, BarChart2, Users, Zap, Globe,
  MessageSquare, TrendingUp, ShieldCheck, Star
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Online Marketing', desc: 'Drive targeted traffic and grow your digital presence with data-backed marketing strategies.' },
  { icon: TrendingUp, title: 'Business Promotion', desc: 'Increase brand awareness and visibility across all major digital channels.' },
  { icon: Users, title: 'Customer Onboarding', desc: 'Structured programs to welcome, activate, and retain new clients from day one.' },
  { icon: MessageSquare, title: 'Sales Support', desc: 'Dedicated support to help your team close deals and manage leads at scale.' },
  { icon: BarChart2, title: 'Lead Generation', desc: 'Identify, attract, and qualify high-intent prospects ready to convert.' },
  { icon: Zap, title: 'Business Technology Support', desc: 'Technology-enabled tools to streamline operations and boost efficiency.' },
];

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Tell us about your business and what digital support you need.' },
  { num: '02', title: 'Consultation', desc: 'Our team reviews your needs and crafts a tailored service plan.' },
  { num: '03', title: 'Onboarding', desc: 'Get onboarded smoothly with a dedicated account coordinator.' },
  { num: '04', title: 'Ongoing Support', desc: 'We execute, monitor, and report — you stay focused on your business.' },
];

const reasons = [
  'Dedicated account management',
  'Transparent progress reporting',
  'Flexible engagement models',
  'Experienced digital specialists',
  'Results-focused approach',
  'Scalable solutions for growing businesses',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3.5 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-blue-300 text-xs font-medium">Registered Digital Services Provider</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Grow Your Business<br />
              <span className="text-blue-400">With Smart Digital</span><br />
              Support
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
              Tapnovax Digital helps businesses improve online visibility, attract customers, onboard clients, and manage digital sales support through simple technology-enabled services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="btn-primary px-6 py-3 text-sm font-semibold">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-white px-6 py-3 text-sm font-semibold">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-outline-white px-6 py-3 text-sm font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Our Services</div>
            <h2 className="text-3xl font-bold text-navy-900">Digital services built for business growth</h2>
            <p className="text-gray-500 mt-3 max-w-xl">Everything your business needs to establish, grow, and maintain a strong digital presence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card p-6 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy-100 transition-colors">
                    <Icon size={20} className="text-navy-700" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">View All Services <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Process</div>
            <h2 className="text-3xl font-bold text-navy-900">How we work with you</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="card p-6">
                <div className="text-3xl font-bold text-navy-100 mb-3">{s.num}</div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Why Tapnovax</div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Built around your business goals</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We combine digital expertise with a structured service delivery model to ensure every client sees measurable outcomes. From your first inquiry to active campaign management, we stay engaged.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((r) => (
                  <div key={r} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-950 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[['150+', 'Clients Served'], ['98%', 'Satisfaction Rate'], ['12+', 'Service Types'], ['4.9', 'Avg. Rating']].map(([val, lab]) => (
                  <div key={lab}>
                    <div className="text-3xl font-bold text-blue-400">{val}</div>
                    <div className="text-white/50 text-sm mt-1">{lab}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-white/70 text-sm italic">"Tapnovax transformed our online presence in 60 days. Measurable results from day one."</p>
                <div className="text-white/40 text-xs mt-2">— Enterprise Client, Nairobi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to grow your business?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Join hundreds of businesses using Tapnovax Digital to build their online presence and grow their customer base.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/register" className="bg-white text-navy-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Get Started Free
            </Link>
            <Link to="/contact" className="btn-outline-white px-6 py-3 text-sm font-semibold">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
