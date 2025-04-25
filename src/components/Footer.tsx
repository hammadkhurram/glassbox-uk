
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <h1 className="text-xl font-bold">glassbox</h1>
            </Link>
            <p className="text-neutral-600 text-sm">
              Illuminating College Admissions for Future Applicants
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/browse" className="hover:text-accent transition-colors">Browse Profiles</Link></li>
              <li><Link to="/howitworks" className="hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/success-stories" className="hover:text-accent transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Join</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/upload" className="hover:text-accent transition-colors">Upload Your Profile</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="mailto:support@glassbox.edu" className="hover:text-accent transition-colors">support@glassbox.edu</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © 2025 Glassbox. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-neutral-600 hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-neutral-600 hover:text-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
