'use client';

import { useState } from 'react';

interface Skill {
  id: string;
  name: string;
  level: number;
  unlocked: boolean;
  dependencies: string[];
  icon: string;
  category: string;
  description: string;
  position: { x: number; y: number };
}

export default function SkillTree() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Row 1 - Foundation
    {
      id: 'html',
      name: 'HTML5',
      level: 98,
      unlocked: true,
      dependencies: [],
      icon: 'ri-html5-line',
      category: 'Foundation',
      description: 'Semantic HTML, Accessibility, SEO',
      position: { x: 2, y: 1 }
    },
    {
      id: 'css',
      name: 'CSS3',
      level: 95,
      unlocked: true,
      dependencies: [],
      icon: 'ri-css3-line',
      category: 'Foundation',
      description: 'Flexbox, Grid, Animations',
      position: { x: 4, y: 1 }
    },
    
    // Row 2 - Core
    {
      id: 'js',
      name: 'JavaScript',
      level: 95,
      unlocked: true,
      dependencies: ['html', 'css'],
      icon: 'ri-javascript-line',
      category: 'Core',
      description: 'ES6+, Async/Await, DOM',
      position: { x: 3, y: 2 }
    },
    {
      id: 'ts',
      name: 'TypeScript',
      level: 85,
      unlocked: true,
      dependencies: ['js'],
      icon: 'ri-file-code-line',
      category: 'Core',
      description: 'Type Safety, Interfaces, Generics',
      position: { x: 5, y: 2 }
    },
    
    // Row 3 - Frameworks
    {
      id: 'react',
      name: 'React.js',
      level: 95,
      unlocked: true,
      dependencies: ['js'],
      icon: 'ri-reactjs-line',
      category: 'Framework',
      description: 'Hooks, Context, Performance',
      position: { x: 2, y: 3 }
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      level: 90,
      unlocked: true,
      dependencies: ['react', 'ts'],
      icon: 'ri-nextjs-line',
      category: 'Framework',
      description: 'SSR, SSG, App Router',
      position: { x: 4, y: 3 }
    },
    
    // Row 4 - Styling
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      level: 92,
      unlocked: true,
      dependencies: ['css'],
      icon: 'ri-palette-line',
      category: 'Styling',
      description: 'Utility-first, Responsive',
      position: { x: 1, y: 4 }
    },
    {
      id: 'sass',
      name: 'Sass/SCSS',
      level: 88,
      unlocked: true,
      dependencies: ['css'],
      icon: 'ri-css3-fill',
      category: 'Styling',
      description: 'Variables, Mixins, Nesting',
      position: { x: 3, y: 4 }
    },
    
    // Row 5 - State Management
    {
      id: 'redux',
      name: 'Redux Toolkit',
      level: 88,
      unlocked: true,
      dependencies: ['react'],
      icon: 'ri-database-2-line',
      category: 'State',
      description: 'Global State, Slices, Thunks',
      position: { x: 2, y: 5 }
    },
    
    // Row 6 - Tools
    {
      id: 'git',
      name: 'Git & GitHub',
      level: 90,
      unlocked: true,
      dependencies: ['js'],
      icon: 'ri-git-branch-line',
      category: 'Tools',
      description: 'Version Control, Collaboration',
      position: { x: 5, y: 4 }
    },
    {
      id: 'vscode',
      name: 'VS Code',
      level: 95,
      unlocked: true,
      dependencies: ['git'],
      icon: 'ri-code-line',
      category: 'Tools',
      description: 'Extensions, Shortcuts, Debugging',
      position: { x: 6, y: 5 }
    },
    
    // Row 7 - Advanced
    {
      id: 'performance',
      name: 'Performance',
      level: 85,
      unlocked: true,
      dependencies: ['react', 'nextjs'],
      icon: 'ri-rocket-line',
      category: 'Advanced',
      description: 'Optimization, Lazy Loading',
      position: { x: 3, y: 6 }
    },
  ];

  // حساب الخطوط بين المهارات
  const getConnectionPath = (from: Skill, to: Skill) => {
    const fromX = from.position.x * 150 + 100;
    const fromY = from.position.y * 120 - 20 + 60;
    const toX = to.position.x * 150 + 100;
    const toY = to.position.y * 120 - 20 + 60;

    // منحنى بيزيه للخط
    const midY = (fromY + toY) / 2;
    return `M ${fromX} ${fromY} Q ${fromX} ${midY}, ${(fromX + toX) / 2} ${midY} T ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/30 dark:to-purple-900/30 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 mb-4">
            🎮 Skill Tree
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            Unlock and master technologies like an RPG game
          </p>
        </div>

        {/* Skill Tree Container */}
        <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 pt-8 pb-24 border border-blue-200/30 dark:border-slate-700/50 shadow-2xl">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            
            {skills.map(skill => 
              skill.dependencies.map(depId => {
                const dependency = skills.find(s => s.id === depId);
                if (!dependency) return null;
                
                return (
                  <path
                    key={`${skill.id}-${depId}`}
                    d={getConnectionPath(dependency, skill)}
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    className={`transition-all duration-300 ${
                      hoveredSkill === skill.id || hoveredSkill === depId
                        ? 'opacity-100 stroke-[5]'
                        : 'opacity-30'
                    }`}
                  />
                );
              })
            )}
          </svg>

          {/* Skills Grid */}
          <div className="relative" style={{ height: '750px', marginTop: '-80px' }}>
            {skills.map((skill) => {
              const radius = 44;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (skill.level / 100) * circumference;

              return (
                <div
                  key={skill.id}
                  className="absolute"
                  style={{
                    left: `${skill.position.x * 150}px`,
                    top: `${skill.position.y * 120 - 50}px`,
                    zIndex: hoveredSkill === skill.id ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(skill)}
                >
                  {/* Skill Node */}
                  <div className="relative group cursor-pointer">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 -m-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl transition-opacity duration-300 ${
                      hoveredSkill === skill.id ? 'opacity-75' : 'opacity-0'
                    }`} />

                    {/* Progress Circle */}
                    <div className="relative w-28 h-28">
                      <svg className="absolute inset-0 -rotate-90 w-full h-full">
                        {/* Background Circle */}
                        <circle
                          cx="56"
                          cy="56"
                          r={radius}
                          stroke="#1e293b"
                          strokeWidth="6"
                          fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                          cx="56"
                          cy="56"
                          r={radius}
                          stroke="url(#skillGradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          className="transition-all duration-1000"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Icon Container */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                          skill.unlocked ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
                        } ${
                          hoveredSkill === skill.id ? 'scale-110 shadow-2xl' : ''
                        }`}>
                          <i className={`${skill.icon} text-3xl text-white`}></i>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-xs font-bold shadow-lg">
                        {skill.level}%
                      </div>
                    </div>

                    {/* Skill Name */}
                    <div className="text-center mt-3">
                      <h3 className="text-slate-900 dark:text-white font-bold text-sm">{skill.name}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{skill.category}</p>
                    </div>

                    {/* Hover Tooltip */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-300 ${
                      hoveredSkill === skill.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}>
                      <div className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-xl p-4 shadow-2xl whitespace-nowrap">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1">{skill.name}</h4>
                        <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">{skill.description}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{skill.level}%</span>
                        </div>
                        {skill.dependencies.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-slate-300 dark:border-slate-700">
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              Requires: {skill.dependencies.map(dep => 
                                skills.find(s => s.id === dep)?.name
                              ).join(', ')}
                            </p>
                          </div>
                        )}
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="w-3 h-3 bg-white dark:bg-slate-800 border-r border-b border-blue-200 dark:border-slate-700 transform rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
            <div className="text-4xl font-black text-blue-400 mb-2">
              {skills.filter(s => s.unlocked).length}
            </div>
            <div className="text-slate-700 dark:text-slate-300 font-medium">Skills Unlocked</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
            <div className="text-4xl font-black text-purple-400 mb-2">
              {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
            </div>
            <div className="text-slate-700 dark:text-slate-300 font-medium">Average Mastery</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/30">
            <div className="text-4xl font-black text-emerald-400 mb-2">
              {new Set(skills.map(s => s.category)).size}
            </div>
            <div className="text-slate-700 dark:text-slate-300 font-medium">Categories</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
            <div className="text-4xl font-black text-orange-400 mb-2">
              {skills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-slate-700 dark:text-slate-300 font-medium">Expert Level</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span>Unlocked & Mastered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-slate-700 rounded-full" />
            <span>Locked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span>Dependencies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
