
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/cv', label: 'CV' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/khaledBakry99',
      icon: 'ri-github-fill',
      label: 'GitHub',
      color: 'hover:text-cyan-400',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      href: 'mailto:khaled.bakry.1999@gmail.com',
      icon: 'ri-mail-fill',
      label: 'Email',
      color: 'hover:text-blue-400',
      target: '_self'
    },
    {
      href: 'tel:+963945364616',
      icon: 'ri-phone-fill',
      label: 'Phone',
      color: 'hover:text-green-400',
      target: '_self'
    }
  ];

  return (
    <footer className="bg-gradient-to-br 
      from-slate-100 via-blue-100 to-cyan-100
      dark:from-slate-800 dark:via-blue-800 dark:to-cyan-800
      text-slate-900 dark:text-white
      relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 
          bg-blue-300/30 dark:bg-blue-400/20
          rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 
          bg-cyan-300/30 dark:bg-cyan-400/20
          rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div className="relative backdrop-blur-xl 
        border-t border-cyan-400/30 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-lg">KB</div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">&lt;/&gt;</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r 
                    from-cyan-600 to-purple-600
                    dark:from-cyan-400 dark:to-purple-400
                    bg-clip-text text-transparent">
                    Khaled Bakry
                  </div>
                  <div className="text-sm 
                    text-blue-700 dark:text-blue-300">
                    Frontend Developer
                  </div>
                </div>
              </div>
              
              <p className="text-blue-700 dark:text-blue-200 mb-6 leading-relaxed max-w-md">
                Passionate Frontend Developer specializing in React and Next.js. 
                Building modern, scalable web applications with exceptional user experiences.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.rel}
                    className={`w-10 h-10 
                      bg-blue-100/80 dark:bg-blue-800/60
                      backdrop-blur-lg 
                      border border-blue-400/60 dark:border-blue-600/50
                      rounded-lg flex items-center justify-center 
                      text-blue-700 dark:text-blue-200
                      ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg 
                      hover:border-cyan-600/50 dark:hover:border-cyan-500/30`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold 
                text-slate-900 dark:text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-700 dark:text-blue-200
                        hover:text-cyan-600 dark:hover:text-cyan-400
                        transition-colors duration-300 flex items-center group"
                    >
                      <i className="ri-arrow-right-s-line text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold 
                text-slate-900 dark:text-white mb-6">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center 
                  text-blue-700 dark:text-blue-200">
                  <i className="ri-mail-line mr-3 
                    text-cyan-600 dark:text-cyan-400"></i>
                  <span className="text-sm">khaled.bakry.1999@gmail.com</span>
                </li>
                <li className="flex items-center 
                  text-blue-700 dark:text-blue-200">
                  <i className="ri-phone-line mr-3 
                    text-cyan-600 dark:text-cyan-400"></i>
                  <span className="text-sm">+963 945 364 616</span>
                </li>
                <li className="flex items-center 
                  text-blue-700 dark:text-blue-200">
                  <i className="ri-map-pin-line mr-3 
                    text-cyan-600 dark:text-cyan-400"></i>
                  <span className="text-sm">Damascus, Syria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t 
            border-cyan-400/30 dark:border-cyan-500/20
            pt-8 mt-8 text-center">
            <p className="text-blue-700 dark:text-blue-200">
              &copy; {currentYear} Khaled Bakry. All rights reserved. Built with{' '}
              <span className="text-cyan-600 dark:text-cyan-400">Next.js</span> &{' '}
              <span className="text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
