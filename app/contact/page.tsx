
'use client';

import { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        const detailedMessage = result.details || result.error || 'Something went wrong. Please try again.';
        
        // Provide specific guidance for common issues
        if (detailedMessage.includes('RESEND_API_KEY is missing')) {
          setErrorMessage('Email service not configured. Please contact the site administrator.');
        } else if (detailedMessage.includes('Unauthorized')) {
          setErrorMessage('Email service configuration error. Please contact the site administrator.');
        } else {
          setErrorMessage(detailedMessage);
        }
        
        console.error('Submission error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-blue-900/50 dark:to-cyan-900/60 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation animation="slideLeft" delay={200}>
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/30 dark:border-blue-100/10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Connect</h2>
                
                <div className="space-y-6">
                  <a href="mailto:khaled.bakry.1999@gmail.com" className="flex items-center group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">Email</h3>
                      <p className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">khaled.bakry.1999@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+963945364616" className="flex items-center group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-phone-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">Phone</h3>
                      <p className="text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">+963 945 364 616</p>
                    </div>
                  </a>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">Location</h3>
                      <p className="text-slate-700 dark:text-slate-300">Damascus, Syria</p>
                    </div>
                  </div>

                  <a href="https://github.com/khaledBakry99" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:bg-white/5 p-3 rounded-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="ri-github-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-semibold">GitHub</h3>
                      <p className="text-slate-700 dark:text-slate-300 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">github.com/khaledBakry99</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/30 dark:border-blue-100/10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Work With Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Clean, maintainable code with modern best practices</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Responsive design that works on all devices</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Fast delivery with attention to detail</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">Ongoing support and maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideRight" delay={400}>
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/30 dark:border-blue-100/10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-blue-300/40 dark:border-blue-100/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-blue-300/40 dark:border-blue-100/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-blue-300/40 dark:border-blue-100/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/10 border border-blue-300/40 dark:border-blue-100/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className="text-right text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-center font-semibold">
                      <i className="ri-check-circle-line mr-2"></i>
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-center font-semibold">
                      <i className="ri-error-warning-line mr-2"></i>
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeIn" delay={600}>
          <div className="mt-16 text-center bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-blue-200/30 dark:border-blue-100/10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need a new website, want to improve an existing one, or have a custom project in mind, 
              I'm here to help bring your vision to life with modern web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:khaled.bakry.1999@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl whitespace-nowrap"
              >
                <i className="ri-mail-line mr-3 text-xl"></i>
                Email Me Directly
              </a>
              <a 
                href="tel:+963945364616"
                className="inline-flex items-center px-8 py-4 bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-xl font-bold text-lg transition-all duration-300 border border-blue-300/40 dark:border-blue-100/20 hover:border-blue-400/60 dark:hover:border-blue-100/40 hover:shadow-lg whitespace-nowrap"
              >
                <i className="ri-phone-line mr-3 text-xl"></i>
                Call Me
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
