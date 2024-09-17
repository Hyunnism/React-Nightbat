import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white pt-10">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            className="absolute inset-x-0 bottom-0"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,96L30,122.7C60,149,120,203,180,213.3C240,224,300,192,360,186.7C420,181,480,201,540,192C600,183,660,149,720,138.7C780,128,840,140,900,160C960,181,1020,203,1080,197.3C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L0,320Z"
            />
          </svg>
        </div>
        <div className="relative container mx-auto px-6 py-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-300">Night Bat</h2>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-6">
                <Link to="/" className="text-white hover:text-teal-300 text-base sm:text-lg">Home</Link>
                <Link to="/services" className="text-white hover:text-teal-300 text-base sm:text-lg">Services</Link>
                <Link to="/about" className="text-white hover:text-teal-300 text-base sm:text-lg">About</Link>
                <Link to="/contact" className="text-white hover:text-teal-300 text-base sm:text-lg">Contact</Link>
              </div>
            </div>
            <div className="mb-8 w-full">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-300">Follow Us</h2>
              <div className="flex justify-center gap-4">
                <a href="https://wa.me/62895392143908" target="_blank" rel="noopener noreferrer" className="text-black hover:text-teal-300 text-xl sm:text-2xl">
                  <FaWhatsapp size={24} />
                </a>
                <a href="https://www.instagram.com/afcoproject.amh" target="_blank" rel="noopener noreferrer" className="text-black hover:text-teal-300 text-xl sm:text-2xl">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            <div className="text-black text-xs sm:text-sm">
              <p>&copy; 2024 Night-Bat|Production. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
