
import React from 'react';
import { motion } from 'framer-motion';

const StudentsMarquee = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get inspired from students who got in</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Explore profiles from students who were accepted to Oxford, Cambridge, and other top UK universities.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          {/* First row */}
          <motion.div 
            className="flex space-x-6 mb-6 w-full"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 50,
              ease: "linear"
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`row1-${i}`} className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100 relative">
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + i * 100000}?auto=format&fit=crop&w=500&h=750`} 
                  alt="Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">Student Name</h3>
                  <div className="flex items-center mt-1">
                    <img 
                      src={i % 2 === 0 ? "/universities/oxford.png" : "/universities/cambridge.png"} 
                      alt="University" 
                      className="h-5 w-5 rounded-full bg-white p-0.5"
                    />
                    <span className="text-white text-sm ml-2">
                      {i % 2 === 0 ? "University of Oxford" : "University of Cambridge"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Second row */}
          <motion.div 
            className="flex space-x-6 w-full"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 60,
              ease: "linear"
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`row2-${i}`} className="w-64 h-96 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100 relative">
                <img 
                  src={`https://images.unsplash.com/photo-${1560000000000 + i * 100000}?auto=format&fit=crop&w=500&h=750`} 
                  alt="Student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold">Student Name</h3>
                  <div className="flex items-center mt-1">
                    <img 
                      src={i % 3 === 0 ? "/universities/imperial.png" : i % 3 === 1 ? "/universities/lse.png" : "/universities/ucl.png"} 
                      alt="University" 
                      className="h-5 w-5 rounded-full bg-white p-0.5"
                    />
                    <span className="text-white text-sm ml-2">
                      {i % 3 === 0 ? "Imperial College London" : i % 3 === 1 ? "LSE" : "UCL"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentsMarquee;
