
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

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
  },
  {
    id: 5,
    name: "Emma P.",
    university: "Princeton University",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    quote: "The personal essays I found on Glassbox showed me how to tell my story in a compelling way. Princeton was my dream school and Glassbox made it possible."
  },
  {
    id: 6,
    name: "Jason K.",
    university: "Columbia University",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4",
    quote: "I was struggling with my supplemental essays until I found examples on Glassbox. Seeing what worked for other Columbia admits was a game-changer."
  }
];

const TestimonialCarousel: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 320; // Width of a single testimonial card
  const ANIMATION_DURATION = 30; // Seconds for a complete cycle

  useEffect(() => {
    // Clone testimonials for infinite loop effect
    const fullScrollWidth = testimonials.length * CARD_WIDTH;
    
    const animate = async () => {
      await controls.start({
        x: -fullScrollWidth,
        transition: {
          duration: ANIMATION_DURATION,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };
    
    animate();
    
    return () => {
      controls.stop();
    };
  }, [controls]);

  const renderTestimonialCard = (testimonial: Testimonial) => (
    <div 
      key={testimonial.id} 
      className="flex-none w-80 mx-3 bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-neutral-500">{testimonial.university}</p>
          </div>
        </div>
        <p className="italic text-neutral-700">"{testimonial.quote}"</p>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-neutral-50 overflow-hidden">
      <div className="container-padding">
        <h2 className="text-3xl font-bold text-center mb-2">Hear from Our Students</h2>
        <p className="text-center text-neutral-600 mb-10 max-w-2xl mx-auto">
          Students who used Glassbox to gain admission to their dream schools
        </p>
        
        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-4">
            <motion.div 
              className="flex"
              animate={controls}
            >
              {/* First set of testimonials */}
              {testimonials.map(renderTestimonialCard)}
              {/* Duplicate set for seamless looping */}
              {testimonials.map(testimonial => renderTestimonialCard({...testimonial, id: testimonial.id + 100}))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
