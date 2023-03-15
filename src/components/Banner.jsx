import React from "react"

const Banner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16 ">
            <div className="relative h-64 sm:h-80 lg:h-full ">
              <img
                alt="ProjectsHut"
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="absolute inset-0 h-full w-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[#1F2937]">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-[#1F2937] "></span>

            <div className="p-8 sm:p-16 lg:p-24 ">
              <h2 className="text-2xl font-bold sm:text-3xl">Get Inspired and Showcase Your Projects on ProjectsHut</h2>

              <p className="mt-4 text-gray-300">
                At ProjectsHut, we believe that everyone has a unique talent and something valuable to share with the
                world. That's why we've made it easy for you to publish your projects, connect with other users, and
                gain valuable feedback and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
