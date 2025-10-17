
'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function CV() {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    // Open PDF in new tab for printing
    window.open('/Khaled_Bakry_CV.pdf', '_blank');
  };

  const handleDownload = () => {
    // Download the PDF file
    try {
      const link = document.createElement('a');
      link.href = '/Khaled_Bakry_CV.pdf';
      link.download = 'Khaled_Bakry_CV.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-blue-900/50 dark:to-cyan-900/60 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="no-print mb-8">
          <ScrollAnimation animation="fadeIn">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Professional CV
              </h1>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handlePrint}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
                >
                  <i className="ri-printer-line mr-2"></i>
                  Print CV
                </button>
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
                >
                  <i className="ri-download-line mr-2"></i>
                  Download PDF
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-lg print:shadow-none print:bg-white print:text-black border border-blue-200/30 dark:border-blue-100/10">
          <div className="p-8 print:p-6">
            {/* Header */}
            <div className="text-center mb-8 print-avoid-break">
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white print:text-black mb-2 tracking-widest">
                K H A L E D &nbsp; B A K R Y
              </h1>
              <h2 className="text-xl text-blue-600 dark:text-blue-400 print:text-black mb-6 tracking-wide">
                F r o n t - E n d &nbsp; R e a c t / N e x t . j s &nbsp; D e v e l o p e r
              </h2>
              <div className="flex flex-wrap justify-center gap-6 text-slate-700 dark:text-slate-300 print:text-black text-sm">
                <span className="flex items-center">
                  +963 945 364 616
                </span>
                <span className="flex items-center">
                  Syria, Damascus
                </span>
                <span className="flex items-center">
                  https://github.com/khaledBakry99
                </span>
                <span className="flex items-center">
                  khaled.bakry.1999@gmail.com
                </span>
              </div>
            </div>

            {/* About Me */}
            <div className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                A B O U T &nbsp; M E
              </h3>
              <p className="text-slate-700 dark:text-slate-300 print:text-black leading-relaxed text-justify">
                Results-driven Front-End Developer specializing in React and Next.js, with hands-on experience in building scalable, high-performance web applications. Skilled in crafting responsive UIs, optimizing user experience, and integrating APIs to deliver seamless functionality. Adept at performance tuning, UI/UX design, and API-driven architecture. Passionate about writing clean, maintainable code and collaborating effectively within agile, cross-functional teams.
              </p>
            </div>

            {/* Education */}
            <div className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                E D U C A T I O N
              </h3>
              <div>
                <p className="text-slate-700 dark:text-slate-300 print:text-black">
                  Bachelor's in Software Engineering – Syrian Virtual University
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                S K I L L S
              </h3>
              
              <div className="space-y-4">
                <div className="print-avoid-break">
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2">Front-End Development:</h4>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    HTML5, CSS3, JavaScript (ES6+), React.js, JSX<br/>
                    Responsive Design, Cross-Browser Compatibility, Accessibility (WCAG)<br/>
                    Styling with CSS Grid, Flexbox, Sass, Bootstrap, Tailwind CSS
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2">Back-End Development:</h4>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Basic understanding of database design and SQL<br/>
                    API Design and Integration (RESTful APIs, JSON, Axios)<br/>
                    SQL, PostgreSQL, SQL Server
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2">Tools & Workflow:</h4>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Git, GitHub, VS Code, Postman, Chrome DevTools<br/>
                    Agile/Scrum, Git-based collaboration, Trello
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2">Testing & Quality Assurance:</h4>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Unit Testing (Jest, React Testing Library), Debugging tools, BrowserStack
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black mb-2">Design & Prototyping:</h4>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Figma, Adobe XD, Translating designs into functional UI components
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                P R O J E C T S
              </h3>
              
              <div className="space-y-6">
                <div className="print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black mb-1">
                    1. Web for Project Management System
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 print:text-black mb-2 italic">
                    (React.js, Tailwind CSS, Material UI, Redux Toolkit)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Developed an academic project management dashboard for universities. Built responsive admin panels to manage students, supervisors, and academic projects. Implemented authentication and secure access using JWT tokens. Integrated features for tracking discussions, scheduling sessions, and managing submissions. Designed dashboards with key statistics and search functionality for proposed and featured projects. Utilized Material UI and TailwindCSS for a modern, intuitive, and fully responsive interface.
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black mb-1">
                    2. Web for Cinema Management & Booking System
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 print:text-black mb-2 italic">
                    (React, Tailwind CSS, React Router, Axios)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Developed a comprehensive cinema management system for handling films, halls, staff, and users. Implemented CRUD operations for movies, halls, and food & beverage menus. Built dynamic seat layout configuration and hall management (VIP/Standard). Integrated user roles, authentication, and permissions system with ASP.NET Core REST API. Added interactive dashboards with statistics, search, pagination, and live data updates.
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black mb-1">
                    3. JobScope – Service Provider Marketplace Platform
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 print:text-black mb-2 italic">
                    (React.js, Tailwind CSS, Zustand, Leaflet.js, JWT)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Developed a full-stack web system connecting clients with skilled craftsmen across Syria. Implemented secure authentication and role-based access using JWT. Built advanced search with map-based filters, profession selection, and range detection. Designed a booking and order management system with real-time status updates. Added multi-criteria rating and review features with automatic average calculation.
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black mb-1">
                    4. Syria Express - Shipping & Delivery Management Platform
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 print:text-black mb-2 italic">
                    (React.js, TailwindCSS, Redux Toolkit, React Router)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Developed a comprehensive web-based shipping and delivery management platform for Syria, connecting senders, recipients, and shipping companies through an intuitive digital interface. 5-stage order system (sender, recipient, shipment, delivery, review) with drag-and-drop uploads, real-time pricing, and support for 13 Syrian cities. Implemented real-time shipment tracking with detailed timeline visualization, comprehensive dashboard for users to manage shipments, saved addresses, payment history, and account settings with protected routes using JWT authentication. Responsive UI with dark/light mode, smooth animations, and reusable components (Button, Card, Input, Badge, Alert).
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white print:text-black mb-1">
                    5. Black Movie Website
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 print:text-black mb-2 italic">
                    (HTML - CSS)
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm leading-relaxed">
                    Developed a movie streaming and information website, Black Movie, featuring a wide range of genres and categories. Built responsive user interfaces for browsing movies, viewing detailed information, and exploring actors' profiles. Implemented authentication system with login, signup, and social media integration for secure user access. Designed pages with detailed movie information including ratings, duration, quality, and age suitability.
                  </p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-8 print-avoid-break">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                S O F T &nbsp; S K I L L S
              </h3>
              <ul className="text-slate-700 dark:text-slate-300 print:text-black text-sm space-y-1">
                <li>• Clear communication with technical & non-technical users</li>
                <li>• Strong troubleshooting under pressure</li>
                <li>• Cross-functional team collaboration</li>
                <li>• Multitasking and time management</li>
                <li>• Ownership of issues until resolution</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="print-avoid-break">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white print:text-black mb-4 tracking-widest">
                L A N G U A G E S
              </h3>
              <p className="text-slate-700 dark:text-slate-300 print:text-black text-sm">
                Languages: Arabic (Native), English (Intermediate)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
