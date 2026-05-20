import { Event, Member, Achievement } from '../types';

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Plastic Cleanup Drive',
    description: 'A community cleanup event targeted at local beaches.',
    date: 'March 15, 2026',
    time: '08:00 AM',
    location: 'Coastal Avenue',
    image: 'https://images.unsplash.com/photo-1618477471363-9204c3d9073c?q=80&w=1000&auto=format&fit=crop',
    category: 'past',
    longDescription: 'Our biggest cleanup drive yet! We collected over 500kg of plastic waste from the coastal areas, collaborating with local municipalities and over 100 volunteers.'
  },
  {
    id: 'e2',
    title: 'Solar Panel Workshop',
    description: 'Learn how to build small-scale solar chargers.',
    date: 'May 10, 2026',
    time: '02:00 PM',
    location: 'Engineering Block, Room 402',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb658b12c?q=80&w=1000&auto=format&fit=crop',
    category: 'ongoing',
    longDescription: 'This workshop provides hands-on experience in assembling portable solar chargers. Participants will learn basic electronics and the principles of photovoltaic energy.'
  },
  {
    id: 'e3',
    title: 'Eco-Summit 2026',
    description: 'Annual conference on urban sustainability.',
    date: 'June 20, 2026',
    time: '09:00 AM',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    category: 'upcoming',
    longDescription: 'A day-long summit featuring industry experts, academic researchers, and student innovators discussing the future of smart, green cities.'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Alex Rivera',
    role: 'President',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&auto=format&fit=crop',
    category: 'core',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 'm2',
    name: 'Sarah Chen',
    role: 'Eco-Strategy Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    category: 'core',
    socials: { linkedin: '#', github: '#' }
  },
  {
    id: 'm3',
    name: 'Marcus Thorne',
    role: 'Tech Innovation Head',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    category: 'core',
    socials: { github: '#', twitter: '#' }
  },
  {
    id: 'm4',
    name: 'Elena Vance',
    role: 'PR & Outreach',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop',
    category: 'executive',
    socials: { twitter: '#' }
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    year: '2025',
    title: 'Zero Waste Campus Award',
    description: 'Recognized for implementing a university-wide composting and recycling system.',
    icon: 'Award'
  },
  {
    id: 'a2',
    year: '2024',
    title: 'National Green Youth Prize',
    description: 'Awarded for our "Solar Backpack" project developed by the tech team.',
    icon: 'Trophy'
  },
  {
    id: 'a3',
    year: '2023',
    title: 'COP-Sustainability Partner',
    description: 'Selected as the official youth delegate partner for the regional climate summit.',
    icon: 'Globe'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
];
