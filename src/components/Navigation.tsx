
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container-padding py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold">glassbox</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/browse" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Browse Profiles
          </Link>
          <Link to="/howitworks" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            How It Works
          </Link>
          <Link to="/success-stories" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Success Stories
          </Link>
          <Link to="/upload" className="text-neutral-900 hover:text-accent transition-colors font-medium">
            Upload Profile
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="px-4 py-2 text-neutral-900 hover:text-accent transition-colors font-medium">
            Log in
          </Link>
          <Link to="/signup" className="button-primary">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-100 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-neutral-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-padding py-4 flex flex-col space-y-4">
            <Link to="/browse" className="text-neutral-900 hover:text-accent transition-colors font-medium px-4 py-2 hover:bg-neutral-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Browse Profiles
            </Link>
            <Link to="/howitworks" className="text-neutral-900 hover:text-accent transition-colors font-medium px-4 py-2 hover:bg-neutral-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/success-stories" className="text-neutral-900 hover:text-accent transition-colors font-medium px-4 py-2 hover:bg-neutral-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Success Stories
            </Link>
            <Link to="/upload" className="text-neutral-900 hover:text-accent transition-colors font-medium px-4 py-2 hover:bg-neutral-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Upload Profile
            </Link>
            <hr className="border-neutral-200" />
            <Link to="/login" className="text-neutral-900 hover:text-accent transition-colors font-medium px-4 py-2 hover:bg-neutral-100 rounded-lg" onClick={() => setIsMenuOpen(false)}>
              Log in
            </Link>
            <Link to="/signup" className="button-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
