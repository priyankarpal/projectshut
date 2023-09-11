import React from "react";
import { SiX, SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";
function Footer() {
  const getCurrentYear = () => new Date().getFullYear();

  const footerLinks = [
    {
      name: "Twitter",
      link: "https://twitter.com/priyankarpal",
      icon: (
        <SiX
          aria-label="Follow us on Twitter"
          title="Twitter(External Link)"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-500 ",
    },
    {
      name: "GitHub",
      link: "https://github.com/priyankarpal",
      icon: (
        <SiGithub
          aria-label="Follow us on GitHub"
          title="GitHub(External Link)"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-500 ",
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/priyankarpal",
      icon: (
        <SiLinkedin
          aria-label="Follow us on LinkedIn"
          title="LinkedIn(External Link)"
        />
      ),
      hover: " text-xl  text-gray-200 cursor-pointer hover:text-purple-700 ",
    },
  ];

  const footerdocsLinks = [
    {
      title: "Documentation",
      child: [
        {
          name: "Contributing Guide",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md",
        },
        {
          name: "Add projects via GitHub",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md#how-to-add-your-projects-to-projectshut",
        },
        {
          name: "Run the project locally",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md#note-alternatively-if-you-prefer-to-run-the-project-locally-follow-these-steps",
        },
      ],
    },
  ];

  const footerServiceLinks = [
    {
      title: "License",
      child: [
        {
          name: "MIT License",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE",
        },
        {
          name: "Code of Conduct",
          link: "https://github.com/priyankarpal/ProjectsHut/blob/main/CODE_OF_CONDUCT.md",
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto max-w-screen-xl pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="text-center lg:text-left">
            <div className="flex h-10 items-center justify-center lg:justify-start text-white rounded-lg font-extrabold text-2xl">
              Ph <span className="text-primary">.</span>
            </div>
            <p className="mt-4 text-center text-gray-200 dark:text-gray-400 lg:text-left lg:text-lg">
              Projectshut is an open source web app that enables users to freely
              publish their projects and create user profiles within the platform.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {footerLinks.map((footerLink) => (
                <li key={footerLink.link}>
                  <Link
                    href={footerLink.link}
                    target="_blank"
                    className={footerLink.hover}
                    aria-label={`footer link of ${footerLink.link}`}
                  >
                    {footerLink.icon}
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
            <ul className="font-medium text-gray-200 pt-5 text-center lg:text-left">
              {footerdocsLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <Link
                          href={link.link}
                          className="hover:text-primary "
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="footer docs link"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>

            <ul className="font-medium text-gray-200 text-center lg:text-left">
              {footerServiceLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <Link
                          href={link.link}
                          className="hover:text-primary  "
                          rel="noopener noreferrer"
                          target="_blank"

                          aria-label="footer service link"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
            <div className="mt-[25px] ">
              <div className="p-2 bg-white rounded-lg max-w-[160px] mx-auto">
                <Link
                  href="https://github.com/priyankarpal/ProjectsHut"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                >
                  <Image
                    src="https://github.com/priyankarpal/ProjectsHut/assets/88102392/0fa9e8f0-349d-4cc8-8e01-1b6e2c27dbbb"
                    alt="Github-Share-Button"
                    width={144}
                    height={46}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 dark:border-gray-800 text-center lg:text-center lg:text-left">
          <p className="text-gray-200 mx-auto lg:mx-0">
            © ProjectsHut {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
