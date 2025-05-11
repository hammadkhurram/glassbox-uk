
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
  { name: 'Stanford', logo: '/universities/stanford.png' },
  { name: 'MIT', logo: '/universities/mit.png' },
  { name: 'Caltech', logo: '/universities/caltech.png' },
  { name: 'Duke', logo: '/universities/duke.png' },
  { name: 'Johns Hopkins', logo: '/universities/johnshopkins.png' },
  { name: 'NYU', logo: '/universities/nyu.png' },
];

// Create duplicate array for continuous scroll
const allUniversities = [...universities, ...universities];

const UniversityLogoScroll: React.FC = () => {
  return (
    <div className="overflow-hidden bg-neutral-100 py-8">
      <div className="relative">
        <motion.div 
          className="flex items-center"
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
        >
          {allUniversities.map((university, index) => (
            <div 
              key={`${university.name}-${index}`} 
              className="flex items-center justify-center h-16 mx-6"
              style={{ minWidth: '120px' }}
            >
              <div className="h-10 w-auto bg-white p-1 rounded flex items-center justify-center">
                <img 
                  src={university.logo} 
                  alt={`${university.name} logo`} 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityLogoScroll;
