import React, { useState } from "react";
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import test1 from "../../assets/testimonial-1.png";
import test2 from "../../assets/testimonial-2.png";
import test3 from "../../assets/testimonial-3.png";
import test4 from "../../assets/testimonial-4.png";
import { FaArrowLeft } from "react-icons/fa6";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "Joining Shivapuri College was one of the best things that happened in my life. Shivapuri had showered me with tons of memories that I could cherish throughout my entire life. My four years of college life were a turning point in my life. I got the opportunity to flourish my potential and explore myself. Among many other things, the individual attention given by faculties to each student is highly appreciable.",
      author: "Meghnath Gautam",
      post: "Section Officer, Government of Nepal (Alumnus)",
      image: test4,
    },
    {
      content:
        "As a guardian, I have been profoundly inspired by Shivapuri College's unwavering dedication to academic brilliance and the nurturing of student well-being. I am especially thankful for the college's emphasis on holistic development which gracefully prepares students for the myriad paths of their future careers and personal growth.",
      author: "Ganesh Prasad Pandeya",
      post: "Secretary, Government of Nepal",
      image: test2,
    },
    {
      content:
        "The state-of-the-art facilities and practical learning opportunities, such as internships, trainings, and industry visits, have given me invaluable hands-on experience. Qualified and supportive teachers as well as sufficient learning materials have made my study more effective and efficient. So, why don't you join Shivapuri College and experience reality?",
      author: "Rabina Khadka",
      post: "Alumni",
      image: test3,
    },
    {
      content:
        "Shivapuri College, established with the objective of catering to all ranges of students in the management faculty, has a glorious history of producing talents. In the process of equipping the students, the college has been following the latest teaching pedagogy and providing the best possible faculty services. The college is centrally located and a good avenue for those who wish to leam and eam simultaneously.",
      author: "Kishore Dhungana",
      post: "Industry Expert, Apex College",
      image: test1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds (Optional)

  return (
    <section className="testimonials w-full mb-5">
      <div className="mainContainer">
        <h1 className="text-center text-4xl font-bold">Testimonials</h1>
        <p className="text-center mb-4 font-bold text-gray-500">
          Hear what people have to say about us!
        </p>
        <div className="h-[3px] border-blue-700 border-[1px] bg-blue-700 w-[30%] mx-auto mb-10"></div>

        <div className="buttons flex gap-1 justify-center items-center mb-5">
          <button
            onClick={prevSlide}
            className="h-16 w-16 text-2xl text-gray-600 p-5 bg-gray-300 rounded-lg"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="h-16 w-16 text-2xl text-gray-600 p-5 bg-gray-300 rounded-lg"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full gap-2">
          {/* Previous Button */}

          <div className="w-full max-w-7xl mx-auto overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="test1 rounded-lg bg-white py-5 px-5 w-[40%] flex-shrink-0 flex flex-col justify-center items-center gap-2"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-32 w-32 rounded-full object-contain"
                  />
                  <FaQuoteLeft className="text-2xl text-yellow-500 self-start" />
                  <p className="italic">{item.content}</p>
                  <FaQuoteRight className="text-2xl text-yellow-500 self-end" />
                  <div className="text-center">
                    <h1 className="font-bold">{item.author}</h1>
                    <h1 className="font-bold text-gray-400 text-center">
                      {item.post}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
