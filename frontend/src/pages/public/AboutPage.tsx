import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Eye, Heart } from 'lucide-react';

const values = [
  { icon: Target, title: 'Results First', desc: 'Every service we offer is measured against real business outcomes. We do not count activity — we count results.' },
  { icon: Eye, title: 'Full Transparency', desc: 'No hidden fees, no vague reporting. You see exactly what we are doing and what it is delivering.' },
  { icon: Heart, title: 'Client Partnership', desc: 'We treat every client as a long-term partner. Your growth is our growth. We stay engaged beyond onboarding.' },
  { icon: CheckCircle, title: 'Kenya Market Expertise', desc: 'We understand how Kenyan consumers behave online. Our strategies are built for this market, not copied from abroad.' },
];

const team = [
  { role: 'Business Development', desc: 'Identifying opportunities and building client relationships across Kenya.' },
  { role: 'Digital Marketing', desc: 'Running campaigns, managing social channels, and generating online visibility.' },
  { role: 'Sales Support', desc: 'Helping clients close deals, follow up on leads, and manage their pipelines.' },
  { role: 'Client Success', desc: 'Ensuring every onboarded client has a smooth experience and measurable results.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden py-28">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
            <span className="w-4 h-px bg-blue-400 inline-block" />
            About Us
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              We help Kenyan<br/>businesses grow<br/>
              <span className="text-blue-400">online.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed pb-2">
              Tapnovax Digital is a registered digital services company based in Mombasa, Kenya — dedicated to helping businesses of all sizes build their online presence, attract customers, and grow revenue through structured digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">
                <span className="w-4 h-px bg-blue-600 inline-block" />
                Our Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 leading-tight mb-6">
                Bridging the gap between businesses and digital growth
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6 text-base">
                Tapnovax Digital exists to bridge the gap between businesses and the digital tools they need to succeed. We provide hands-on digital services so that businesses of all sizes can compete in the modern marketplace.
              </p>
              <p className="text-slate-500 leading-relaxed text-base">
                We understand the Kenyan market — how consumers behave online, what drives purchasing decisions, and which platforms actually deliver results. Our strategies are built for this reality, not copied from playbooks designed for other markets.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-5">
                <span className="w-4 h-px bg-blue-600 inline-block" />
                What We Do
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-950 leading-tight mb-6">
                Full-service digital support from strategy to results
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6 text-base">
                We specialize in Online Marketing, Sales Support, Customer Onboarding, Business Promotion, Lead Generation, and Technology-enabled Business Services.
              </p>
              <div className="space-y-3">
                {['Online Marketing & Campaigns', 'Social Media Management', 'Lead Generation & Qualification', 'Customer Onboarding Programs', 'Sales Pipeline Support', 'Business Technology Setup'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              <span className="w-4 h-px bg-blue-600 inline-block" />
              Our Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              How we work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                  <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-navy-950 text-lg mb-3">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team functions */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              <span className="w-4 h-px bg-blue-600 inline-block" />
              Our Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              Specialists in every<br/>area of digital growth
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {team.map((t, i) => (
              <div key={t.role} className="grid grid-cols-12 gap-6 py-7 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
                <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{String(i+1).padStart(2,'0')}</div>
                <div className="col-span-4 font-bold text-navy-950 text-lg">{t.role}</div>
                <div className="col-span-7 text-slate-500 text-sm leading-relaxed pt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
                <span className="w-4 h-px bg-blue-400 inline-block" />
                Based in Kenya
              </div>
              <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
                Mombasa-based.<br/>Kenya-focused.<br/>
                <span className="text-blue-400">Results-driven.</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8 text-base">
                We operate from Mombasa and serve businesses across Kenya — Nairobi, Kisumu, Nakuru, Eldoret, and beyond. All services are delivered digitally, meaning we can work with you wherever you are.
              </p>
              <Link to="/contact" className="btn-primary px-8 py-4 text-base">
                Work With Us <ArrowRight size={17} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {[['150+', 'Clients Served'], ['6+', 'Service Types'], ['98%', 'Satisfaction'], ['Kenya', 'Market Focus']].map(([val, lab]) => (
                <div key={lab} className="bg-navy-950 p-8 hover:bg-navy-900 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2">{val}</div>
                  <div className="text-white/30 text-sm">{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
