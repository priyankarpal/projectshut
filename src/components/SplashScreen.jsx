import React from "react"

const SplashScreen = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="inline-flex">
        <div className="w-8 h-8 from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r rounded-full mr-2"></div>
        <div className="w-8 h-8 from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r rounded-full mr-2"></div>
        <div className="w-8 h-8 from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r rounded-full"></div>
      </div>

      <div className="mt-4 text-xl font-bold flex items-center justify-center">Loading...</div>
    </div>
  )
}

export default SplashScreen
