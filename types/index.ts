export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  features: string[];
  challenges: string[];
  solutions: string[];
  futureImprovements: string[];
  architecture?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface GitHubStats {
  username: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  pinnedRepos: {
    name: string;
    description: string;
    url: string;
    language: string;
    stars: number;
  }[];
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contestRating?: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
