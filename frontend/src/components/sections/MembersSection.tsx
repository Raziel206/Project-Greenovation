import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github, Instagram, Globe, Mail, Facebook, Youtube, Users } from 'lucide-react';
import { Member } from '../../types';
import { SectionHeader } from '../ui/Shared';

const socialIconMap: Record<string, React.FC<any>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
  globe: Globe,
  mail: Mail,
  facebook: Facebook,
  youtube: Youtube
};

export interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="group relative"
  >
    <div className="relative aspect-square overflow-hidden clip-path-valo valo-border group-hover:valo-border-active transition-all">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-valo-bg via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>

    <div className="mt-6 flex justify-between items-start">
      <div>
        <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-1 group-hover:text-valo-green transition-colors">
          {member.name}
        </h4>
        <p className="text-xs font-mono uppercase tracking-widest text-valo-green/60">
          {member.role}
        </p>
      </div>
      
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {member.socials && Object.entries(member.socials).map(([platform, url]) => {
          const IconComponent = socialIconMap[platform.toLowerCase()];
          if (!IconComponent || !url) return null;
          return (
            <a 
              key={platform} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-valo-green hover:text-valo-green transition-all"
            >
              <IconComponent size={14} />
            </a>
          );
        })}
      </div>
    </div>
  </motion.div>
);

export const MembersSection: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('/data/members.json')
      .then(res => res.json())
      .then(data => setMembers(data))
      .catch(err => console.error('Error fetching members data:', err));
  }, []);

  const coreMembers = members.filter(m => m.category === 'core');
  const advisors = members.filter(m => m.category === 'advisor');
  const executives = members.filter(m => m.category === 'executive');

  return (
    <section id="members" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          number="04" 
          title="The Vanguard" 
          subtitle="Club Personnel" 
          icon={Users}
        />

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Tier 1: Core Command</h3>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {coreMembers.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Tier 2: Advisory Board</h3>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {advisors.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-sm font-mono tracking-[0.4em] uppercase text-white/40">Tier 3: Executive Unit</h3>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {executives.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
