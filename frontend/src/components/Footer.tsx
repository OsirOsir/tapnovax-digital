import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-white text-base">Tapnovax Digital</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Provision of Digital Services, Online Marketing, Sales Support, Customer Onboarding, Business Promotion, and Related Technology-enabled Services.
            </p>
          </div>
          <div>
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</div>
            <div className="space-y-2.5">
              {[['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} className="block text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Contact</div>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-center gap-2"><Mail size={14} /><span>info@tapnovax.com</span></div>
              <div className="flex items-center gap-2"><Phone size={14} /><span>+254 700 000 000</span></div>
              <div className="flex items-center gap-2"><MapPin size={14} /><span>Nairobi, Kenya</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Tapnovax Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
