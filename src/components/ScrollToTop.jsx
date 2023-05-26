import React, { useState, useEffect } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false) // State to track the visibility of the scroll-to-top button

  const toggleVisibility = () => {
    // Function to toggle the visibility of the button based on scroll position

    if (window.pageYOffset > window.innerHeight * 0.25) {
      setIsVisible(true) // Set visibility to true if scrolled more than 25% of the viewport height
    } else {
      setIsVisible(false) // Set visibility to false otherwise
    }
  }

  const scrollToTop = () => {
    // Function to scroll to the top when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll behavior is set to smooth for a smooth scrolling effect
    })
  }

  useEffect(() => {
    // Effect hook to add and remove event listeners on scroll
    window.addEventListener("scroll", toggleVisibility) // Add event listener to track scroll position
    return () => {
      window.removeEventListener("scroll", toggleVisibility) // Remove event listener when component is unmounted
    }
  }, [])

  return (
    <>
      <button
        className={`fixed p-2 bg-purple-900 bg-opacity-90 rounded-full z-10 ${
          isVisible ? " bottom-4 right-4" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp size={25} />
      </button>
    </>
  )
}

export default ScrollToTop
