
'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function Projects() {
  const projects = [
    {
      id: 5,
      title: "Syria Express - Shipping & Delivery Management",
      description: "Modern shipping and delivery management platform connecting senders, receivers, and shipping companies across Syria with real-time tracking.",
      longDescription: "A comprehensive web application for managing shipping and delivery services within Syria, featuring multi-step shipment creation, real-time tracking, price calculator, and complete dashboard for users.",
      image: "/images/Syria Express/1.png",
      technologies: ["React.js", "Vite", "TailwindCSS", "Redux Toolkit", "React Router", "React Hook Form"],
      category: "Web Application",
      year: "2025",
      status: "Completed",
      features: [
        "Multi-step shipment creation form",
        "Real-time shipment tracking system",
        "Intelligent price calculator",
        "Interactive branch map (13 Syrian cities)",
        "Comprehensive user dashboard",
        "Dark/Light mode support"
      ]
    },
    {
      id: 4,
      title: "Cinema Management & Booking System",
      description: "Complete cinema platform with seat selection, hall management, and comprehensive booking system for theaters.",
      longDescription: "A comprehensive cinema management system built with React and Tailwind CSS, enabling cinema owners to manage all aspects of their business from movies and halls to staff and end users.",
      image: "/images/Cinema Management/1.png",
      technologies: ["React", "Tailwind CSS", "ASP.NET Core", "React Router", "Axios"],
      category: "Web Application",
      year: "2025",
      status: "Completed",
      features: [
        "Movie and hall management",
        "Dynamic seat layout configuration",
        "User roles and permissions",
        "Food & beverage menu management",
        "Interactive dashboards",
        "Real-time data updates"
      ]
    },
    {
      id: 3,
      title: "JobScope – Service Provider Platform",
      description: "Full-stack marketplace connecting clients with skilled craftsmen across Syria with advanced search and booking features.",
      longDescription: "A comprehensive web system that connects service seekers with skilled craftsmen in Syria, designed to facilitate the process of finding suitable craftsmen and booking their services online.",
      image: "/images/JobScope/1.png",
      technologies: ["React.js", "Tailwind CSS", "Zustand", "Leaflet.js", "JWT"],
      category: "Management System",
      year: "2025",
      status: "Completed",
      features: [
        "Advanced search with map integration",
        "Secure authentication system",
        "Booking and order management",
        "Multi-criteria rating system",
        "Geographic location services",
        "Real-time status updates"
      ]
    },
    {
      id: 1,
      title: "Academic Project Management System",
      description: "Comprehensive university project management platform with authentication, tracking, and collaboration features for students and supervisors.",
      longDescription: "A sophisticated dashboard designed for universities to manage academic projects efficiently. Features include student and supervisor management, project tracking, discussion scheduling, and comprehensive statistics.",
      image: "/images/Project Management System/1.jpg",
      technologies: ["React.js", "Material UI", "Redux Toolkit", "TailwindCSS", "Vite"],
      category: "Web Application",
      year: "2024",
      status: "Completed",
      features: [
        "Dashboard with comprehensive statistics",
        "Student and supervisor management",
        "Project tracking and submissions",
        "Discussion scheduling system",
        "JWT authentication",
        "Responsive design"
      ]
    },
    {
      id: 2,
      title: "Black Movie Website",
      description: "Movie streaming and information website featuring comprehensive movie database with ratings, reviews, and actor profiles.",
      longDescription: "A specialized website for displaying and presenting movies of various types, designed with an attractive and user-friendly interface that allows users to browse and view movie information.",
      image: "/images/Black MOViE/1.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Owl Carousel", "GSAP"],
      category: "Entertainment Website",
      year: "2023",
      status: "Completed",
      features: [
        "Movie categorization system",
        "Authentication and user accounts",
        "Responsive design",
        "Advanced search functionality",
        "Actor and movie profiles",
        "Rating and review system"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40 dark:from-slate-900 dark:via-blue-900/50 dark:to-cyan-900/60">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeIn">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 dark:from-slate-200 dark:via-blue-400 dark:to-cyan-400 mb-8">
              My Projects
            </h1>
            <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              A collection of innovative web applications showcasing modern technologies and best practices
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} animation="slideUp" delay={index * 200}>
                <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-blue-100/50 dark:border-slate-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="relative overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-semibold border border-blue-100/50 dark:border-slate-600/50">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-emerald-500/90 dark:bg-emerald-600/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                          {project.title}
                        </h3>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {project.year}
                        </span>
                      </div>
                      
                      <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 dark:from-blue-600 dark:to-cyan-600 dark:hover:from-blue-700 dark:hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-28 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-blue-800 dark:to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 dark:from-white dark:via-blue-300 dark:to-cyan-300">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-slate-700 dark:text-blue-200 mb-12 leading-relaxed">
              Let&apos;s discuss your next project and bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl whitespace-nowrap"
              >
                <i className="ri-mail-line mr-3 text-xl"></i>
                Get In Touch
              </Link>
              <a
                href="https://github.com/khaledBakry99"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-10 py-4 bg-slate-700/90 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-lg border border-slate-600 dark:border-white/20 hover:border-slate-700 dark:hover:border-white/30 whitespace-nowrap"
              >
                <i className="ri-github-line mr-3 text-xl"></i>
                View GitHub
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}