
import React from 'react';
import { motion } from 'framer-motion';

const universities = [
  { name: 'Oxford', logo: '/universities/oxford.png' },
  { name: 'Cambridge', logo: '/universities/cambridge.png' },
  { name: 'Imperial College London', logo: '/universities/imperial.png' },
  { name: 'UCL', logo: '/universities/ucl.png' },
  { name: 'LSE', logo: '/universities/lse.png' },
  { name: 'Edinburgh', logo: '/universities/edinburgh.png' },
  { name: 'King\'s College London', logo: '/universities/kings.png' },
  { name: 'Manchester', logo: '/universities/manchester.png' },
  { name: 'Warwick', logo: '/universities/warwick.png' },
  { name: 'Bristol', logo: '/universities/bristol.png' },
  { name: 'Durham', logo: '/universities/durham.png' },
  { name: 'St Andrews', logo: '/universities/st-andrews.png' },
  { name: 'Glasgow', logo: '/universities/glasgow.png' },
  { name: 'Queen Mary', logo: '/universities/qmul.png' },
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
