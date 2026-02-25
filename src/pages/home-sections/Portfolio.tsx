import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '../../components/Button';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'automation' | 'ai' | 'mobile';
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Automation System',
    description: 'Complete automated revenue engine for online retail business with AI-powered lead nurturing and automated follow-ups.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'AI/ML', 'Automation'],
    liveUrl: 'https://example.com',
    category: 'automation',
    featured: true
  },
  {
    id: '2',
    title: 'Real Estate CRM Platform',
    description: 'Custom CRM solution for real estate agents with automated lead capture and intelligent scheduling system.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'API Integration'],
    liveUrl: 'https://example.com',
    category: 'web',
    featured: true
  },
  {
    id: '3',
    title: 'Healthcare Appointment System',
    description: 'AI-driven appointment scheduling and patient management system for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    technologies: ['React', 'Firebase', 'AI Chatbot', 'Calendar API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'ai'
  },
  {
    id: '4',
    title: 'Restaurant Delivery App',
    description: 'Mobile-first food delivery platform with real-time tracking and automated order processing.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Maps API'],
    liveUrl: 'https://example.com',
    category: 'mobile'
  },
  {
    id: '5',
    title: 'Financial Dashboard',
    description: 'Real-time financial analytics dashboard with automated reporting and data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Angular', 'Python', 'D3.js', 'WebSocket'],
    liveUrl: 'https://example.com',
    category: 'web'
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Machine learning powered content generation platform for marketing teams.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'OpenAI API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true
  }
];

const categoryColors = {
  web: 'bg-blue-500',
  automation: 'bg-green-500',
  ai: 'bg-purple-500',
  mobile: 'bg-orange-500'
};

const categoryLabels = {
  web: 'Web Development',
  automation: 'Automation',
  ai: 'AI/ML',
  mobile: 'Mobile App'
};

export const Portfolio = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="scroll-mt-24 py-24 bg-slate-50 dark:bg-slate-900 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our showcase of innovative solutions in web development, automation, AI, and mobile applications.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your ideas to life with our expertise.
            </p>
            <Button size="lg" onClick={() => document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured }) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800",
      featured && "ring-2 ring-blue-500 ring-offset-2"
    )}>
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-white text-xs font-medium",
            categoryColors[project.category]
          )}>
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
              FEATURED
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <Globe className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button 
              size="sm" 
              variant="outline"
              className="flex-1"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function for className
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
