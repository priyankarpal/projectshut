import React from "react";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

function Footer() {
  const getCurrentYear = () => new Date().getFullYear();


  const footerLinks = [
    {
      name: "Twitter",
      link: "https://twitter.com/priyankarpal",
      icon: <SiTwitter aria-label="Visit us on Twitter" />,
      hover : " text-xl  text-gray-200 cursor-pointer hover:text-blue-500 ",      
    },
    {
      name: "GitHub",
      link: "https://github.com/priyankarpal",
      icon: <SiGithub aria-label="Visit us on Github" />,
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-gray-500 ",
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/priyankarpal",
      icon: <SiLinkedin aria-label="Visit us on LinkedIn" />,
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-blue-700 ",
    }
  ]

  const footerdocsLinks = [
    {
      title: "Documentation",
      child: [
        {
          name: "Contributing Guide",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
        },
        {
          name: "Add projects via GitHub",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md#how-to-add-your-projects-to-projectshut"
        },
        {
          name: "Run the project locally",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md#note-alternatively-if-you-prefer-to-run-the-project-locally-follow-these-steps"
        }

      ]
    }

  ]

  const footerServiceLinks = [
    {

      title: "License",
      child: [
        {
          name: "MIT License",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
        },
        {
          name: "Code of Conduct",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/CODE_OF_CONDUCT.md"
        },
      ]
    }


  ]

  return (
    < footer className="border-t border-gray-800 " >
      <div className="mx-auto max-w-screen-xl pt-16 sm:px-4 sm:pb-[5.65rem] lg:px-8 lg:pb-8">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
          <div className="inline-flex h-10 items-center text-white rounded-lg font-extrabold text-[2rem]"> Ph <span className="text-primary">.</span></div>
            <p
              className="mt-4 text-center text-gray-200 dark:text-gray-400 lg:text-left lg:text-lg"
            >
              Projectshut is an open source web app that enables users to freely publish their projects and create user profiles within the platform
            </p>

            {/*  for footer nav links */}
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {footerLinks.map((footerLink) => (
                <li key={footerLink.link}>
                  <Link
                    href={footerLink.link}
                    target="_blank"
                    className={footerLink.hover}
                  >
                    {footerLink.icon}
                  </Link>
                </li>

              ))}


            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left"
          >
            {/* for footer docs links */}
            <ul className="font-medium text-gray-200">
              {footerdocsLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mb-8 text-gray-200">{section.title}</h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <a href={link.link} className="hover:text-primary " rel="noopener noreferrer" target="_blank">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>

            <div>

              {/* for footer service links */}
              <ul className="font-medium text-gray-200">
                {footerServiceLinks.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-extrabold mb-8 text-gray-200">{section.title}</h3>
                    <ul>
                      {section.child.map((link, linkIndex) => (
                        <li key={linkIndex} className="pt-2">
                          <a href={link.link} className="hover:text-primary " rel="noopener noreferrer" target="_blank">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 dark:border-gray-800">
          <p className="text-center sm:text-xs lg:text-xl text-gray-200">
            ©projectshut {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer >

  );
}

export default Footer;
