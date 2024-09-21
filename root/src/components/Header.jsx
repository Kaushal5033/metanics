import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const navItems = ['Home', 'About Us', 'Services', 'Portfolio', 'Pages', 'Contact'];
  
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.out' } });

    tl.fromTo(logoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 })
      .fromTo(navItemsRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, stagger: 0.1 },
        '-=0.3'
      )
      .fromTo(buttonRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, '-=0.3');

  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 bg-aspire-dark z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          ref={logoRef}
          className="text-2xl font-bold text-white"
        >
          Metanics
        </div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li 
              key={item} 
              ref={el => navItemsRef.current[index] = el}
              className="cursor-pointer text-white hover:text-aspire-green transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
        <button 
          ref={buttonRef}
          className="bg-aspire-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;