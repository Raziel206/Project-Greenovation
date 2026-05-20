import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Globe, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/constants';
import { SectionHeader } from '../ui/Shared';

export const AchievementsSection: React.FC = () => {
  const iconMap: any = {
    Award: Award,
    Trophy: Trophy,
    Globe: Globe
  };

  return (
    <section id="achievements" className="py-24 bg-valo-dark/30 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          number="03" 
          title="Sector Records" 
          subtitle="Achievements" 
          icon={Trophy}
        />

        <div className="grid lg:grid-cols-3 gap-0 border-l border-valo-green/10">
          {ACHIEVEMENTS.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Star;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-12 group hover:bg-valo-green/5 transition-colors border-r border-b border-valo-green/10"
              >
                {/* Year Label */}
                <div className="absolute top-8 right-8 font-mono text-4xl text-valo-green/10 font-bold group-hover:text-valo-green/20 transition-colors">
                  {ach.year}
                </div>

                <div className="bg-valo-green/10 w-16 h-16 flex items-center justify-center clip-path-valo mb-8 group-hover:bg-valo-green transition-colors">
                  <Icon size={32} className="text-valo-green group-hover:text-valo-bg transition-colors" />
                </div>

                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-valo-green transition-colors">
                  {ach.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-sans">
                  {ach.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-valo-green transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
