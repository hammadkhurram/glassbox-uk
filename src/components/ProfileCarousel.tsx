
import React, { useState, useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample profile data
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
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
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
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
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
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
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
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
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
  }
];

const ProfileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles] = useState(sampleProfiles);
  const [showCount, setShowCount] = useState(3); // Default for desktop
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Adjust showCount based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowCount(1); // Mobile: Show 1
      } else if (window.innerWidth < 1024) {
        setShowCount(2); // Tablet: Show 2
      } else {
        setShowCount(3); // Desktop: Show 3
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Student Profiles</h2>
        <div className="flex space-x-2">
          <button 
            onClick={prevSlide} 
            className="p-2 bg-neutral-200 rounded-full hover:bg-neutral-300 transition-colors"
            aria-label="Previous profiles"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className="p-2 bg-neutral-200 rounded-full hover:bg-neutral-300 transition-colors"
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
          {profiles.map((profile, idx) => (
            <div 
              key={profile.id} 
              className={`w-full sm:${showCount === 1 ? 'w-full' : showCount === 2 ? 'w-1/2' : 'w-1/3'} flex-shrink-0 px-2`}
            >
              <ProfileCard {...profile} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-dots mt-4">
        {Array.from({ length: Math.ceil(profiles.length / showCount) }).map((_, idx) => (
          <button
            key={idx}
            className={`${
              idx === currentIndex ? 'carousel-dot-active' : 'carousel-dot'
            } w-2 h-2 rounded-full mx-1`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileCarousel;
