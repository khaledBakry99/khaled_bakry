'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  projectName: string;
}

export default function ImageGallery({ images, projectName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextImage = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative group">
        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 animate-gradient-x" />
          
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            {/* Current Image */}
            <div
              key={currentIndex}
              className={`absolute inset-0 transition-all duration-700 ${
                direction === 'right'
                  ? 'animate-slideInRight'
                  : 'animate-slideInLeft'
              }`}
            >
              <Image
                src={images[currentIndex]}
                alt={`${projectName} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <i className="ri-arrow-left-line text-2xl" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <i className="ri-arrow-right-line text-2xl" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Fullscreen"
            >
              <i className="ri-fullscreen-line text-xl" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-blue-500 scale-105'
                  : 'ring-2 ring-slate-300 dark:ring-slate-700 hover:ring-blue-400 hover:scale-105'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-blue-500/20" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-20"
            aria-label="Close fullscreen"
          >
            <i className="ri-close-line text-2xl" />
          </button>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`${projectName} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {/* Navigation in Fullscreen */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <i className="ri-arrow-left-line text-3xl" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <i className="ri-arrow-right-line text-3xl" />
            </button>

            {/* Counter in Fullscreen */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-bold text-lg">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
