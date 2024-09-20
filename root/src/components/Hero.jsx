
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  const services = [
    'On-Page SEO', 'Content Marketing', 'Off-Page SEO', 
    'Social Media Marketing', 'Analytics and Reporting', 'Influencer Marketing'
  ];

  return (
    <main className="container mx-auto px-4 pt-32">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left"
      >
        Transform Your <span className="text-aspire-green">Online Business</span> With Aspire
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl mb-8 max-w-2xl text-center md:text-left"
      >
        Viverra vitae congue eu consequat ac. Tortor condimentum lacinia quis vel eros donec. Faucibus interdum posuere lorem ipsum.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center mb-12 justify-center md:justify-start"
      >
        <div className="flex -space-x-4 mb-4 md:mb-0">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white" />
          ))}
        </div>
        <span className="ml-4 text-xl font-bold">1500+ Trusted Clients</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-aspire-green rounded-3xl p-8 mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-600 text-white py-3 px-6 rounded-full text-center hover:bg-green-700 transition-colors"
            >
              {service}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button className="bg-white text-aspire-green px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            View Portfolio
          </button>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <FaYoutube className="text-white text-2xl" />
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex justify-between items-center"
      >
        <div className="flex space-x-4">
          {[FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube].map((Icon, index) => (
            <div key={index} className="w-10 h-10 bg-aspire-green rounded-full flex items-center justify-center">
              <Icon className="text-white text-xl" />
            </div>
          ))}
        </div>
        <div className="flex space-x-6">
          {['Proven Results', 'Experienced Team', 'Affordable Pricing'].map((text, index) => (
            <span key={index} className="text-sm">{text}</span>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;