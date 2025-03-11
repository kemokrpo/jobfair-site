import React, { useState, useEffect, useRef } from "react";

interface SlickSliderProps {
  folder: string;
}

const SlickSlider: React.FC<SlickSliderProps> = ({ folder }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(true); // Fade effect for interval
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [transitionType, setTransitionType] = useState<"fade" | "slide">("fade");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?folder=${folder}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [folder]);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setTransitionType("fade");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    if (images.length > 0) startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images]);

  const nextSlide = () => {
    setTransitionType("slide");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setTransitionType("slide");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 50) {
      nextSlide();
    } else if (touchEnd - startTouch > 50) {
      prevSlide();
    }
  };

  const [startTouch, setStartTouch] = useState(0);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-64">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover rounded-lg shadow-lg transition-all duration-700 ${
              transitionType === "fade"
                ? index === currentIndex
                  ? "opacity-100"
                  : "opacity-0"
                : index === currentIndex
                ? "translate-x-0 opacity-100"
                : index === (currentIndex - 1 + images.length) % images.length
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default SlickSlider;
