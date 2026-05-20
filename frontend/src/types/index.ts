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
  category: 'core' | 'executive';
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}
