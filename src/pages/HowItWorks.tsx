
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Unlock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-4">How Glassbox Works</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're making college admissions transparent and accessible for everyone.
            </p>
          </div>
          
          {/* Problem Statement */}
          <section className="max-w-4xl mx-auto mb-24">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">College Admissions Shouldn't Be a Black Box</h2>
                <p className="text-lg mb-4 text-neutral-600">
                  Every year, millions of students apply to colleges without knowing what makes an application successful.
                </p>
                <p className="text-lg mb-6 text-neutral-600">
                  Traditional college counseling costs thousands of dollars, putting expert guidance out of reach for most students.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Private college counselors charge $200+ per hour
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Comprehensive packages often cost $5,000 to $10,000+
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Students have no idea what actually works in applications
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                  alt="Student stressed about college applications"
                  className="rounded-2xl shadow-lg object-cover h-96 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </section>
          
          {/* Our Solution */}
          <section className="max-w-4xl mx-auto mb-24">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Student accessing Glassbox profiles"
                  className="rounded-2xl shadow-lg object-cover h-96 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Solution: Real Applications, Real Results</h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Glassbox gives you direct access to the successful applications of students who've been admitted to top colleges and universities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Access complete applications for just $20-30
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      See real essays and activities that helped students get in
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Learn directly from students who got into your dream schools
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>
          
          {/* How It Works Process */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-16 text-center">The Process Is Simple</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Browse Profiles</h3>
                <p className="text-neutral-600">
                  Explore our catalog of verified student profiles from top universities. Filter by school to find what's relevant to you.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Unlock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Access Content</h3>
                <p className="text-neutral-600">
                  Purchase individual profiles for $20-30 or save with our bundle packages. Get immediate access to all application materials.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl shadow-md p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                    <path d="M9 12L11 14L15 10M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">3. Apply Insights</h3>
                <p className="text-neutral-600">
                  Study successful essays and activities. Understand what worked and apply those insights to your own unique application.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* For Admitted Students */}
          <section className="max-w-4xl mx-auto mb-24 bg-neutral-100 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-6">Already Admitted?<br />Upload Your Profile</h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Earn money by sharing your successful application with future applicants.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="bg-accent/10 text-accent rounded-full p-1 mr-3 mt-1">
                      <DollarSign className="h-4 w-4" />
                    </span>
                    <span className="text-neutral-800">
                      <strong>Earn</strong> every time someone purchases your profile
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent/10 text-accent rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Help other students achieve their college dreams
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent/10 text-accent rounded-full p-1 mr-3 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-neutral-800">
                      Simple upload process with our Common App converter
                    </span>
                  </li>
                </ul>
                <Link to="/upload" className="button-primary inline-flex items-center">
                  Upload Your Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1501854140801-50d01698950b)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
            </div>
          </section>
          
          {/* FAQ */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How do you verify profiles?</h3>
                <p className="text-neutral-600">
                  We verify all profiles by confirming student admission status with official documentation before publishing. Each profile is reviewed to ensure it's authentic and accurate.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What's included in a profile?</h3>
                <p className="text-neutral-600">
                  Each profile includes the student's Common Application, personal essays, activity descriptions, and supplemental essays for the universities they were accepted to. Some profiles may also include additional insights from the student.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long do I have access to profiles?</h3>
                <p className="text-neutral-600">
                  Individual profile purchases provide 30 days of access. Bundle packages include longer access periods: 30 days for Starter, 60 days for Pro, and 90 days for Ultimate packages.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Can I upload my own profile?</h3>
                <p className="text-neutral-600">
                  Yes! If you've been accepted to a college, you can upload your profile through our simple process. You'll earn money each time someone purchases access to your profile.
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <div className="text-center mt-24">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/browse" className="button-primary">
                Browse Profiles
              </Link>
              <Link to="/upload" className="button-secondary">
                Upload Your Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
