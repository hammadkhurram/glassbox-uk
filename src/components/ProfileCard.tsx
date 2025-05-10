
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProfileCardProps {
  id: string;
  name: string;
  image: string;
  universities: Array<{name: string, logo: string}>;
  hasCommonApp: boolean;
  hasPersonalEssays: boolean;
  hasActivityDescriptions: boolean;
  hasSupplementalEssays: boolean;
  price: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  image,
  universities,
  hasCommonApp,
  hasPersonalEssays,
  hasActivityDescriptions,
  hasSupplementalEssays,
  price
}) => {
  return (
    <motion.div 
      className="profile-card h-full border border-neutral-200 rounded-xl shadow-sm bg-white"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex p-4 md:p-6">
        <div className="w-1/3">
          <div className="avatar-circle w-24 h-24 md:w-32 md:h-32 bg-neutral-100 rounded-full overflow-hidden">
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="w-2/3 pl-4">
          <h3 className="text-lg md:text-xl font-bold">{name}</h3>
          
          <div className="flex flex-wrap items-center mt-2 gap-2">
            {universities.slice(0, 3).map((uni, index) => (
              <img 
                key={index} 
                src={uni.logo} 
                alt={uni.name} 
                className="h-6 w-auto"
                title={uni.name}
              />
            ))}
            {universities.length > 3 && (
              <span className="text-sm text-neutral-500">+{universities.length - 3} more</span>
            )}
          </div>
          
          <div className="mt-4 space-y-1">
            {hasCommonApp && (
              <p className="text-sm flex items-center">
                <Check className="w-3 h-3 text-green-500 mr-2" />
                Complete Application
              </p>
            )}
            {hasPersonalEssays && (
              <p className="text-sm flex items-center">
                <Check className="w-3 h-3 text-green-500 mr-2" />
                Personal Essays
              </p>
            )}
            {hasActivityDescriptions && (
              <p className="text-sm flex items-center">
                <Check className="w-3 h-3 text-green-500 mr-2" />
                Activity Descriptions
              </p>
            )}
            {hasSupplementalEssays && (
              <p className="text-sm flex items-center">
                <Check className="w-3 h-3 text-green-500 mr-2" />
                Supplemental Essays
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto border-t border-neutral-200 p-4 flex justify-between items-center">
        <span className="font-bold text-lg">${price}</span>
        <Link 
          to={`/profile/${id}`} 
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
        >
          Get Access
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
