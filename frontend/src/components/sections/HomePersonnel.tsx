import React, { useState, useEffect } from 'react';
import { Users, Award } from 'lucide-react';
import { Member } from '../../types';
import { SectionHeader } from '../ui/Shared';
import { MemberCard } from './MembersSection';

export const HomeAdvisorsSection: React.FC = () => {
  const [advisors, setAdvisors] = useState<Member[]>([]);

  useEffect(() => {
    fetch('/data/members.json')
      .then(res => res.json())
      .then((data: Member[]) => {
        setAdvisors(data.filter(m => m.category === 'advisor'));
      })
      .catch(err => console.error('Error fetching advisors:', err));
  }, []);

  if (advisors.length === 0) return null;

  return (
    <section id="faculty-advisors" className="py-24 relative overflow-hidden bg-valo-dark/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(22,255,141,0.02),transparent_40%)] pointer-events-none" />
      <div className="container mx-auto px-6">
        <SectionHeader 
          number="05" 
          title="Faculty Advisors" 
          subtitle="Command Guidance" 
          icon={Users}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 justify-center">
          {advisors.map(member => (
            <div key={member.id} className="max-w-sm mx-auto w-full">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeFoundersSection: React.FC = () => {
  const [founders, setFounders] = useState<Member[]>([]);

  useEffect(() => {
    fetch('/data/members.json')
      .then(res => res.json())
      .then((data: Member[]) => {
        setFounders(data.filter(m => m.category === 'founder'));
      })
      .catch(err => console.error('Error fetching founders:', err));
  }, []);

  if (founders.length === 0) return null;

  return (
    <section id="founding-members" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,255,141,0.02),transparent_40%)] pointer-events-none" />
      <div className="container mx-auto px-6">
        <SectionHeader 
          number="06" 
          title="Founding Members" 
          subtitle="Club Origins" 
          icon={Award}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 justify-center">
          {founders.map(member => (
            <div key={member.id} className="max-w-sm mx-auto w-full">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
