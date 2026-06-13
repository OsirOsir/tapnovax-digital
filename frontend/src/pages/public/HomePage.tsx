import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const serviceSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const tickerItems = ['online marketing', 'lead generation', 'sales support', 'customer onboarding', 'business promotion', 'digital growth'];

const services = [
  { num: '01', title: 'Online Marketing', desc: 'Data-backed strategies that drive targeted traffic and grow your digital presence across all major platforms.' },
  { num: '02', title: 'Business Promotion', desc: 'Increase brand visibility and awareness across major digital channels in Kenya and beyond.' },
  { num: '03', title: 'Customer Onboarding', desc: 'Structured programs to welcome, activate, and retain new clients from day one.' },
  { num: '04', title: 'Sales Support', desc: 'Dedicated support to help your team close deals and manage leads at scale.' },
  { num: '05', title: 'Lead Generation', desc: 'Identify, attract, and qualify high-intent prospects who are ready to convert.' },
  { num: '06', title: 'Tech Support', desc: 'Technology-enabled tools to streamline your operations and boost business efficiency.' },
];

const testimonials = [
  { name: 'James Mwangi', title: 'CEO, Mwangi Traders Ltd', location: 'Nairobi', text: 'Within 45 days we saw a 3x increase in inquiries. Professional, responsive, and genuinely invested in your growth.' },
  { name: 'Amina Hassan', title: 'Founder, Aura Beauty Studio', location: 'Mombasa', text: 'Tapnovax held our hand through everything. From social pages to our first campaign. Sales have never been better.' },
  { name: 'Peter Otieno', title: 'Director, Otieno Logistics', location: 'Kisumu', text: 'Our team went from struggling to close deals to consistently hitting targets. Highly recommend to any serious business owner.' },
  { name: 'Grace Wambui', title: 'Owner, GW Properties', location: 'Thika', text: 'Built our entire online presence from scratch. We now get qualified leads every week. Very well organised.' },
  { name: 'Samuel Kipchoge', title: 'MD, Kipchoge Agro Supplies', location: 'Eldoret', text: 'Customer base grew by 60% in three months. Excellent communication and transparent reporting throughout.' },
  { name: 'Faith Njeri', title: 'CEO, Njeri Events & Catering', location: 'Nakuru', text: 'Booking inquiries went from zero to dozens per month. They understand the Kenyan market.' },
];

const steps = [
  { num: '01', title: 'Submit Inquiry', desc: 'Tell us your business goals and which services you need.' },
  { num: '02', title: 'Consultation', desc: 'Our team crafts a tailored service plan for your business.' },
  { num: '03', title: 'Onboarding', desc: 'Smooth setup with a dedicated account coordinator.' },
  { num: '04', title: 'Results >>>', desc: 'We execute, monitor, and report — you stay focused on business.' },
];

export default function HomePage() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % tickerItems.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-slate-100 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              {/* Ticker */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">&gt;&gt;&gt; Accelerating</span>
                <div className="overflow-hidden h-5 flex-1 max-w-[240px]">
                  <div className="transition-transform duration-500" style={{transform: `translateY(-${tick * 100}%)`}}>
                    {tickerItems.map((item) => (
                      <div key={item} className="h-5 flex items-center">
                        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] tracking-tight mb-8">
                Grow your<br/>
                business<br/>
                <span className="text-blue-600">digitally.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-10">
                Tapnovax Digital helps Kenyan businesses grow online through marketing, lead generation, sales support, and customer onboarding that delivers real, measurable results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-dark px-8 py-4 text-sm">
                  contact us &gt;&gt;&gt;
                </Link>
                <Link to="/services" className="btn-outline px-8 py-4 text-sm">
                  our services
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                {[['150+', 'Businesses Served'], ['98%', 'Client Satisfaction'], ['60', 'Days Avg. to Results'], ['4.9★', 'Average Rating']].map(([val, lab]) => (
                  <div key={lab} className="bg-white p-8 hover:bg-slate-50 transition-colors">
                    <div className="text-4xl font-bold text-slate-900 mb-2">{val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">{lab}</div>
                  </div>
                ))}
              </div>

              {/* Terminal-style status box */}
              <div className="mt-4 bg-slate-900 rounded-xl p-5 font-mono text-xs">
                <div className="text-slate-500 mb-3">status:// active &gt;&gt;&gt;</div>
                {['001 / client onboarding... done', '002 / campaign launched... done', '003 / leads qualified... 24 found', '004 / reporting... in progress'].map((line, i) => (
                  <div key={i} className={`py-1 flex items-center gap-2 ${i === 3 ? 'text-blue-400' : 'text-green-400'}`}>
                    <span className="text-slate-600">[{String(i+1).padStart(2,'0')}]</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">&gt;&gt;&gt; what we do</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Services</h2>
            </div>
            <Link to="/services" className="text-xs font-mono text-slate-400 hover:text-slate-900 transition-colors hidden sm:block">
              view all &gt;&gt;&gt;
            </Link>
          </div>

          <div className="divide-y divide-slate-50">
            {services.map((s) => (
              <Link key={s.num} to={`/services/${serviceSlug(s.title)}`}
                className="group grid grid-cols-12 gap-6 py-6 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-all">
                <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{s.num} /</div>
                <div className="col-span-4 font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{s.title}</div>
                <div className="col-span-6 text-slate-400 text-sm leading-relaxed pt-0.5">{s.desc}</div>
                <div className="col-span-1 text-right text-slate-300 group-hover:text-blue-600 font-mono text-sm transition-colors pt-0.5">&gt;&gt;&gt;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">&gt;&gt;&gt; the process</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">How we work</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden">
            {steps.map((s) => (
              <div key={s.num} className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors">
                <div className="text-xs font-mono text-slate-600 mb-6">{s.num} /</div>
                <div className="w-6 h-px bg-blue-500 mb-5" />
                <h3 className="font-bold text-white text-base mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-mono">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">&gt;&gt;&gt; client stories</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Results</h2>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              <span className="text-xs font-mono text-slate-400 ml-2">4.9 avg</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`p-7 rounded-xl border transition-all hover:shadow-md ${i === 0 ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-100 hover:border-slate-200'}`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} className={i === 0 ? 'text-white fill-white' : 'text-yellow-400 fill-yellow-400'} />)}
                </div>
                <p className={`text-sm leading-relaxed flex-1 mb-5 ${i === 0 ? 'text-white/90' : 'text-slate-500'}`}>"{t.text}"</p>
                <div className={`border-t pt-4 ${i === 0 ? 'border-white/20' : 'border-slate-100'}`}>
                  <div className={`font-bold text-sm ${i === 0 ? 'text-white' : 'text-slate-900'}`}>{t.name}</div>
                  <div className={`text-xs font-mono mt-0.5 ${i === 0 ? 'text-white/50' : 'text-slate-400'}`}>{t.title} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">&gt;&gt;&gt; get started</div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Accelerating<br/>
            <span className="text-blue-500">business growth.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl font-mono leading-relaxed">
            Join hundreds of Kenyan businesses using Tapnovax Digital to build their online presence and grow revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm inline-flex items-center gap-2">
              contact us &gt;&gt;&gt;
            </Link>
            <Link to="/register" className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm">
              create account
            </Link>
          </div>

          {/* Status ticker */}
          <div className="mt-16 flex items-center gap-6 text-xs font-mono text-slate-600">
            <span>status://</span>
            <span className="text-green-500">approving... &gt;&gt;&gt;</span>
            <span className="text-blue-500">pending... &gt;&gt;&gt;</span>
            <span className="text-yellow-500">request approved... &gt;&gt;&gt;</span>
          </div>
        </div>
      </section>

    </div>
  );
}
