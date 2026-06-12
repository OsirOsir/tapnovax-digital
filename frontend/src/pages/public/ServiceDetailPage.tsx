import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader } from 'lucide-react';
import { Service } from '../../types';
import { getServiceBySlug } from '../../api/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) getServiceBySlug(slug).then(r => setService(r.data)).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="flex justify-center py-32"><Loader size={24} className="animate-spin text-navy-600" /></div>;
  if (!service) return <div className="text-center py-32 text-gray-500">Service not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy-700 mb-8">
        <ArrowLeft size={15} /> Back to Services
      </Link>
      <div className="mb-2">
        <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">{service.category}</span>
      </div>
      <h1 className="text-3xl font-bold text-navy-900 mb-4">{service.name}</h1>
      <p className="text-gray-600 leading-relaxed text-base mb-8">{service.description}</p>
      <div className="card p-5 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-400 mb-1">Pricing</div>
          <div className="text-sm font-semibold text-navy-800">
            {service.price_type === 'fixed' && service.base_price
              ? `KES ${service.base_price.toLocaleString()}`
              : service.price_type.charAt(0).toUpperCase() + service.price_type.slice(1)}
          </div>
        </div>
        <Link to="/register" className="btn-primary text-sm">
          Request This Service <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
