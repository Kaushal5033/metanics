import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandAbout = () => {
  const mainRef = useRef(null);
  const textContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const statsBoxRef = useRef(null);
  const philosophyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(textContentRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(imageContainerRef.current, 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo(statsBoxRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo([philosophyRef.current, visionRef.current, missionRef.current], 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    );
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div ref={textContentRef} className="space-y-6">
            <p className="text-aspire-green font-bold text-sm sm:text-base">About Us</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Transforming Businesses with Strategic Marketing
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              At Aspire, we specialize in transforming businesses through innovative and strategic marketing solutions. Our team of experts is dedicated to helping you achieve your goals and stand out in today's competitive digital landscape.
            </p>
            <button className="bg-aspire-green text-black font-semibold py-3 px-6 rounded-md text-sm sm:text-base hover:bg-green-600 transition-colors duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Right Side - Image and Overlap Box */}
          <div ref={imageContainerRef} className="relative mt-12 lg:mt-0">
            {/* Main Image */}
            <img
              src="https://img.freepik.com/free-photo/high-angle-people-applauding-work_23-2149636269.jpg?t=st=1726912428~exp=1726916028~hmac=33db9d2d36de079c8fe872754fa90ea7b9b20716ad059e13abb7ca6fa7e22cdf&w=1480"
              alt="Team"
              className="rounded-lg w-full object-cover shadow-2xl"
            />

            {/* Overlapping Box */}
            {/* chal gya bhai mjjjjjaaaa aaa gya */}
            <div ref={statsBoxRef} className="absolute bottom-[-30px] right-[-20px] bg-black p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <p className="text-aspire-green text-sm">Monthly Traffic</p>
              <h2 className="text-3xl font-bold text-white mt-1">100 K</h2>
              <span className="text-aspire-green font-semibold text-base">+70%</span>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {/* Philosophy */}
          <div ref={philosophyRef} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Philosophy</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We believe in data-driven strategies and continuous innovation to deliver exceptional results for our clients.
            </p>
          </div>
          {/* Vision */}
          <div ref={visionRef} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              To be the leading digital marketing agency, empowering businesses to thrive in the digital age.
            </p>
          </div>
          {/* Mission */}
          <div ref={missionRef} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              To provide cutting-edge marketing solutions that drive growth, increase visibility, and maximize ROI for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandAbout;
