
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedProfile from "@/components/FeaturedProfile";

const ProfileDetail = () => {
  const { id } = useParams();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  
  // When id is 1, it's Hamza's profile
  useEffect(() => {
    if (id === "1") {
      // Check if user has already provided email
      const hasAccessStored = localStorage.getItem("hasAccessToProfile1");
      if (hasAccessStored === "true") {
        setHasAccess(true);
      } else {
        setShowEmailForm(true);
      }
    }
  }, [id]);

  const handleAccess = () => {
    localStorage.setItem("hasAccessToProfile1", "true");
    setShowEmailForm(false);
    setHasAccess(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        {id === "1" ? (
          <>
            {showEmailForm ? (
              <FeaturedProfile onAccess={handleAccess} />
            ) : (
              <div className="container-padding">
                <h1 className="text-4xl font-bold mb-6">Hamza's Cambridge Profile</h1>
                {/* Profile content would go here */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-lg">Profile content is loading...</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="container-padding">
            <h1 className="text-4xl font-bold mb-6">Profile {id}</h1>
            {/* Profile content would go here */}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfileDetail;
