/**
 * Portfolio Configuration
 * Edit this file to customize your portfolio content
 */

export interface ProfileConfig {
  name: string
  subtitle: string
  avatar?: string // Path to avatar image (optional, uses animated gradient if not provided)
  bio: string
}

export interface ProjectConfig {
  year: string
  title: string
  desc: string
  href: string
  pdfUrl: string
  simulateButton?: boolean
  logo: string // Logo image URL
  duration: string // e.g., "Jan - Feb 2026"
}

export interface InternConfig {
  year: string
  title: string
  desc: string
  logo: string // Logo image URL
  duration: string // e.g., "Jan - Feb 2026"
}

export interface ContactsConfig {
  email: string
  github: string
  linkedin: string
  cvUrl?: string
}

export interface PortfolioConfig {
  profile: ProfileConfig
  projects: ProjectConfig[]
  interns: InternConfig[]
  skills: string[]
  contacts: ContactsConfig
}

// ============================================
// EDIT YOUR PORTFOLIO CONTENT BELOW
// ============================================

export const portfolioConfig: PortfolioConfig = {
  // Profile Section
  profile: {
    name: 'Muhamad Rifai',
    subtitle: 'Software Developer',
    avatar: '',
    bio: 'A tech-enthusiast student who codes, takes on freelance projects, and enjoys nature and sports. Always open, friendly, and excited to connect with new people.'
  },

  // Projects/Experience Section
  projects: [
    {
      year: '2025',
      title: 'Wp-Inviro Wordpress Theme',
      desc: 'Create a theme in WordPress that can be used and has customizable content. built with PHP',
      href: 'https://waterpro.co.id/',
      pdfUrl: '/project-one.pdf',
      simulateButton: true,
      logo: 'logo-inviro.png',
      duration: 'Jan - Mar 2025'
    },
    {
      year: '2025',
      title: 'SIM Laboratory',
      desc: 'Collaborating with students from the Poltekkes Kemenkes to create an information system for laboratory management. Built using Laravel full stack.',
      href: '#',
      pdfUrl: '/project-two.pdf',
      simulateButton: false,
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      duration: 'Apr - Jun 2025'
    },
    {
      year: '2024 - 2025',
      title: 'SIM Klinik Hewan',
      desc: 'Building a veterinary clinic information management system for Drh. Hendrick. Built with Laravel Full Stack.',
      href: '#',
      pdfUrl: '/project-three.pdf',
      simulateButton: true,
      logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
      duration: 'Oct 2024 - Feb 2025'
    },
  ],

  // Internship Experience Section
  interns: [
    {
      year: '2025 - 2026',
      title: 'Backend Engineer Intern — PT. Engineering Career Center',
      desc: 'Actively developing a B2B management platform designed to optimize partner interactions and support scalable business processes.',
      logo: 'logo-ecc.png',
      duration: 'Sep 2025 - Feb 2026'
    },
  ],

  // Skills Section
  skills: [
    'Laravel',
    'Next.js',
    'WordPress',
    'Docker',
    'Python',
    'Git'
  ],

  // Contact Information
  contacts: {
    email: 'rifaimuhammad2004@gmail.com',
    github: 'https://github.com/riffffff',
    linkedin: 'https://linkedin.com/in/muhammad-rifai-749727288',
    cvUrl: '' // Optional
  }
}
