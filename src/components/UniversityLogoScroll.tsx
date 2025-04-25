
import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  { name: 'Harvard', logo: '/universities/harvard.png' },
  { name: 'Yale', logo: '/universities/yale.png' },
  { name: 'Princeton', logo: '/universities/princeton.png' },
  { name: 'Columbia', logo: '/universities/columbia.png' },
  { name: 'Brown', logo: '/universities/brown.png' },
  { name: 'Dartmouth', logo: '/universities/dartmouth.png' },
  { name: 'Cornell', logo: '/universities/cornell.png' },
  { name: 'UPenn', logo: '/universities/upenn.png' },
  // Duplicating for continuous scroll
  { name: 'Harvard', logo: '/universities/harvard.png' },
  { name: 'Yale', logo: '/universities/yale.png' },
  { name: 'Princeton', logo: '/universities/princeton.png' },
  { name: 'Columbia', logo: '/universities/columbia.png' },
  { name: 'Brown', logo: '/universities/brown.png' },
  { name: 'Dartmouth', logo: '/universities/dartmouth.png' },
  { name: 'Cornell', logo: '/universities/cornell.png' },
  { name: 'UPenn', logo: '/universities/upenn.png' }
];

const UniversityLogoScroll: React.FC = () => {
  return (
    <div className="overflow-hidden bg-neutral-100 py-8">
      <div className="relative flex">
        <div className="flex space-x-12 animate-slide-left">
          {universities.map((university, index) => (
            <div key={`${university.name}-${index}`} className="flex items-center justify-center h-16 w-48">
              <img 
                src={university.logo} 
                alt={`${university.name} logo`} 
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityLogoScroll;
