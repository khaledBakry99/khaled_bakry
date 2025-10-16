'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-cyan-900/60 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Error Container */}
        <div className="relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-3xl animate-pulse"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-red-500/20 shadow-2xl">
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-error-warning-line text-5xl text-white"></i>
                </div>
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
                Oops! Something Went Wrong
              </span>
            </h1>

            {/* Error Message */}
            <p className="text-slate-300 text-center text-lg mb-8 leading-relaxed">
              We encountered an unexpected error. Don't worry, it's not your fault!
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <p className="text-red-400 text-sm font-mono break-all">
                  {error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Try Again Button */}
              <button
                onClick={reset}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <i className="ri-refresh-line mr-2 text-xl"></i>
                  Try Again
                </span>
              </button>

              {/* Go Home Button */}
              <Link
                href="/"
                className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all duration-300 border border-white/20 hover:border-white/40 overflow-hidden"
              >
                <span className="relative flex items-center justify-center">
                  <i className="ri-home-line mr-2 text-xl"></i>
                  Go Home
                </span>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-slate-400 text-sm mb-4">
                If this problem persists, please contact me:
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <i className="ri-mail-line mr-2"></i>
                Get in Touch
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
