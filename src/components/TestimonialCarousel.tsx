
import React from 'react';
import { motion } from 'framer-motion';

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
    name: "Emma H.",
    university: "Princeton University",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    quote: "I was overwhelmed by the application process until I found Glassbox. The real essays and application materials gave me a clear direction."
  },
  {
    id: 6,
    name: "Andrew P.",
    university: "Columbia University",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    quote: "The transparency that Glassbox provides is revolutionary. It allowed me to strategically position my own experiences in my application."
  }
];

// Duplicate testimonials to ensure smooth infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="testimonial-card bg-white/10 backdrop-blur-sm rounded-xl p-6 mx-3 my-4 shadow-lg flex flex-col h-[280px]">
      <p className="italic text-white/90 mb-4 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white">{testimonial.name}</p>
          <p className="text-white/70 text-sm">{testimonial.university}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="relative py-16 bg-neutral-900 overflow-hidden">
      <div className="container-padding mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
          Hear from Our Students
        </h2>
        <p className="text-white/70 text-center text-lg max-w-2xl mx-auto">
          Students who used Glassbox to gain admission to their dream schools
        </p>
      </div>
      
      {/* First row - slower speed */}
      <div className="testimonial-row mb-6">
        <motion.div 
          className="flex"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          style={{
            width: `${testimonials.length * 330}px`
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} style={{ width: '320px' }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Second row - faster speed, reverse direction */}
      <div className="testimonial-row">
        <motion.div 
          className="flex"
          animate={{
            x: ["-50%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear"
            }
          }}
          style={{
            width: `${testimonials.length * 330}px`
          }}
        >
          {allTestimonials.reverse().map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}-reverse`} style={{ width: '320px' }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
