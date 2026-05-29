import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MessageSquare, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-valo-bg pt-24 pb-12 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-0 right-0 p-12 opacity-5 pointer-events-none select-none font-mono text-8xl md:text-[180px] font-bold text-white/10 italic leading-none">
        GREEN
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 bg-valo-green flex items-center justify-center clip-path-valo group-hover:rotate-12 transition-transform">
                <Leaf size={28} className="text-valo-bg" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">
                Green<span className="text-valo-green">ovation</span>
              </span>
            </div>
            <p className="text-gray-400 font-sans leading-relaxed mb-8 pr-4">
              Pioneering the intersection of futuristic innovation and global sustainability. 
              Join the movement that defines the next era of eco-conscious leadership.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, url: 'https://twitter.com' },
                { Icon: Instagram, url: 'https://instagram.com' },
                { Icon: Linkedin, url: 'https://linkedin.com' }
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-valo-green hover:text-valo-bg hover:border-valo-green transition-all clip-path-valo"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Missions', href: '/events' },
                { name: 'Records', href: '/achievements' },
                { name: 'Vanguard', href: '/members' },
                { name: 'Archive', href: '/gallery' },
                { name: 'Enrollment', href: '/register' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-valo-green transition-colors font-display font-medium uppercase tracking-widest text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40 mb-8">Base Coordinates</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-valo-green mt-1" />
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase mb-1">Channel</p>
                  <a href="mailto:comms@greenovation.edu" className="font-sans font-medium hover:text-valo-green transition-colors">comms@greenovation.edu</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageSquare size={18} className="text-valo-green mt-1" />
                <div>
                  <p className="text-[10px] font-mono text-white/40 uppercase mb-1">Direct Liaison</p>
                  <p className="font-sans font-medium">+1 (234) 567-8900</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40 mb-8">System Status</h4>
            <div className="bg-valo-dark p-6 clip-path-valo valo-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase text-white/40">Network</span>
                <span className="text-[10px] font-mono text-valo-green animate-pulse">ONLINE</span>
              </div>
              <div className="w-full h-1 bg-white/5 mb-6">
                <div className="h-full w-[88%] bg-valo-green" />
              </div>
              <p className="text-xs text-gray-500 font-mono italic">
                Environment sync active. Data integrity verified by ECO-SECURE.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 Greenovation Club // Designed for the Frontline.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 group text-[10px] font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            Terminal Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
