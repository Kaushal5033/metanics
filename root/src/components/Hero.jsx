import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    gsap.to(text, {
      xPercent: 100,
      ease: "linear",
      duration: 15,
      repeat: -1
     
    });

  }, []);
  const services = [
    'On-Page SEO', 'Content Marketing', 'Off-Page SEO', 
    'Social Media Marketing', 'Analytics and Reporting', 'Influencer Marketing'
  ];

  const mainRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const clientsRef = useRef(null);
  const servicesRef = useRef(null);
  const socialRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(h1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(pRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(clientsRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(servicesRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(socialRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(logosRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.6");

  }, []);

  return (
    <>
    <main ref={mainRef} className="container mx-auto px-4 pt-32 text-white">
      <h1 
        ref={h1Ref}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center md:text-left"
      >
        Transform Your <span className="text-blue-600">Online Business</span> With Aspire
      </h1>
      <p 
        ref={pRef}
        className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl text-center md:text-left"
      >
        Viverra vitae congue eu consequat ac. Tortor condimentum lacinia quis vel eros donec. Faucibus interdum posuere lorem ipsum.
      </p>
      <div 
        ref={clientsRef}
        className="flex flex-col sm:flex-row items-center mb-12 justify-center md:justify-start"
      >
        <div className="flex -space-x-4 mb-4 sm:mb-0">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 border-2 border-white" />
          ))}
        </div>
        <span className="ml-0 sm:ml-4 text-lg sm:text-xl font-bold">1500+ Trusted Clients</span>
      </div>
      <div 
        ref={servicesRef}
        className=" rounded-3xl p-4 sm:p-6 md:p-8 mb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={service}
              className="bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-center text-sm sm:text-base hover:bg-green-700 transition-colors"
            >
              {service}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8">
          <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-colors mb-4 sm:mb-0">
            View Portfolio
          </button>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center">
            <FaYoutube className="text-white text-xl sm:text-2xl" />
          </div>
        </div>
      </div>
      <div 
        ref={socialRef}
        className="flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
          {[FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube].map((Icon, index) => (
            <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-aspire-green rounded-full flex items-center justify-center">
              <Icon className="text-white text-lg sm:text-xl" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-6">
          {['Proven Results', 'Experienced Team', 'Affordable Pricing'].map((text, index) => (
            <span key={index} className="text-xs sm:text-sm">{text}</span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden py-4">
        <div 
          ref={textRef} 

          className="flex whitespace-nowrap space-x-8">
          <span className="text-4xl text-white font-bold">Text Loop 1</span>
          <span className="text-4xl text-white font-bold">Text Loop 2</span>
          <span className="text-4xl text-white font-bold">Text Loop 3</span>
          <span className="text-4xl text-white font-bold">Text Loop 4</span>
          <span className="text-4xl text-white font-bold">Text Loop 5</span>
          <span className="text-4xl text-white font-bold">Text Loop 1</span>
          <span className="text-4xl text-white font-bold">Text Loop 2</span>
          <span className="text-4xl text-white font-bold">Text Loop 3</span>
          <span className="text-4xl text-white font-bold">Text Loop 4</span>
          <span className="text-4xl text-white font-bold">Text Loop 5</span>
        </div>
    </div>
    </main>
    </>
  );
};


export default Hero;