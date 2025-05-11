
import React, { useState, useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated sample profile data with more profiles and consistent images
const sampleProfiles = [
  {
    id: '1',
    name: 'Alex Kim',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    universities: [
      {name: 'Harvard', logo: '/universities/harvard.png'},
      {name: 'Stanford', logo: '/universities/stanford.png'},
      {name: 'Yale', logo: '/universities/yale.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true,
    price: 30
  },
  {
    id: '2',
    name: 'Sophia Chen',
    image: 'https://images.unsplash.com/photo-1592188657836-c9753b21a0a9',
    universities: [
      {name: 'MIT', logo: '/universities/mit.png'},
      {name: 'Caltech', logo: '/universities/caltech.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: false,
    price: 20
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3',
    universities: [
      {name: 'Princeton', logo: '/universities/princeton.png'},
      {name: 'Columbia', logo: '/universities/columbia.png'},
      {name: 'Brown', logo: '/universities/brown.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: false,
    hasSupplementalEssays: true,
    price: 30
  },
  {
    id: '4',
    name: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21',
    universities: [
      {name: 'UPenn', logo: '/universities/upenn.png'},
      {name: 'Cornell', logo: '/universities/cornell.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: false,
    price: 20
  },
  {
    id: '5',
    name: 'David Wilson',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6',
    universities: [
      {name: 'Duke', logo: '/universities/duke.png'},
      {name: 'Johns Hopkins', logo: '/universities/johnshopkins.png'},
      {name: 'NYU', logo: '/universities/nyu.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: false,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true,
    price: 30
  },
  {
    id: '6',
    name: 'Rachel Martinez',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70',
    universities: [
      {name: 'Stanford', logo: '/universities/stanford.png'},
      {name: 'MIT', logo: '/universities/mit.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true,
    price: 30
  }
];

const ProfileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles] = useState(sampleProfiles);
  const [showCount, setShowCount] = useState(3); // Default for desktop
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adjust showCount based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowCount(1); // Mobile: Show 1
      } else if (window.innerWidth < 1024) {
        setShowCount(2); // Tablet: Show 2
      } else if (window.innerWidth < 1280) {
        setShowCount(3); // Small Desktop: Show 3
      } else {
        setShowCount(3); // Large Desktop: Show 3
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(profiles.length / showCount)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + Math.ceil(profiles.length / showCount)) % Math.ceil(profiles.length / showCount)
    );
  };

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Student Profiles</h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide} 
            className="p-2 bg-neutral-800 text-white rounded-full hover:bg-black transition-colors"
            aria-label="Previous profiles"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className="p-2 bg-neutral-800 text-white rounded-full hover:bg-black transition-colors"
            aria-label="Next profiles"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div ref={carouselRef} className="overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: -currentIndex * (100 / showCount) + '%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex-shrink-0 px-2"
              style={{ width: `${100 / showCount}%` }}
            >
              <ProfileCard {...profile} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-dots mt-6 flex justify-center">
        {Array.from({ length: Math.ceil(profiles.length / showCount) }).map((_, idx) => (
          <button
            key={idx}
            className={`${
              idx === currentIndex ? 'w-8 bg-black' : 'w-2 bg-neutral-300'
            } h-2 rounded-full mx-1 transition-all duration-300`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
