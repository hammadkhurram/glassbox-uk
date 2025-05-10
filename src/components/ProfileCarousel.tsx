import React, { useState, useRef, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample profile data with consistent images
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
  },
  {
    id: '7',
    name: 'James Park',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca',
    universities: [
      {name: 'Harvard', logo: '/universities/harvard.png'},
      {name: 'Yale', logo: '/universities/yale.png'},
      {name: 'Princeton', logo: '/universities/princeton.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true,
    price: 30
  },
  {
    id: '8',
    name: 'Olivia Thompson',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    universities: [
      {name: 'Dartmouth', logo: '/universities/dartmouth.png'},
      {name: 'Brown', logo: '/universities/brown.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: false,
    hasSupplementalEssays: true,
    price: 25
  },
  {
    id: '9',
    name: 'Daniel Lee',
    image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4',
    universities: [
      {name: 'Princeton', logo: '/universities/princeton.png'},
      {name: 'Harvard', logo: '/universities/harvard.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: true,
    price: 30
  },
  {
    id: '10',
    name: 'Maya Patel',
    image: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58',
    universities: [
      {name: 'Yale', logo: '/universities/yale.png'},
      {name: 'Columbia', logo: '/universities/columbia.png'}
    ],
    hasCommonApp: true,
    hasPersonalEssays: true,
    hasActivityDescriptions: true,
    hasSupplementalEssays: false,
    price: 25
  }
];

const ProfileCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles] = useState(sampleProfiles);
  const [showCount, setShowCount] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adjust showCount based on screen size
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setShowCount(1); // Mobile: Show 1
      } else if (window.innerWidth < 768) {
        setShowCount(2); // Smaller tablets: Show 2
      } else if (window.innerWidth < 1024) {
        setShowCount(3); // Tablets: Show 3
      } else {
        setShowCount(4); // Desktops: Show 4 (reduced from 5 for consistency)
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
              className="px-2"
              style={{ 
                width: `${100 / showCount}%`,
              }}
            >
              <div className="h-full">
                <ProfileCard {...profile} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel-dots mt-6 flex justify-center">
        {Array.from({ length: Math.ceil(profiles.length / showCount) }).map((_, idx) => (
          <button
            key={idx}
            className={`${
              idx === currentIndex ? 'w-8 bg-neutral-800' : 'w-2 bg-neutral-300'
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
