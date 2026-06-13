import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Loader } from 'lucide-react';
import { Service } from '../../types';
import { getServices } from '../../api/services';

const categories = ['All', 'Digital Marketing', 'Online Promotion', 'Sales Support', 'Customer Onboarding', 'Lead Generation', 'Business Technology Support'];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('All');

  useEffect(() => {
    getServices().then(r => setServices(r.data)).finally(() => setLoading(false));
  }, []);

  const filtered = active === 'All' ? services : services.filter(s => s.category === active);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-navy-950 relative overflow-hidden py-28">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-5">
            <span className="w-4 h-px bg-blue-400 inline-block" />
            Services
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Digital services for<br/>every stage of growth
          </h1>
          <p className="text-white/50 max-w-xl text-lg leading-relaxed">
            From visibility to conversion — we have the right service package for your business goals.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${active === cat ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <Loader size={22} className="animate-spin text-blue-600" />
            </div>
          ) : (
            <>
              <div className="divide-y divide-slate-100">
                {filtered.map((s, i) => (
                  <div key={s.id} className="group grid grid-cols-12 gap-6 py-8 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
                    <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{String(i+1).padStart(2,'0')}</div>
                    <div className="col-span-3">
                      <div className="font-bold text-navy-950 text-lg mb-1 group-hover:text-blue-600 transition-colors">{s.name}</div>
                      <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">{s.category}</span>
                    </div>
                    <div className="col-span-5 text-slate-500 text-sm leading-relaxed pt-1">{s.description}</div>
                    <div className="col-span-2 text-sm font-semibold text-slate-700 pt-1">
                      {s.price_type === 'fixed' && s.base_price ? `KES ${s.base_price.toLocaleString()}/mo` :
                       s.price_type === 'monthly' && s.base_price ? `KES ${s.base_price.toLocaleString()}/mo` :
                       'Custom Pricing'}
                    </div>
                    <div className="col-span-1 flex justify-end pt-1">
                      <Link to={`/services/${s.slug}`}
                        className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                        <ArrowUpRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20 text-slate-400">No services in this category.</div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Not sure which service fits?</h2>
              <p className="text-white/40 text-base">Talk to our team and we will guide you to the right solution.</p>
            </div>
            <Link to="/contact" className="btn-primary px-8 py-4 text-base shrink-0">
              Talk to an Expert <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
