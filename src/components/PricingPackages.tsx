
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingPackages: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      description: "Access to 10 application profiles",
      price: 180,
      features: [
        "Browse 10 profiles of your choice",
        "View personal statements",
        "View activity descriptions",
        "Access supplemental essays",
        "30-day access"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Access to 30 application profiles",
      price: 510,
      features: [
        "Browse 30 profiles of your choice",
        "View personal statements",
        "View activity descriptions",
        "Access supplemental essays", 
        "Filter by university",
        "60-day access"
      ],
      popular: true
    },
    {
      name: "Ultimate",
      description: "Access to 50 application profiles",
      price: 750,
      features: [
        "Browse 50 profiles of your choice",
        "View personal statements",
        "View activity descriptions",
        "Access supplemental essays",
        "Filter by university",
        "90-day access",
        "Email support"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Choose Your Plan</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Get access to multiple profiles with our value-packed bundles and save compared to individual purchases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-accent md:scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {pkg.popular && (
                <div className="bg-accent text-white text-center py-2 font-medium text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-neutral-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  pkg.popular 
                    ? 'bg-accent text-white hover:bg-accent/90' 
                    : 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300'
                }`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-600">
            Looking for individual profiles? <a href="/browse" className="text-accent hover:underline">Browse all profiles</a> starting at $20 each.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
