
import { motion } from 'framer-motion';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-aspire-dark z-10">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-aspire-green"
      >
        Metanics
      </motion.div>
      <ul className="hidden md:flex space-x-6">
        {['Home', 'About Us', 'Services', 'Portfolio', 'Pages', 'Contact'].map((item, index) => (
          <motion.li 
            key={item} 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="cursor-pointer hover:text-aspire-green transition-colors"
          >
            {item}
          </motion.li>
        ))}
      </ul>
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-aspire-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
      >
        Get Started
      </motion.button>
    </nav>
  </header>
);

export default Header;