
import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50/10 backdrop-blur-sm rounded-full border border-blue-200/20 mb-6">
              <i className="ri-user-line text-blue-400 mr-2"></i>
              <span className="text-blue-400 font-medium">About Me</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Passionate Developer
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies and innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <i className="ri-code-s-slash-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">My Journey</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a passionate Frontend Developer from Damascus, Syria, specializing in React and Next.js. 
                  With a strong foundation in modern web technologies, I create scalable and high-performance applications.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My journey in web development started with a curiosity about how websites work, and it has evolved 
                  into a passion for creating beautiful, functional, and user-friendly digital experiences.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <i className="ri-lightbulb-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Philosophy</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating intuitive user interfaces. 
                  Every project is an opportunity to learn something new and push the boundaries of what's possible 
                  with modern web technologies.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/10 shadow-2xl">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20working%20on%20modern%20computer%20setup%20with%20multiple%20monitors%2C%20clean%20workspace%2C%20coding%20environment%2C%20modern%20office%20lighting%2C%20professional%20atmosphere%2C%20high-tech%20workspace%2C%20minimalist%20design%2C%20blue%20and%20purple%20ambient%20lighting&width=500&height=600&seq=about-developer&orientation=portrait"
                  alt="Developer workspace"
                  width={500}
                  height={600}
                  className="w-full h-96 object-cover object-top rounded-2xl mb-6"
                />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50/10 rounded-xl">
                    <div className="flex items-center">
                      <i className="ri-map-pin-line text-blue-400 mr-3"></i>
                      <span className="font-medium text-slate-200">Location</span>
                    </div>
                    <span className="text-slate-300">Damascus, Syria</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-cyan-50/10 rounded-xl">
                    <div className="flex items-center">
                      <i className="ri-briefcase-line text-cyan-400 mr-3"></i>
                      <span className="font-medium text-slate-200">Experience</span>
                    </div>
                    <span className="text-slate-300">3+ Years</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50/10 rounded-xl">
                    <div className="flex items-center">
                      <i className="ri-heart-line text-purple-400 mr-3"></i>
                      <span className="font-medium text-slate-200">Passion</span>
                    </div>
                    <span className="text-slate-300">Web Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-palette-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Design Excellence</h3>
              <p className="text-slate-300 leading-relaxed">
                Creating visually stunning and intuitive interfaces that provide exceptional user experiences.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Performance</h3>
              <p className="text-slate-300 leading-relaxed">
                Building fast, optimized applications that deliver smooth performance across all devices.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Quality Code</h3>
              <p className="text-slate-300 leading-relaxed">
                Writing clean, maintainable, and scalable code following industry best practices.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Collaboration</h3>
              <p className="text-slate-300 leading-relaxed">
                Working effectively with teams and stakeholders to achieve common goals.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-book-open-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Continuous Learning</h3>
              <p className="text-slate-300 leading-relaxed">
                Staying updated with the latest technologies and continuously improving skills.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-lightbulb-flash-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">Innovation</h3>
              <p className="text-slate-300 leading-relaxed">
                Embracing new technologies and creative solutions to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Key milestones in my development career
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-bold">2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Next.js Mastery & Modern Web Architecture</h3>
                  <p className="text-slate-300">
                    Expanded expertise into Next.js framework, focusing on server-side rendering, static site generation, and building production-ready applications with optimal performance.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-bold">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Advanced React Development</h3>
                  <p className="text-slate-300">
                    Mastered advanced React patterns, state management with Redux, and modern development practices.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm font-bold">2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Full-Stack Projects</h3>
                  <p className="text-slate-300">
                    Built comprehensive web applications including cinema management systems and academic project dashboards.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm font-bold">2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Frontend Specialization</h3>
                  <p className="text-slate-300">
                    Focused on frontend development with React, learning modern CSS frameworks and responsive design principles.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm font-bold">2021</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">Web Development Journey Begins</h3>
                  <p className="text-slate-300">
                    Started learning web development fundamentals including HTML, CSS, JavaScript, and basic programming concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
