import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react';
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
      <section className="bg-white border-b border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">&gt;&gt;&gt; services</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Digital<br/>services.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed font-mono pb-2">
              From visibility to conversion — the right service package for every stage of your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="border-b border-slate-100 sticky top-[88px] bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-3.5 text-xs font-mono whitespace-nowrap border-b-2 transition-all uppercase tracking-wider ${active === cat ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-700'}`}>
                {cat === 'All' ? 'all' : cat.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-32 gap-2 font-mono text-slate-400 text-sm">
              <Loader size={16} className="animate-spin" /> loading...
            </div>
          ) : (
            <div className="divide-y divide-slate-50">
              {filtered.map((s, i) => (
                <div key={s.id} className="group grid grid-cols-12 gap-6 py-7 hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-all">
                  <div className="col-span-1 text-xs font-mono text-slate-300 pt-1">{String(i+1).padStart(2,'0')} /</div>
                  <div className="col-span-3">
                    <div className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{s.name}</div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{s.category.toLowerCase()}</span>
                  </div>
                  <div className="col-span-5 text-slate-400 text-sm leading-relaxed pt-1 font-mono">{s.description}</div>
                  <div className="col-span-2 pt-1">
                    <div className="text-xs font-mono text-slate-400">pricing://</div>
                    <div className="text-sm font-bold text-slate-700 mt-1">
                      {s.price_type === 'fixed' && s.base_price ? `KES ${s.base_price.toLocaleString()}` :
                       s.price_type === 'monthly' && s.base_price ? `KES ${s.base_price.toLocaleString()}/mo` : 'custom'}
                    </div>
                  </div>
                  <div className="col-span-1 flex justify-end items-start pt-1">
                    <span className="text-slate-200 group-hover:text-blue-600 font-mono text-sm transition-colors">&gt;&gt;&gt;</span>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20 font-mono text-slate-400 text-sm">no results found &gt;&gt;&gt;</div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="text-xs font-mono text-slate-600 mb-3">&gt;&gt;&gt; get started</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Not sure which service fits?</h2>
              <p className="text-slate-500 font-mono text-sm mt-2">Talk to our team. We'll guide you to the right solution.</p>
            </div>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-sm inline-flex items-center gap-2 shrink-0">
              talk to an expert &gt;&gt;&gt;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
