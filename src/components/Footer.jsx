import React from "react"
import { FaDiscord, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-4">proudly open source</h2>
          <h2 className="font-bold text-white sm:text-3xl  mb-4">Built for collaboration 🤝🏼</h2>

          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            ProjectsHut is an open-source project. Feel free to contribute and help us make this project even better
          </p>
        </div>

        <div className="pt-8 mt-16 border-t flex gap-3 border-gray-100 dark:border-gray-800   sm:justify-center lg:mt-24">
          <a
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
            target="_blank"
            className="text-white"
          >
            Under MIT License
          </a>
        </div>
      </div>
    </footer>
  )
}
