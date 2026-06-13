import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-navy-950 border-b border-white/10 text-white/60 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left — contact info */}
        <div className="hidden sm:flex items-center gap-5">
          <a href="tel:+254769989480" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={11} />
            +254 769 989 480
          </a>
          <a href="mailto:info@tapnovax.online" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={11} />
            info@tapnovax.online
          </a>
        </div>

        {/* Right — social links */}
        <div className="flex items-center gap-3 ml-auto">
          <span className="hidden sm:inline text-white/30 text-xs">Follow us:</span>
          <a href="https://facebook.com/tapnovaxdigital" target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 hover:text-white transition-all">
            <Facebook size={12} />
          </a>
          <a href="https://instagram.com/tapnovaxdigital" target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 hover:text-white transition-all">
            <Instagram size={12} />
          </a>
          <a href="https://twitter.com/tapnovaxdigital" target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 hover:text-white transition-all">
            <Twitter size={12} />
          </a>
          <a href="https://linkedin.com/company/tapnovax-digital" target="_blank" rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 hover:text-white transition-all">
            <Linkedin size={12} />
          </a>
          <a href="https://wa.me/254769989480" target="_blank" rel="noopener noreferrer"
            className="ml-1 flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.532 5.856L.044 23.5l5.789-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.385l-.36-.214-3.733.946.986-3.629-.234-.373A9.818 9.818 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
