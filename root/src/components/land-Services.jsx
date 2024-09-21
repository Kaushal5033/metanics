import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Content Marketing",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "📝",
  },
  {
    title: "On-Page SEO",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "🔍",
  },
  {
    title: "Off-Page SEO",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "🔗",
  },
  {
    title: "Social Media Marketing",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "📱",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "📊",
  },
  {
    title: "Influencer Marketing",
    description:
      "Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus. Maximus gravida orci libero tristique non.",
    icon: "👥",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardRefs.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div ref={titleRef} className="text-center mb-12">
        <p className="text-green-500 font-bold text-lg sm:text-xl mb-2">Services</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Comprehensive Solutions for Your Digital Growth</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center h-16 w-16 bg-green-500 text-black text-2xl rounded-full mb-6 mx-auto">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
            <p className="text-gray-400 text-center mb-6">{service.description}</p>
            <div className="text-center">
              <a
                href="#"
                className="text-green-500 font-semibold inline-flex items-center hover:text-green-400 transition duration-300"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
