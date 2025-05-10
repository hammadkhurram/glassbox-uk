import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FeaturedProfileProps {
  compact?: boolean;
}

const FeaturedProfile: React.FC<FeaturedProfileProps> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Hamza's Stanford profile has been sent to your email.",
      });
      setEmail('');
    }, 1000);
  };

  if (compact) {
    return (
      <motion.div 
        className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4">
          <h3 className="font-bold text-base mb-2">How Hamza Got Into Stanford</h3>
          
          <div className="flex mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Hamza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-sm">Hamza A.</p>
              <div className="flex">
                <img src="/universities/stanford.png" alt="Stanford University" className="h-4 w-auto" />
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                required
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-1.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Access'}
              <ArrowRight className="ml-1 h-3 w-3" />
            </button>
          </form>
          
          <div className="flex gap-1 mt-2 justify-center">
            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5" />
            <p className="text-[10px] text-neutral-500">
              We respect your privacy.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="container-padding py-8">
      <h2 className="text-center heading-lg mb-2">How Hamza Got Into Stanford</h2>
      <p className="text-center text-neutral-500 mb-6 max-w-3xl mx-auto">
        Get access to this featured profile for free and learn the strategies that helped Hamza secure his spot at Stanford University.
      </p>
      
      <motion.div 
        className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left side - Profile preview */}
        <div className="w-full lg:w-1/2 bg-neutral-100 p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Hamza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Hamza A.</h3>
              <div className="flex items-center mt-1 space-x-2">
                <img 
                  src="/universities/stanford.png" 
                  alt="Stanford University" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium">Common Application</h4>
                <p className="text-sm text-neutral-600">Full application with personal statement</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium">Supplemental Essays</h4>
                <p className="text-sm text-neutral-600">Stanford-specific essay responses</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium">Activity Descriptions</h4>
                <p className="text-sm text-neutral-600">Detailed extracurricular breakdown</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium">Application Strategy Notes</h4>
                <p className="text-sm text-neutral-600">Hamza's insights on his approach</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl">
            <p className="italic text-neutral-600 text-sm">
              "I focused on authenticity in my essays and showing how my unique background influenced my academic interests. This profile shows exactly how I structured my application to stand out."
            </p>
            <p className="text-right font-medium text-sm mt-2">— Hamza</p>
          </div>
        </div>
        
        {/* Right side - Sign up form */}
        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">Get This Profile For Free</h3>
          <p className="text-neutral-600 mb-6">
            Enter your details below to receive Hamza's complete Stanford application profile in your inbox.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
                Country
              </label>
              <input 
                type="text" 
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                placeholder="United States"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full flex justify-center items-center py-3 px-6 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Access'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </button>
            
            <p className="text-xs text-neutral-500 mt-4 text-center">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProfile;
