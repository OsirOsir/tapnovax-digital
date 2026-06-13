import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const navLinks = [
  { num: '01', to: '/', label: 'Home' },
  { num: '02', to: '/services', label: 'Services' },
  { num: '03', to: '/pricing', label: 'Pricing' },
  { num: '04', to: '/about', label: 'About' },
  { num: '05', to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/">
              <img src="/logo-light.svg" alt="Tapnovax Digital" className="h-8 w-auto mb-6" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-mono mb-6">
              Provision of Digital Services, Online Marketing, Sales Support, Customer Onboarding, Business Promotion & Technology-enabled Services.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://linkedin.com/company/tapnovax-digital', Icon: Linkedin },
                { href: 'https://twitter.com/tapnovaxdigital', Icon: Twitter },
                { href: 'https://instagram.com/tapnovaxdigital', Icon: Instagram },
                { href: 'https://facebook.com/tapnovaxdigital', Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all">
                  <Icon size={13} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">Navigation</div>
            <div className="space-y-2">
              {navLinks.map(({ num, to, label }) => (
                <Link key={to} to={to}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors py-1 group">
                  <span className="text-xs font-mono text-slate-700 group-hover:text-slate-500">{num}</span>
                  {label.toLowerCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">Contact</div>
            <div className="space-y-3 text-sm font-mono text-slate-400">
              <div>
                <div className="text-slate-600 text-xs mb-1">email://</div>
                <a href="mailto:info@tapnovax.online" className="hover:text-white transition-colors">info@tapnovax.online</a>
              </div>
              <div>
                <div className="text-slate-600 text-xs mb-1">phone://</div>
                <a href="tel:+254769989480" className="hover:text-white transition-colors">+254 769 989 480</a>
              </div>
              <div>
                <div className="text-slate-600 text-xs mb-1">location://</div>
                <div className="leading-relaxed">Madaraka Estate, Mtambo Road<br/>Bamburi, Kisauni — Mombasa</div>
              </div>
              <div>
                <div className="text-slate-600 text-xs mb-1">whatsapp://</div>
                <a href="https://wa.me/254769989480" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors text-green-500">+254 769 989 480 &gt;&gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-slate-600">
          <span>© {new Date().getFullYear()} tapnovax digital. all rights reserved.</span>
          <span>tapnovax.online &gt;&gt;&gt;</span>
        </div>
      </div>
    </footer>
  );
}
