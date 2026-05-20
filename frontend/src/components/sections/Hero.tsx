import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Activity, Globe, Shield } from 'lucide-react';
import { ValoButton } from '../ui/Shared';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-valo-green/5 clip-path-valo-inv translate-x-20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-valo-green/5 clip-path-valo -translate-x-20" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(rgba(22,255,141,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,255,141,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hidden md:inline-flex items-center gap-3 px-6 py-2 bg-valo-green/10 border border-valo-green/20 rounded-full mt-12 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-valo-green">Next Generation Sustainability</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-6">
            Leading the <br />
            <span className="text-valo-green italic">Future</span> of <br />
            Eco-Action
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed font-sans">
            Greenovation Club is a hub for environmental pioneers. We blend futuristic 
            design with real-world sustainability to create a greener tomorrow today.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/register">
              <ValoButton size="lg" data-tooltip="Join the Club">Join the Frontline <ArrowRight size={18} className="ml-1" /></ValoButton>
            </Link>
            <Link to="/events">
              <ValoButton variant="outline" size="lg" data-tooltip="View Events">Explore Missions</ValoButton>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/5">
            {[
              { label: 'Events Active', value: '12+', icon: Activity },
              { label: 'Global Impact', value: 'Eco-Gold', icon: Globe },
              { label: 'Sustainability', value: 'Level 5', icon: Shield },
            ].map((stat, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 text-valo-green mb-1">
                  <stat.icon size={14} />
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-60 font-medium">#{i+1} {stat.label}</span>
                </div>
                <div className="text-2xl font-display font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto flex items-center justify-center">
            {/* Visual aesthetic elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 border-[10px] border-white/5 rounded-full" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 border border-valo-green/30 rounded-full" 
            />
            <div className="w-4/5 h-4/5 bg-white rounded-full shadow-2xl relative overflow-hidden flex items-center justify-center border-4 border-valo-green/50">
              <img 
                src="/assets/logo.png" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Greenovation Club Logo"
              />
            </div>
            {/* Floating details */}
            <div className="absolute -bottom-4 -right-4 w-44 h-44 bg-valo-green/10 backdrop-blur-md p-6 clip-path-valo border border-valo-green/20 flex flex-col justify-center">
              <div className="text-valo-green text-[10px] font-mono uppercase mb-1 tracking-wider">Division Relay</div>
              <div className="text-lg font-display font-bold leading-tight uppercase">GCMSIT<br/>ECO-UNIT</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic Side Rails */}
      <div className="absolute left-6 bottom-12 hidden md:flex flex-col gap-8 opacity-20">
        <div className="h-24 w-[1px] bg-white mx-auto" />
        <span className="font-mono text-[10px] tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">Established 2024</span>
      </div>
    </section>
  );
};
