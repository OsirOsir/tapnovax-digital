import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader } from 'lucide-react';
import { Service } from '../../types';
import { getServices } from '../../api/services';

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(r => setServices(r.data)).finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center py-32">
      <Loader size={24} className="animate-spin text-navy-600" />
    </div>
  );

  return (
    <>
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Services</div>
          <h1 className="text-4xl font-bold text-white mb-3">Digital services for every stage</h1>
          <p className="text-white/60 max-w-xl">From visibility to conversion — we have the right service package for your business goals.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="card p-6 hover:shadow-md transition-shadow flex flex-col">
                <div className="mb-2">
                  <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">{s.category}</span>
                </div>
                <h3 className="font-semibold text-navy-900 text-lg mb-2">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    {s.price_type === 'fixed' && s.base_price ? `KES ${s.base_price.toLocaleString()}` : s.price_type}
                  </div>
                  <Link to={`/services/${s.slug}`} className="text-navy-600 hover:text-navy-800 text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-700 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure which service fits?</h2>
          <p className="text-white/60 mb-6">Contact our team and we will guide you to the right solution for your business.</p>
          <Link to="/contact" className="bg-white text-navy-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm inline-flex items-center gap-2">
            Talk to an Expert <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
