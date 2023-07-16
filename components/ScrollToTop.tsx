import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

function BackToTopButton() {
  const [btnVisiblity, setBtnVisiblity] = useState(false);
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const toggleVisiblity = () => {
      window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
    };
    window.addEventListener('scroll', toggleVisiblity);
    return () => {
      window.removeEventListener('scroll', toggleVisiblity);
    };
  }, []);

  return (
    <Link onClick={handleScroll} to="/" className="top">
      <div
        className={` ${!btnVisiblity ? 'translate-y-32 md:translate-y-20' : 'translate-y-0'
          } fixed bottom-20 md:bottom-10 right-8 z-50 w-10 h-10 rounded-lg bg-primary text-white cursor-pointer flex justify-center items-center transform transition-all delay-100 duration-500 `}
      >
        <div className="button">
          <FaArrowUp />
        </div>
      </div>
    </Link>
  );
};

export default BackToTopButton;
