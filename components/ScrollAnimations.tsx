'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'slideUp':
        return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
      case 'slideLeft':
        return 'opacity-0 translate-x-8 transition-all duration-700 ease-out';
      case 'slideRight':
        return 'opacity-0 -translate-x-8 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 transition-all duration-700 ease-out';
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        '--animate-in': 'opacity-100 translate-x-0 translate-y-0'
      } as React.CSSProperties}
    >
      {children}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </div>
  );
}