
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimations';
import ImageGallery from '@/components/ImageGallery';

const projectsData = {
  1: {
    title: "Project Management System",
    description: "Academic project management dashboard for universities with comprehensive features for managing students, supervisors, and academic projects.",
    problem: "Universities struggled with managing academic projects, tracking student progress, and coordinating between supervisors and students. Traditional methods were inefficient and lacked proper oversight mechanisms.",
    solution: "Developed an academic project management dashboard for universities. Built responsive admin panels to manage students, supervisors, and academic projects. Implemented authentication and secure access using JWT tokens. Integrated features for tracking discussions, scheduling sessions, and managing submissions.",
    techStack: ["React.js", "Material UI", "Redux Toolkit", "JWT", "TailwindCSS", "Axios"],
    challenges: [
      "Implementing secure JWT authentication for multiple user roles",
      "Creating intuitive admin panels for complex academic workflows",
      "Designing efficient project tracking and submission systems",
      "Ensuring responsive design across all university devices"
    ],
    lessons: [
      "Importance of role-based access control in educational systems",
      "Value of Material UI for consistent design patterns",
      "Effective state management with Redux Toolkit",
      "Security considerations in academic data management"
    ],
    features: [
      "Student and supervisor management",
      "Project tracking and submissions",
      "JWT authentication system",
      "Discussion and scheduling features",
      "Statistics dashboard with key metrics",
      "Search functionality for projects"
    ],
    images: [
      "/images/Project Management System/1.jpg",
      "/images/Project Management System/2.jpg",
      "/images/Project Management System/3.jpg",
      "/images/Project Management System/4.jpg",
      "/images/Project Management System/5.jpg",
      "/images/Project Management System/6.jpg",
      "/images/Project Management System/7.jpg",
      "/images/Project Management System/8.jpg",
      "/images/Project Management System/9.jpg",
      "/images/Project Management System/11.jpg",
      "/images/Project Management System/12.jpg",
      "/images/Project Management System/13.jpg",
      "/images/Project Management System/14.jpg"
    ]
  },
  2: {
    title: "Black Movie Website",
    description: "Comprehensive movie streaming and information website featuring wide range of genres, categories, and advanced user authentication system.",
    problem: "Movie enthusiasts needed a comprehensive platform to discover films with detailed categorization, actor information, and seamless user experience. Existing platforms lacked proper organization and modern design.",
    solution: "Developed a movie streaming and information website, Black Movie, featuring a wide range of genres and categories. Built responsive user interfaces for browsing movies, viewing detailed information, and exploring actors' profiles. Implemented authentication system with login, signup, and social media integration.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Owl Carousel", "Font Awesome", "Box Icons"],
    challenges: [
      "Creating smooth animations and transitions with GSAP",
      "Implementing responsive carousel for movie displays",
      "Designing intuitive categorization system",
      "Ensuring cross-browser compatibility with pure web technologies"
    ],
    lessons: [
      "Power of vanilla JavaScript for complex interactions",
      "Importance of animation libraries for user engagement",
      "Effective use of CSS Grid and Flexbox for layouts",
      "Value of semantic HTML for accessibility"
    ],
    features: [
      "Movie categorization by genre, year, language, country",
      "Actor profiles and detailed filmography",
      "Authentication with social media integration",
      "Detailed movie information with ratings and duration",
      "Advanced search and filtering functionality",
      "Responsive design with smooth animations"
    ],
    images: [
      "/images/Black MOViE/1.png",
      "/images/Black MOViE/2.png",
      "/images/Black MOViE/3.png",
      "/images/Black MOViE/4.png",
      "/images/Black MOViE/5.png",
      "/images/Black MOViE/6.png"
    ]
  },
  3: {
    title: "JobScope – Service Provider Marketplace Platform",
    description: "Comprehensive web system connecting clients with skilled craftsmen across Syria, featuring advanced search, booking system, and interactive mapping.",
    problem: "Clients struggled to find reliable craftsmen in Syria, while skilled workers lacked a platform to showcase their services. Existing solutions were either too generic or lacked essential features like location-based search and secure booking.",
    solution: "JobScope is a comprehensive web system that connects service seekers with craftsmen in Syria. Built advanced search with map-based filters, profession selection, and range detection. Designed a booking and order management system with real-time status updates. Added multi-criteria rating and review features.",
    techStack: ["React.js", "Tailwind CSS", "Zustand", "Leaflet.js", "JWT", "React Hook Form", "Axios"],
    challenges: [
      "Implementing accurate location-based search with Leaflet.js",
      "Creating secure authentication system with JWT",
      "Designing effective booking and order management workflow",
      "Building multi-criteria rating system with automatic calculations"
    ],
    lessons: [
      "Complexity of marketplace platform development",
      "Importance of user verification and trust systems",
      "Effective use of mapping libraries for location services",
      "State management with Zustand for complex applications"
    ],
    features: [
      "Advanced search with map-based filters",
      "Booking and order management system",
      "Multi-criteria rating and review system",
      "Interactive maps with geographical range detection",
      "JWT authentication and role-based access",
      "Real-time status updates and notifications"
    ],
    images: [
      "/images/JobScope/1.png",
      "/images/JobScope/2.png",
      "/images/JobScope/3.png",
      "/images/JobScope/4.png",
      "/images/JobScope/6.png",
      "/images/JobScope/7.png",
      "/images/JobScope/8.png",
      "/images/JobScope/9.png",
      "/images/JobScope/10.png",
      "/images/JobScope/11.png",
      "/images/JobScope/12.png",
      "/images/JobScope/13.png",
      "/images/JobScope/14.png",
      "/images/JobScope/15.png",
      "/images/JobScope/16.png",
      "/images/JobScope/17.png",
      "/images/JobScope/19.png",
      "/images/JobScope/20.png",
      "/images/JobScope/21.png",
      "/images/JobScope/22.png"
    ]
  },
  4: {
    title: "Cinema Management & Booking System",
    description: "Complete cinema booking platform with seat selection, payment integration, and movie scheduling. Features responsive design and intuitive user experience.",
    problem: "Traditional cinema booking systems were outdated, difficult to use, and lacked modern features. Customers faced long queues and limited booking options, while cinema operators struggled with manual management.",
    solution: "Created a modern, user-friendly booking platform with interactive seat selection, real-time availability, and seamless payment processing. Included admin panel for efficient cinema management.",
    techStack: ["React", "Tailwind CSS", "React Router", "Axios", "Context API", "Local Storage"],
    challenges: [
      "Implementing real-time seat availability updates",
      "Creating an intuitive seat selection interface",
      "Managing complex booking states and user sessions",
      "Ensuring responsive design across all device sizes"
    ],
    lessons: [
      "Importance of user experience in booking flows",
      "Effective state management for complex user interactions",
      "Value of responsive design in customer-facing applications",
      "Integration challenges with third-party payment systems"
    ],
    features: [
      "Interactive seat selection interface",
      "Movie scheduling and showtimes management",
      "Payment processing integration",
      "Booking history and management",
      "Admin panel for cinema operators",
      "Responsive mobile-first design"
    ],
    images: [
      "/images/Cinema Management/1.png",
      "/images/Cinema Management/2.jpg",
      "/images/Cinema Management/3.png",
      "/images/Cinema Management/4.png",
      "/images/Cinema Management/5.png",
      "/images/Cinema Management/6.png",
      "/images/Cinema Management/7.png",
      "/images/Cinema Management/8.png",
      "/images/Cinema Management/9.png",
      "/images/Cinema Management/10.png",
      "/images/Cinema Management/11.png",
      "/images/Cinema Management/12.png",
      "/images/Cinema Management/13.png",
      "/images/Cinema Management/14.png",
      "/images/Cinema Management/15.png",
      "/images/Cinema Management/16.png",
      "/images/Cinema Management/17.png",
      "/images/Cinema Management/18.png",
      "/images/Cinema Management/19.png",
      "/images/Cinema Management/20.png",
      "/images/Cinema Management/21.jpg"
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[parseInt(id) as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 py-20 flex items-center justify-center">
        <div className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-blue-100/10">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollAnimation animation="fadeIn">
          <div className="mb-8">
            <Link 
              href="/projects"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-lg transition-all duration-300 border border-blue-100/10"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="mb-12">
            <ImageGallery images={project.images} projectName={project.title} />
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <ScrollAnimation animation="slideLeft" delay={300}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-question-line text-white"></i>
                  </div>
                  The Problem
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={400}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-lightbulb-line text-white"></i>
                  </div>
                  The Solution
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={500}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-tools-line text-white"></i>
                  </div>
                  Challenges & Solutions
                </h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="ri-arrow-right-s-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={600}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-100/10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-book-line text-white"></i>
                  </div>
                  Lessons Learned
                </h2>
                <ul className="space-y-4">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-300">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <div className="space-y-6">
            <ScrollAnimation animation="slideRight" delay={300}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-100/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-code-line text-white text-sm"></i>
                  </div>
                  Tech Stack
                </h3>
                <div className="space-y-3">
                  {project.techStack.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-slate-300 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={400}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-100/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  Key Features
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <i className="ri-star-fill text-yellow-500 mr-3 text-sm"></i>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation animation="fadeIn" delay={700}>
          <div className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-blue-100/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Similar Work?</span>
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how I can help bring your project ideas to life with cutting-edge technology and innovative solutions
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-mail-line mr-3 text-lg"></i>
              Start a Conversation
              <i className="ri-arrow-right-line ml-3 text-lg"></i>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
