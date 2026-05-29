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
    icon: 'Award',
    type: 'single',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop',
    longDescription: 'Our club successfully campaigned and designed a closed-loop composting and recycling architecture across the entire campus grounds. We worked closely with college administration to set up 50+ segregated waste stations, decreasing landfill output by 65% in less than 8 months.',
    link: 'https://example.com/zero-waste-award'
  },
  {
    id: 'a2',
    year: '2024',
    title: 'Eco-Summit & Green-Fest',
    description: 'A multi-event sustainability convention attracting over 1,200 attendees.',
    icon: 'Trophy',
    type: 'grouped',
    subEvents: [
      {
        id: 'sub1',
        title: 'Keynote: Clean Energy Futures',
        description: 'Distinguished panels on micro-grid implementation and nuclear energy feasibility.',
        date: 'Oct 12, 2024',
        image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'sub2',
        title: 'Solar Tech Exhibition',
        description: 'Demonstrations of DIY solar cells and portable battery designs created by members.',
        date: 'Oct 13, 2024',
        image: 'https://images.unsplash.com/photo-1509391366360-fe5bb658b12c?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'sub3',
        title: 'Save-the-Planet Hackathon',
        description: 'A 24-hour sprint prototyping eco-efficiency apps and smart water flow sensors.',
        date: 'Oct 14, 2024',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
        link: 'https://example.com/greenfest-hackathon'
      }
    ]
  },
  {
    id: 'a3',
    year: '2024',
    title: 'National Green Youth Prize',
    description: 'Awarded for our "Solar Backpack" project developed by the tech team.',
    icon: 'Trophy',
    type: 'single',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop',
    longDescription: 'The tech innovation team won top honors for designing and assembling a solar backpack using organic photovoltaic materials. This device stores solar energy throughout the day, enabling students in rural areas without power grids to study under bright LED lamps at night.',
    link: 'https://example.com/green-youth-prize'
  },
  {
    id: 'a4',
    year: '2023',
    title: 'Sustainable Outreach Campaign',
    description: 'Community-focused workshops and environmental activities across regional schools.',
    icon: 'Globe',
    type: 'grouped',
    subEvents: [
      {
        id: 'sub4',
        title: 'Community Planting Drive',
        description: 'Partnered with regional forest services to plant 2,000 native tree saplings.',
        date: 'Apr 05, 2023',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop'
      },
      {
        id: 'sub5',
        title: 'School Education Seminars',
        description: 'Visited 12 middle schools to deliver interactive experiments explaining the greenhouse effect.',
        date: 'May 11, 2023',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'a5',
    year: '2023',
    title: 'COP-Sustainability Partner',
    description: 'Selected as the official youth delegate partner for the regional climate summit.',
    icon: 'Globe',
    type: 'single',
    image: 'https://images.unsplash.com/photo-1618477471363-9204c3d9073c?q=80&w=1000&auto=format&fit=crop',
    longDescription: 'Greenovation represented the youth sector at the regional COP-Sustainability Summit. Five delegates from our executive committee presented a whitepaper advocating for renewable mandates in municipal buildings, earning recognition from international climate leaders.',
    link: 'https://example.com/cop-summit-partner'
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
