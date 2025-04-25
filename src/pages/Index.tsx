
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProfileCarousel from "@/components/ProfileCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeaturedProfile from "@/components/FeaturedProfile";
import UniversityLogoScroll from "@/components/UniversityLogoScroll";
import PricingPackages from "@/components/PricingPackages";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <header className="pt-32 pb-20">
        <div className="container-padding text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Into Your Dream College<br />With Insider Knowledge
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access real, successful applications from students who got into top colleges. See exactly what works in the admissions process.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/browse"
              className="px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Browse Profiles
            </Link>
            <Link
              to="/upload"
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium border border-neutral-200 hover:bg-neutral-100 transition-colors"
            >
              Upload Profile
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Logo Scroll */}
      <UniversityLogoScroll />
      
      {/* Verification Banner */}
      <div className="py-10 bg-neutral-100">
        <div className="container-padding">
          <div className="flex items-center justify-center">
            <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
            <p className="text-lg font-medium">
              All profiles are verified for authenticity and accuracy
            </p>
          </div>
        </div>
      </div>

      {/* Featured Profile - Stanford */}
      <FeaturedProfile />
      
      {/* Featured Profiles Carousel */}
      <section className="py-16 bg-white">
        <div className="container-padding">
          <ProfileCarousel />
          <div className="text-center mt-12">
            <Link to="/browse" className="button-primary inline-flex items-center">
              View All Profiles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="apple-section">
        <div className="container-padding">
          <h2 className="apple-heading">Demystify College Admissions</h2>
          <p className="apple-subheading">
            College admissions doesn't have to be a black box. Get insights from students who've been there.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15L8.5 10L15.5 10L12 15Z" fill="currentColor" />
                  <path d="M3 4H21V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V4Z" stroke="currentColor" strokeWidth="2" />
                  <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Browse Real Applications</h3>
              <p className="text-neutral-600">
                Explore a diverse collection of authentic applications from students admitted to top universities.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Learn What Works</h3>
              <p className="text-neutral-600">
                Understand the strategies and approaches that helped students secure their admissions.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M2.90625 20.2491C3.82775 18.6531 5.1179 17.3272 6.6376 16.3823C8.1573 15.4374 9.8576 14.9039 11.5999 14.8369C13.3423 14.7699 15.0733 15.1728 16.6367 16.0012C18.2001 16.8295 19.5388 18.0512 20.4938 19.5491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Craft Your Story</h3>
              <p className="text-neutral-600">
                Apply insights from successful applicants to enhance your own unique application.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/howitworks" className="button-secondary inline-flex items-center">
              Learn More About How It Works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Pricing Packages */}
      <PricingPackages />

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-padding text-center">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Unlock Your Potential?
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students who have gained acceptance to their dream schools with Glassbox.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/browse"
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-neutral-100 transition-colors"
            >
              Browse Profiles
            </Link>
            <Link
              to="/upload"
              className="px-8 py-4 bg-transparent text-white rounded-full text-lg font-medium border border-white hover:bg-white/10 transition-colors"
            >
              Upload Profile
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
