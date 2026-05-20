import React from 'react';
import { SectionHeader } from '../components/ui/Shared';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader 
          number="06" 
          title="Comms Relay" 
          subtitle="Contact Us" 
          icon={MessageSquare}
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-valo-dark/50 p-8 clip-path-valo valo-border">
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-valo-green mb-8">
              Headquarters
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-valo-green shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Location</div>
                  <div className="text-white">GCMSIT Campus<br/>Green Zone, Sector 4<br/>Kolkata, WB 700001</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-valo-green shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Email Relay</div>
                  <div className="text-white">comms@greenovation.club</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-valo-green shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1">Direct Line</div>
                  <div className="text-white">+91 98765 43210</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-valo-dark/30 p-8 clip-path-valo border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none font-mono text-[8px] whitespace-pre">
               {`// COMMS_LINK_ACTIVE\nSTATUS: ONLINE`}
             </div>
             <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-6">
               Send Transmission
             </h3>
             <form className="space-y-4 relative z-10">
                <input 
                  type="text" 
                  placeholder="Identification (Name)" 
                  className="w-full bg-valo-bg/50 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-valo-green transition-colors clip-path-valo"
                />
                <input 
                  type="email" 
                  placeholder="Return Address (Email)" 
                  className="w-full bg-valo-bg/50 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-valo-green transition-colors clip-path-valo"
                />
                <textarea 
                  rows={4} 
                  placeholder="Message payload..." 
                  className="w-full bg-valo-bg/50 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-valo-green transition-colors clip-path-valo resize-none"
                />
                <button type="submit" className="bg-valo-green text-valo-bg font-display font-bold uppercase tracking-widest px-8 py-3 w-full hover:bg-white transition-colors clip-path-valo">
                  Transmit
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};
