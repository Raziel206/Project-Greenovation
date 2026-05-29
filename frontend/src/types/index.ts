/**
 * Constants for Greenovation Club Website
 */

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: 'past' | 'ongoing' | 'upcoming';
  longDescription: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  category: 'core' | 'advisor' | 'executive' | 'founder';
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    [key: string]: string | undefined;
  };
}

export interface SubEvent {
  id: string;
  title: string;
  description: string;
  date?: string;
  image?: string;
  link?: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
  type: 'single' | 'grouped';
  image?: string;
  longDescription?: string;
  link?: string;
  subEvents?: SubEvent[];
}

