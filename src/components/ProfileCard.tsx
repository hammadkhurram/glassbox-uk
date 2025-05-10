
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
      className="profile-card h-full border border-neutral-200 rounded-xl shadow-sm bg-white flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex items-start mb-3">
          <div className="w-1/3">
            <div className="w-16 h-16 bg-neutral-100 rounded-full overflow-hidden">
              <img
                src={image}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-2/3">
            <h3 className="text-base font-bold mb-1">{name}</h3>
            
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {universities.slice(0, 3).map((uni, index) => (
                <img 
                  key={index} 
                  src={uni.logo} 
                  alt={uni.name} 
                  className="h-5 w-auto"
                  title={uni.name}
                />
              ))}
              {universities.length > 3 && (
                <span className="text-xs text-neutral-500">+{universities.length - 3} more</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-1 mb-3">
          {hasCommonApp && (
            <p className="text-xs flex items-center">
              <Check className="w-3 h-3 text-green-500 mr-1.5" />
              Complete Application
            </p>
          )}
          {hasPersonalEssays && (
            <p className="text-xs flex items-center">
              <Check className="w-3 h-3 text-green-500 mr-1.5" />
              Personal Essays
            </p>
          )}
          {hasActivityDescriptions && (
            <p className="text-xs flex items-center">
              <Check className="w-3 h-3 text-green-500 mr-1.5" />
              Activity Descriptions
            </p>
          )}
          {hasSupplementalEssays && (
            <p className="text-xs flex items-center">
              <Check className="w-3 h-3 text-green-500 mr-1.5" />
              Supplemental Essays
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-auto border-t border-neutral-200 p-3 flex justify-between items-center">
        <span className="font-bold text-base">${price}</span>
        <Link 
          to={`/profile/${id}`} 
          className="px-3 py-1.5 bg-black text-white text-sm rounded-full hover:bg-neutral-800 transition-colors"
        >
          Get Access
        </Link>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
