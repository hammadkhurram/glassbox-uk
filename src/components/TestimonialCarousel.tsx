
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    university: "Stanford University",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    quote: "Glassbox gave me the inside look I needed to craft my application. Reading successful profiles helped me understand what Stanford was looking for!"
  },
  {
    id: 2,
    name: "Michael L.",
    university: "Yale University",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    quote: "Seeing actual application essays from admitted students was eye-opening. It helped me find my unique voice and stand out from other applicants."
  },
  {
    id: 3,
    name: "Jessica T.",
    university: "MIT",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    quote: "After browsing through profiles of MIT students, I understood how to highlight my technical projects in a way that impressed admissions officers."
  },
  {
    id: 4,
    name: "David R.",
    university: "Harvard University",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    quote: "Glassbox is the reason I got into Harvard. I could finally see what worked for other students and adapt those strategies for my own application."
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div 
      className="relative overflow-hidden apple-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="apple-heading">Hear from Our Students</div>
      <p className="apple-subheading">
        Students who used Glassbox to gain admission to their dream schools
      </p>

      <div className="relative max-w-4xl mx-auto h-64 md:h-80">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute w-full h-full flex items-center"
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="hidden md:block w-1/4 pr-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <div className="mb-6">
                  <p className="text-lg md:text-xl italic mb-4">"
                    {testimonials[currentIndex].quote}
                  "</p>
                  <div className="flex items-center md:hidden mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-neutral-500">{testimonials[currentIndex].university}</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-neutral-500">{testimonials[currentIndex].university}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg z-10"
          onClick={goToPrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg z-10"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-neutral-800 w-4' : 'bg-neutral-300'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
