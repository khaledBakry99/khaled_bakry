
'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'ri-code-s-slash-line',
      skills: [
        { name: 'React.js', level: 95, icon: 'ri-reactjs-line' },
        { name: 'Next.js', level: 90, icon: 'ri-nextjs-line' },
        { name: 'TypeScript', level: 85, icon: 'ri-file-code-line' },
        { name: 'JavaScript', level: 95, icon: 'ri-javascript-line' },
        { name: 'HTML5', level: 98, icon: 'ri-html5-line' },
        { name: 'CSS3', level: 95, icon: 'ri-css3-line' },
        { name: 'Tailwind CSS', level: 92, icon: 'ri-palette-line' },
        { name: 'Sass/SCSS', level: 88, icon: 'ri-css3-fill' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: 'ri-tools-line',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'ri-git-branch-line' },
        { name: 'VS Code', level: 95, icon: 'ri-code-line' },
        { name: 'Vite', level: 85, icon: 'ri-flashlight-line' },
        { name: 'Webpack', level: 75, icon: 'ri-settings-3-line' },
        { name: 'ESLint', level: 80, icon: 'ri-bug-line' },
        { name: 'Figma', level: 70, icon: 'ri-pencil-ruler-2-line' },
        { name: 'npm/yarn', level: 90, icon: 'ri-npmjs-line' },
        { name: 'Redux Toolkit', level: 88, icon: 'ri-database-2-line' },
        { name: 'React Router', level: 92, icon: 'ri-route-line' },
        { name: 'Axios', level: 90, icon: 'ri-exchange-line' },
        { name: 'REST APIs', level: 85, icon: 'ri-links-line' },
        { name: 'Responsive Design', level: 95, icon: 'ri-layout-line' }
      ]
    },
    design: {
      title: 'Design & UI/UX',
      icon: 'ri-palette-line',
      skills: [
        { name: 'UI Design', level: 85, icon: 'ri-layout-4-line' },
        { name: 'UX Research', level: 75, icon: 'ri-search-eye-line' },
        { name: 'Prototyping', level: 80, icon: 'ri-draft-line' },
        { name: 'Wireframing', level: 85, icon: 'ri-layout-grid-line' },
        { name: 'Color Theory', level: 90, icon: 'ri-palette-line' },
        { name: 'Typography', level: 85, icon: 'ri-text' },
        { name: 'Adobe XD', level: 70, icon: 'ri-artboard-line' },
        { name: 'Sketch', level: 65, icon: 'ri-pencil-line' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: 'ri-team-line',
      skills: [
        { name: 'Problem Solving', level: 95, icon: 'ri-lightbulb-line' },
        { name: 'Communication', level: 90, icon: 'ri-chat-3-line' },
        { name: 'Team Collaboration', level: 88, icon: 'ri-team-line' },
        { name: 'Project Management', level: 80, icon: 'ri-task-line' },
        { name: 'Time Management', level: 85, icon: 'ri-time-line' },
        { name: 'Leadership', level: 75, icon: 'ri-user-star-line' },
        { name: 'Adaptability', level: 92, icon: 'ri-refresh-line' },
        { name: 'Critical Thinking', level: 88, icon: 'ri-brain-line' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60">

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50/10 backdrop-blur-sm rounded-full border border-blue-200/20 mb-6">
              <i className="ri-code-s-slash-line text-blue-400 mr-2"></i>
              <span className="text-blue-400 font-medium">Technical Skills</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Expertise
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and proficiency levels in modern web development technologies
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Technologies */}
            <div className="group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-8 bg-slate-800/80 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-950/50 group-hover:to-cyan-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-blue-400/30 rounded-tr-xl group-hover:border-blue-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-xl group-hover:border-cyan-400 transition-colors duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50">
                    <i className="ri-code-s-slash-line text-white text-2xl"></i>
                  </div>
                  <div className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-500 inline-block">25+</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-3 rounded-full group-hover:w-20 transition-all duration-500" />
                  <div className="text-slate-200 font-bold text-sm">Technologies</div>
                </div>
              </div>
            </div>

            {/* Years Experience */}
            <div className="group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-8 bg-slate-800/80 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-950/50 group-hover:to-pink-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-purple-400/30 rounded-tr-xl group-hover:border-purple-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-pink-400/30 rounded-bl-xl group-hover:border-pink-400 transition-colors duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/50">
                    <i className="ri-trophy-line text-white text-2xl"></i>
                  </div>
                  <div className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 group-hover:scale-110 transition-transform duration-500 inline-block">3+</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-3 rounded-full group-hover:w-20 transition-all duration-500" />
                  <div className="text-slate-200 font-bold text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Projects Completed */}
            <div className="group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-8 bg-slate-800/80 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-950/50 group-hover:to-teal-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-xl group-hover:border-emerald-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-teal-400/30 rounded-bl-xl group-hover:border-teal-400 transition-colors duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-500/50">
                    <i className="ri-folder-line text-white text-2xl"></i>
                  </div>
                  <div className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-teal-400 to-emerald-500 group-hover:scale-110 transition-transform duration-500 inline-block">5+</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-3 rounded-full group-hover:w-20 transition-all duration-500" />
                  <div className="text-slate-200 font-bold text-sm">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Passion Driven */}
            <div className="group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-8 bg-slate-800/80 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-950/50 group-hover:to-red-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-orange-400/30 rounded-tr-xl group-hover:border-orange-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-red-400/30 rounded-bl-xl group-hover:border-red-400 transition-colors duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-orange-500/50">
                    <i className="ri-lightbulb-line text-white text-2xl"></i>
                  </div>
                  <div className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-red-400 to-orange-500 group-hover:scale-110 transition-transform duration-500 inline-block">100%</div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-3 rounded-full group-hover:w-20 transition-all duration-500" />
                  <div className="text-slate-200 font-bold text-sm">Passion Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-8 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${activeCategory === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-blue-100/10'
                  }`}
              >
                <i className={`${category.icon} mr-2`}></i>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10">
            <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-blue-100/5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                        <i className={`${skill.icon} text-white`}></i>
                      </div>
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Development Workflow
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              My systematic approach to building exceptional web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Planning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10 text-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-950/30 group-hover:to-cyan-950/30 group-hover:border-blue-400/30 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/50">
                    <i className="ri-lightbulb-line text-white text-3xl"></i>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold mb-3">Step 1</span>
                  <h3 className="text-xl font-bold text-slate-100">Planning</h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Understanding requirements, creating wireframes, and planning the architecture
                </p>
              </div>
            </div>

            {/* 2. Design */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10 text-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-950/30 group-hover:to-pink-950/30 group-hover:border-purple-400/30 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/50">
                    <i className="ri-palette-line text-white text-3xl"></i>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold mb-3">Step 2</span>
                  <h3 className="text-xl font-bold text-slate-100">Design</h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Creating beautiful, user-friendly interfaces with modern design principles
                </p>
              </div>
            </div>

            {/* 3. Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10 text-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-950/30 group-hover:to-teal-950/30 group-hover:border-emerald-400/30 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-500/50">
                    <i className="ri-code-line text-white text-3xl"></i>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-bold mb-3">Step 3</span>
                  <h3 className="text-xl font-bold text-slate-100">Development</h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Writing clean, efficient code using modern technologies and best practices
                </p>
              </div>
            </div>

            {/* 4. Deployment */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10 text-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-950/30 group-hover:to-red-950/30 group-hover:border-orange-400/30 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-orange-500/50">
                    <i className="ri-rocket-line text-white text-3xl"></i>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-bold mb-3">Step 4</span>
                  <h3 className="text-xl font-bold text-slate-100">Deployment</h3>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  Testing, optimizing, and deploying applications with continuous monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Continuous Learning
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Always staying updated with the latest technologies and industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-book-open-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Currently Learning</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-400 mr-2"></i>
                  Advanced TypeScript patterns
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-400 mr-2"></i>
                  Server-side rendering with Next.js
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-400 mr-2"></i>
                  GraphQL and Apollo Client
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-blue-400 mr-2"></i>
                  Web3 and blockchain development
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-rocket-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Future Goals</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-400 mr-2"></i>
                  Master full-stack development
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-400 mr-2"></i>
                  Learn cloud architecture (AWS/Azure)
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-400 mr-2"></i>
                  Contribute to open source projects
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-purple-400 mr-2"></i>
                  Build SaaS applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
