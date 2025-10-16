'use client';

import { useState } from 'react';
import SkillTree from '@/components/SkillTree';
import ScrollAnimation from '@/components/ScrollAnimations';

function TraditionalSkillsView() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'ri-code-s-slash-line',
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'ri-git-branch-line' },
        { name: 'VS Code', level: 95, icon: 'ri-code-line' },
        { name: 'Redux Toolkit', level: 88, icon: 'ri-database-2-line' },
        { name: 'React Router', level: 92, icon: 'ri-route-line' },
        { name: 'Axios', level: 90, icon: 'ri-exchange-line' },
        { name: 'REST APIs', level: 85, icon: 'ri-links-line' }
      ]
    },
    design: {
      title: 'Design & UI/UX',
      icon: 'ri-palette-line',
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'UI Design', level: 85, icon: 'ri-layout-4-line' },
        { name: 'UX Research', level: 75, icon: 'ri-search-eye-line' },
        { name: 'Prototyping', level: 80, icon: 'ri-draft-line' },
        { name: 'Wireframing', level: 85, icon: 'ri-layout-grid-line' },
        { name: 'Color Theory', level: 90, icon: 'ri-palette-line' },
        { name: 'Typography', level: 85, icon: 'ri-text' }
      ]
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
              }`}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <ScrollAnimation key={skill.name} animation="slideUp" delay={index * 100}>
              <div className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${skill.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-400">Proficiency</span>
                    <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  const [viewMode, setViewMode] = useState<'traditional' | 'tree'>('tree');

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
              A comprehensive overview of my technical skills and proficiency levels
            </p>

            {/* View Mode Toggle */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setViewMode('traditional')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${viewMode === 'traditional'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
                  }`}
              >
                <i className="ri-list-check mr-2"></i>
                Traditional View
              </button>
              <button
                onClick={() => setViewMode('tree')}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${viewMode === 'tree'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
                  }`}
              >
                <i className="ri-game-line mr-2"></i>
                🎮 Skill Tree (RPG Style)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditional Rendering */}
      {viewMode === 'tree' ? (
        <SkillTree />
      ) : (
        <TraditionalSkillsView />
      )}
    </div>
  );
}
