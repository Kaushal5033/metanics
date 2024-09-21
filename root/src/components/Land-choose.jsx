import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const features = [
    {
      title: "Proven Expertise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Innovation and Adaptability",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Comprehensive Services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
    {
      title: "Dedicated Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
      icon: "",
    },
  ];

  const imageContainer = useRef(null);
  const ratingCard = useRef(null);
  const featuresContainer = useRef(null);
  const featureItem = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainer.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imageContainer.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ratingCard.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    const featureItems = featureItem.current.children;
    gsap.fromTo(
      featureItems,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresContainer.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
    <section className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Image and Overlapping Rating Card */}
        <div className="relative w-full lg:w-1/2 p-6" ref={imageContainer}>
          <img
            src="https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg?t=st=1726916732~exp=1726920332~hmac=27a80a4ad2924e560af40b122fae15e0efc402381aad8ad6e8d17e9b3ec7ec8d&w=1480" // Placeholder for your image
            alt="Business Meeting"
            className="rounded-lg w-full"
          />
          {/* Overlapping Rating Card */}
          <div className="absolute bottom-[-30px] left-[-20px] bg-black p-6 rounded-lg shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300" ref={ratingCard}>
            <h3 className="text-3xl font-bold">4.9</h3>
            <div className="flex items-center mb-2">
              <span className="text-green-400 mr-2">★★★★★</span>
            </div>
            <p className="text-sm">
              Client Ratings
            </p>
            <p className="text-gray-400 text-xs">
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="w-full lg:w-1/2 space-y-8 mt-12 lg:mt-0 p-6" ref={featuresContainer}>
          <div className="text-green-400 uppercase mb-4 text-sm" ref={titleRef}>
            Why Choose Us
          </div>
          <h1 className="text-4xl font-bold mb-6" ref={subtitleRef}>
            Empowering Your Business to Thrive
          </h1>
          <p className="text-gray-400 mb-8">
            Scelerisque placerat fames aliquam tortor augue interdum quisque proin. Justo ornare commodo cursus; sodales magnis nam.
          </p>
          <ul className="space-y-6" ref={titleRef}>
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4" ref={titleRef} ref={featureItem}>
                <div className="text-3xl text-green-400">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title} </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="relative bg-black py-12">
      {/* Background image */}
      <div className="bg-green-500 bg-opacity-80 rounded-xl shadow-xl w-full max-w-7xl mx-auto overflow-hidden">
        {/* Replace with your actual image */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/1600x500" // Placeholder for your image
            alt="Background"
            className="w-full object-cover h-[300px] lg:h-[400px]"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-8 rounded-xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-center">
              Unlock Your Potential, Reach Out <br /> and Transform Your Business!
            </h2>
            <p className="text-white text-center mb-6 max-w-md mx-auto">
              Commodo facilisis egestas maximus volutpat iaculis maecenas augue tortor aptent. Effictur interdum laoreet ullamcorper des velit purus praesent conubia magna.
            </p>
            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChooseUs;

