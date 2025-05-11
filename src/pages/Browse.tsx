
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProfileCard from '@/components/ProfileCard';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

// UK university data
const universities = [
  { id: 'oxford', name: 'University of Oxford', logo: '/universities/oxford.png' },
  { id: 'cambridge', name: 'University of Cambridge', logo: '/universities/cambridge.png' },
  { id: 'imperial', name: 'Imperial College London', logo: '/universities/imperial.png' },
  { id: 'ucl', name: 'UCL', logo: '/universities/ucl.png' },
  { id: 'lse', name: 'LSE', logo: '/universities/lse.png' },
  { id: 'edinburgh', name: 'University of Edinburgh', logo: '/universities/edinburgh.png' },
  { id: 'kings', name: 'King\'s College London', logo: '/universities/kings.png' },
  { id: 'manchester', name: 'University of Manchester', logo: '/universities/manchester.png' },
  { id: 'warwick', name: 'University of Warwick', logo: '/universities/warwick.png' },
  { id: 'bristol', name: 'University of Bristol', logo: '/universities/bristol.png' },
  { id: 'durham', name: 'Durham University', logo: '/universities/durham.png' },
  { id: 'st-andrews', name: 'University of St Andrews', logo: '/universities/st-andrews.png' },
];

// Generate 30 sample profiles
const generateProfiles = () => {
  const profiles = [];
  const firstNames = ["Alex", "Morgan", "Jordan", "Taylor", "Jamie", "Casey", "Riley", "Avery", "Sam", "Cameron", "Skyler", "Dakota", "Charlie", "Finley", "Hayden"];
  const lastInitials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O."];
  const images = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  ];
  
  for (let i = 1; i <= 30; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
    const name = `${firstName} ${lastInitial}`;
    const image = images[Math.floor(Math.random() * images.length)];
    
    // Randomly select 1-3 universities
    const numUniversities = Math.floor(Math.random() * 3) + 1;
    const shuffled = [...universities].sort(() => 0.5 - Math.random());
    const profileUniversities = shuffled.slice(0, numUniversities);
    
    // Features - for UK applications we focus on personal statement and interviews
    const hasPersonalStatement = true;
    const hasInterviewQuestions = profileUniversities.some(uni => 
      uni.id === 'oxford' || uni.id === 'cambridge'
    );
    
    // Price based on number of items
    const price = hasInterviewQuestions ? 30 : 20;
    
    profiles.push({
      id: `profile-${i}`,
      name,
      image,
      universities: profileUniversities.map(uni => ({ name: uni.name, logo: uni.logo })),
      universityIds: profileUniversities.map(uni => uni.id),
      hasPersonalStatement,
      hasInterviewQuestions,
      price
    });
  }
  
  return profiles;
};

const sampleProfiles = generateProfiles();

const Browse: React.FC = () => {
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProfiles, setFilteredProfiles] = useState(sampleProfiles);

  // Filter profiles when search or university selection changes
  useEffect(() => {
    let filtered = sampleProfiles;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(profile => 
        profile.name.toLowerCase().includes(term)
      );
    }
    
    // Filter by selected universities
    if (selectedUniversities.length > 0) {
      filtered = filtered.filter(profile => 
        profile.universityIds.some(id => selectedUniversities.includes(id))
      );
    }
    
    setFilteredProfiles(filtered);
  }, [searchTerm, selectedUniversities]);

  // Toggle university selection
  const toggleUniversity = (id: string) => {
    setSelectedUniversities(prev => 
      prev.includes(id) 
        ? prev.filter(u => u !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Browse Application Profiles</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Explore successful applications from students who were admitted to top UK universities.
              Filter by university to find relevant profiles for your goals.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search profiles..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              
              <button
                className="flex items-center px-4 py-3 border border-neutral-200 rounded-lg md:w-auto w-full justify-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="mr-2">Filter by University</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* University filters */}
            {showFilters && (
              <motion.div 
                className="mt-6 border-t border-neutral-200 pt-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium mb-4">Select Universities:</h3>
                <div className="flex flex-wrap gap-3">
                  {universities.map(uni => (
                    <button
                      key={uni.id}
                      onClick={() => toggleUniversity(uni.id)}
                      className={`flex items-center px-3 py-2 rounded-lg border transition-colors ${
                        selectedUniversities.includes(uni.id)
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-neutral-200 hover:border-accent/50'
                      }`}
                    >
                      <img src={uni.logo} alt={uni.name} className="w-6 h-6 mr-2" />
                      <span>{uni.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-neutral-600">
              Showing {filteredProfiles.length} {filteredProfiles.length === 1 ? 'profile' : 'profiles'}
              {selectedUniversities.length > 0 && ' matching your filters'}
            </p>
          </div>
          
          {/* Profiles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProfiles.map(profile => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
          
          {/* No results */}
          {filteredProfiles.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No profiles found</h3>
              <p className="text-neutral-600">
                Try adjusting your search or filters to find more profiles.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Browse;
