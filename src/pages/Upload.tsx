
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Upload as UploadIcon, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    universities: [""],
    image: null as File | null,
    hasCommonApp: false,
    hasPersonalEssays: false,
    hasActivityDescriptions: false,
    hasSupplementalEssays: false,
    price: "",
    commonAppFile: null as File | null,
    personalEssaysFile: null as File | null,
    activityDescriptionsFile: null as File | null,
    supplementalEssaysFile: null as File | null,
    paymentInfo: {
      paypalEmail: "",
      agreeToTerms: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      paymentInfo: {
        ...prev.paymentInfo,
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };

  const handleUniversityChange = (index: number, value: string) => {
    const updatedUniversities = [...formData.universities];
    updatedUniversities[index] = value;
    setFormData(prev => ({ ...prev, universities: updatedUniversities }));
  };

  const addUniversityField = () => {
    setFormData(prev => ({
      ...prev,
      universities: [...prev.universities, ""]
    }));
  };

  const removeUniversityField = (index: number) => {
    if (formData.universities.length > 1) {
      const updatedUniversities = formData.universities.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, universities: updatedUniversities }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        [fieldName]: e.target.files ? e.target.files[0] : null
      }));
    }
  };
  
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files ? e.target.files[0] : null
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.paymentInfo.agreeToTerms) {
      toast({
        title: "Terms agreement required",
        description: "You must agree to the terms and conditions",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profile submitted successfully!",
        description: "We'll review your profile and contact you soon",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        universities: [""],
        image: null,
        hasCommonApp: false,
        hasPersonalEssays: false,
        hasActivityDescriptions: false,
        hasSupplementalEssays: false,
        price: "",
        commonAppFile: null,
        personalEssaysFile: null,
        activityDescriptionsFile: null,
        supplementalEssaysFile: null,
        paymentInfo: {
          paypalEmail: "",
          agreeToTerms: false
        }
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-padding">
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-accent p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Upload Your College Application Profile</h1>
              <p>Share your success story and help other students while earning money</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <section>
                  <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Picture
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-300">
                          {formData.image ? (
                            <img 
                              src={URL.createObjectURL(formData.image)} 
                              alt="Profile preview" 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <UploadIcon className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            onChange={handleProfileImageChange}
                            accept="image/*"
                            className="hidden"
                          />
                          <label 
                            htmlFor="profileImage"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer inline-block"
                          >
                            {formData.image ? 'Change Image' : 'Upload Image'}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* University Information */}
                <section>
                  <h2 className="text-xl font-bold mb-4">University Information</h2>
                  <div className="space-y-4">
                    {formData.universities.map((university, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder={`University ${index + 1}`}
                            value={university}
                            onChange={(e) => handleUniversityChange(index, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                          />
                        </div>
                        {formData.universities.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeUniversityField(index)}
                            className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addUniversityField}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Add Another University
                    </button>
                  </div>
                </section>
                
                {/* Application Materials */}
                <section>
                  <h2 className="text-xl font-bold mb-4">Application Materials</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="hasCommonApp"
                          name="hasCommonApp"
                          checked={formData.hasCommonApp}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <label htmlFor="hasCommonApp" className="text-sm font-medium text-gray-700">
                          Common Application
                        </label>
                      </div>
                      {formData.hasCommonApp && (
                        <div className="ml-6">
                          <input
                            type="file"
                            id="commonAppFile"
                            name="commonAppFile"
                            onChange={(e) => handleFileChange(e, 'commonAppFile')}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="commonAppFile"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer inline-block"
                          >
                            {formData.commonAppFile ? `Selected: ${formData.commonAppFile.name}` : 'Upload Common App File'}
                          </label>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="hasPersonalEssays"
                          name="hasPersonalEssays"
                          checked={formData.hasPersonalEssays}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <label htmlFor="hasPersonalEssays" className="text-sm font-medium text-gray-700">
                          Personal Essays
                        </label>
                      </div>
                      {formData.hasPersonalEssays && (
                        <div className="ml-6">
                          <input
                            type="file"
                            id="personalEssaysFile"
                            name="personalEssaysFile"
                            onChange={(e) => handleFileChange(e, 'personalEssaysFile')}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="personalEssaysFile"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer inline-block"
                          >
                            {formData.personalEssaysFile ? `Selected: ${formData.personalEssaysFile.name}` : 'Upload Personal Essays'}
                          </label>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="hasActivityDescriptions"
                          name="hasActivityDescriptions"
                          checked={formData.hasActivityDescriptions}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <label htmlFor="hasActivityDescriptions" className="text-sm font-medium text-gray-700">
                          Activity Descriptions
                        </label>
                      </div>
                      {formData.hasActivityDescriptions && (
                        <div className="ml-6">
                          <input
                            type="file"
                            id="activityDescriptionsFile"
                            name="activityDescriptionsFile"
                            onChange={(e) => handleFileChange(e, 'activityDescriptionsFile')}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="activityDescriptionsFile"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer inline-block"
                          >
                            {formData.activityDescriptionsFile ? `Selected: ${formData.activityDescriptionsFile.name}` : 'Upload Activity Descriptions'}
                          </label>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="hasSupplementalEssays"
                          name="hasSupplementalEssays"
                          checked={formData.hasSupplementalEssays}
                          onChange={handleCheckboxChange}
                          className="mr-2 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        />
                        <label htmlFor="hasSupplementalEssays" className="text-sm font-medium text-gray-700">
                          Supplemental Essays
                        </label>
                      </div>
                      {formData.hasSupplementalEssays && (
                        <div className="ml-6">
                          <input
                            type="file"
                            id="supplementalEssaysFile"
                            name="supplementalEssaysFile"
                            onChange={(e) => handleFileChange(e, 'supplementalEssaysFile')}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                          <label 
                            htmlFor="supplementalEssaysFile"
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer inline-block"
                          >
                            {formData.supplementalEssaysFile ? `Selected: ${formData.supplementalEssaysFile.name}` : 'Upload Supplemental Essays'}
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                
                {/* Pricing */}
                <section>
                  <h2 className="text-xl font-bold mb-4">Pricing</h2>
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      How much would you like to charge for your profile? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        min="10"
                        max="100"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="focus:ring-accent focus:border-accent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-lg py-2"
                        placeholder="25"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">USD</span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      We suggest a price between $20-$30 for profiles with complete applications. You'll receive 70% of each sale.
                    </p>
                  </div>
                </section>
                
                {/* Payment Information */}
                <section>
                  <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        PayPal Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="paypalEmail"
                        name="paypalEmail"
                        value={formData.paymentInfo.paypalEmail}
                        onChange={handlePaymentInfoChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        This is where we'll send your earnings when students purchase your profile.
                      </p>
                    </div>
                  </div>
                </section>
                
                {/* Terms and Conditions */}
                <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.paymentInfo.agreeToTerms}
                        onChange={handlePaymentInfoChange}
                        className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                        I agree to the terms and conditions <span className="text-red-500">*</span>
                      </label>
                      <p className="text-gray-500">
                        By uploading my application materials, I certify that they are authentic and I give permission for 
                        Glassbox to verify their authenticity with the relevant institutions. I understand that I will receive 
                        70% of each sale of my profile.
                      </p>
                    </div>
                  </div>
                </section>
                
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                      {!isSubmitting && <CheckCircle className="ml-2 h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Upload;
