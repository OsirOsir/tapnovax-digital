import { Link } from 'react-router-dom';

const values = [
  { num: '01', title: 'Results First', desc: 'Every service is measured against real business outcomes. We count results, not activity.' },
  { num: '02', title: 'Full Transparency', desc: 'No hidden fees, no vague reporting. You see exactly what we do and what it delivers.' },
  { num: '03', title: 'Client Partnership', desc: 'We treat every client as a long-term partner. Your growth is our growth.' },
  { num: '04', title: 'Kenya Market Expertise', desc: 'Our strategies are built for this market, not copied from playbooks designed elsewhere.' },
];

const capabilities = [
  { num: '01', title: 'Online Marketing & Campaigns', desc: 'Data-driven campaigns across Google, Meta, and major digital platforms.' },
  { num: '02', title: 'Social Media Management', desc: 'Full management of your social channels — content, engagement, growth.' },
  { num: '03', title: 'Lead Generation & Qualification', desc: 'Identify and attract high-intent prospects ready to convert.' },
  { num: '04', title: 'Customer Onboarding Programs', desc: 'Structured welcome flows to activate and retain new clients.' },
  { num: '05', title: 'Sales Pipeline Support', desc: 'Help your team close deals and manage leads at scale.' },
  { num: '06', title: 'Business Technology Setup', desc: 'Digital tools and systems to streamline your business operations.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">&gt;&gt;&gt; about</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Who<br/>we are.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed font-mono pb-2">
              Tapnovax Digital is a registered digital services company based in Mombasa, Kenya — helping businesses of all sizes build their online presence, attract customers, and grow revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">&gt;&gt;&gt; mission</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Bridging the gap between businesses and digital growth
              </h2>
              <p className="text-slate-400 font-mono text-sm leading-relaxed mb-4">
                We exist to bridge the gap between businesses and the digital tools they need to succeed. We provide hands-on digital services so that businesses of all sizes can compete in the modern marketplace.
              </p>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">
                We understand the Kenyan market — how consumers behave online, what drives purchasing decisions, and which platforms actually deliver results. Our strategies are built for this reality.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">&gt;&gt;&gt; stats</div>
              <div className="grid grid-cols-2 gap-px bg-slate-100 rounded-xl overflow-hidden">
                {[['150+', 'Clients Served'], ['98%', 'Satisfaction Rate'], ['60 days', 'Avg. Results'], ['Mombasa', 'Based in Kenya']].map(([val, lab]) => (
                  <div key={lab} className="bg-white p-8 hover:bg-slate-50 transition-colors">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{val}</div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">{lab}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">&gt;&gt;&gt; capabilities</div>
              <h2 className="text-4xl font-bold text-slate-900">What we do</h2>
            </div>
          </div>
          <div className="divide-y divide-slate-50">
            {capabilities.map((c) => (
              <div key={c.num} className="group grid grid-cols-12 gap-6 py-6 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-all">
                <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{c.num} /</div>
                <div className="col-span-4 font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">{c.title}</div>
                <div className="col-span-6 text-slate-400 text-sm leading-relaxed font-mono pt-0.5">{c.desc}</div>
                <div className="col-span-1 text-right text-slate-200 group-hover:text-blue-600 font-mono text-sm transition-colors pt-0.5">&gt;&gt;&gt;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 pb-4 border-b border-white/10">
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">&gt;&gt;&gt; values</div>
            <h2 className="text-4xl font-bold text-white">How we work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
            {values.map((v) => (
              <div key={v.num} className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors">
                <div className="text-xs font-mono text-slate-600 mb-4">{v.num} /</div>
                <div className="w-6 h-px bg-blue-500 mb-5" />
                <h3 className="font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-mono">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="text-xs font-mono text-slate-400 mb-3">&gt;&gt;&gt; mombasa, kenya</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ready to work with us?</h2>
              <p className="text-slate-400 font-mono text-sm mt-2">We serve businesses across Kenya. All services delivered digitally.</p>
            </div>
            <Link to="/contact" className="btn-dark px-8 py-4 text-sm shrink-0">
              contact us &gt;&gt;&gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
