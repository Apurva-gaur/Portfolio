import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    text: "Working with this team was an amazing experience. The quality and speed were top-notch!",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    text: "Great attention to detail and a passion for perfection. Highly recommended!",
  },
  {
    name: "Michael Ray",
    role: "Product Manager",
    text: "Always meets deadlines and delivers beautiful results. Super reliable!",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="bg-[#0c0e19] text-white py-12 px-4 md:px-20 transition-all duration-500 mb-16 mx-20 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>

      <div className="max-w-3xl mx-auto bg-[#1a1c2c] p-6 md:p-10 rounded-2xl shadow-lg transition-all duration-500">
        <p className="text-lg md:text-xl mb-6 italic text-gray-300">“{testimonial.text}”</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-gray-400">
          <span className="text-lg font-semibold">{testimonial.name}</span>
          <span className="text-sm italic">{testimonial.role}</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
