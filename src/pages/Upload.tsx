
import React from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Upload as UploadIcon } from "lucide-react";

const UploadPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile submitted",
      description: "We'll review your profile and get back to you within 48 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Upload Your Application
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-600 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Share your successful college application and earn income while helping others
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Benefits */}
            <motion.div
              className="bg-neutral-50 p-8 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Benefits of Sharing</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Earn Income</h3>
                    <p className="text-neutral-600">Get paid each time someone purchases access to your profile.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Help Others</h3>
                    <p className="text-neutral-600">Give back by helping students navigate the complex admissions process.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Build Your Network</h3>
                    <p className="text-neutral-600">Connect with students who value your insights and experiences.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Maintain Privacy</h3>
                    <p className="text-neutral-600">We remove personal identifiers while preserving the value of your materials.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Upload Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-neutral-700 mb-1">
                    University
                  </label>
                  <input 
                    type="text" 
                    id="university"
                    required
                    placeholder="e.g., Harvard, Stanford"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-neutral-700 mb-1">
                      Admission Year
                    </label>
                    <select 
                      id="year"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select Year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="major" className="block text-sm font-medium text-neutral-700 mb-1">
                      Major/Program
                    </label>
                    <input 
                      type="text" 
                      id="major"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Materials to Include (Select all that apply)
                  </label>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="common-app" className="w-4 h-4 mr-2" />
                      <label htmlFor="common-app">Common Application</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="personal-essays" className="w-4 h-4 mr-2" />
                      <label htmlFor="personal-essays">Personal Essays</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="supplemental" className="w-4 h-4 mr-2" />
                      <label htmlFor="supplemental">Supplemental Essays</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="activities" className="w-4 h-4 mr-2" />
                      <label htmlFor="activities">Activity Descriptions</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-neutral-700 mb-1">
                    Price ($20-$50)
                  </label>
                  <input 
                    type="number" 
                    id="price"
                    min="20"
                    max="50"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                  <p className="text-xs text-neutral-500 mt-1">You'll receive 70% of each purchase</p>
                </div>
                
                <div>
                  <label htmlFor="documents" className="block text-sm font-medium text-neutral-700 mb-1">
                    Upload Materials (PDF)
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center hover:border-accent transition-colors">
                    <UploadIcon className="mx-auto h-8 w-8 text-neutral-400" />
                    <p className="mt-2 text-sm text-neutral-600">Drag files here or click to browse</p>
                    <input 
                      type="file" 
                      id="documents" 
                      className="hidden"
                      accept=".pdf"
                      multiple
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-1">
                    Brief Bio
                  </label>
                  <textarea 
                    id="bio"
                    rows={3}
                    required
                    placeholder="Share a brief description about yourself and your application journey"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" id="terms" className="w-4 h-4 mt-1 mr-2" required />
                  <label htmlFor="terms" className="text-sm text-neutral-600">
                    I agree to allow Glassbox to share my application materials after removing personal identifiers. I confirm this is my authentic application.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Submit Profile
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UploadPage;
