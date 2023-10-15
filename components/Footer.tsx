import React from "react";
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";

const getCurrentYear = () => new Date().getFullYear();

const socialLinks = [
  {
    name: "Twitter",
    link: "https://twitter.com/priyankarpal",
    icon: <SiTwitter aria-label="Follow us on Twitter" title="Twitter(External Link)" />,
    hover: "text-xl text-gray-200 cursor-pointer hover:text-purple-500",
  },
  {
    name: "GitHub",
    link: "https://github.com/priyankarpal",
    icon: <SiGithub aria-label="Follow us on GitHub" title="GitHub(External Link)" />,
    hover: "text-xl text-gray-200 cursor-pointer hover:text-purple-500",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/priyankarpal",
    icon: <SiLinkedin aria-label="Follow us on LinkedIn" title="LinkedIn(External Link)" />,
    hover: "text-xl text-gray-200 cursor-pointer hover:text-purple-700",
  },
];

const documentationLinks = [
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

const serviceLinks = [
  {
    title: "Service",
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

function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="flex h-10 items-center justify-center lg:justify-start text-white rounded-lg font-extrabold text-2xl">
              Ph <span className="text-primary">.</span>
            </div>
            <p className="mt-4 text-center text-gray-200 lg:text-left lg:text-lg">
              Projectshut is an open source web app that enables users to freely
              publish their projects and create user profiles within the platform.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {socialLinks.map((link) => (
                <Link key={link.link} href={link.link} target="_blank" aria-label={`footer link of ${link.link}`}>
                  <a className={link.hover}>{link.icon}</a>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {documentationLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-extrabold mb-4 text-gray-200">{section.title}</h3>
                <ul>
                  {section.child.map((link, linkIndex) => (
                    <li key={linkIndex} className="pt-2">
                      <Link href={link.link} target="_blank" rel="noopener noreferrer" aria-label="footer docs link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {serviceLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">{section.title}</h3>
                <ul>
                  {section.child.map((link, linkIndex) => (
                    <li key={linkIndex} className="pt-2">
                      <Link href={link.link} target="_blank" rel="noopener noreferrer" aria-label="footer service link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 dark:border-gray-800 text-center lg:text-left">
          <p className="text-gray-200">
            © ProjectsHut {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
