"use client";
import { useEffect, ReactNode, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Navbar, Footer } from "@/components";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { PiArrowFatLineRightFill } from "react-icons/pi";

type StepProps = {
  icon: ReactNode;
  text: string;
  code: string;
  image?: string;
};

const codeString = `{
  "github_username": "YOUR_GITHUB_USERNAME",  
  "Social_media": {
    "gitHub": "YOUR_GITHUB_ACCOUNT_LINK",
    "LinkedIn": "YOUR_LINKEDIN_ACCOUNT_LINK",
    "Instagram": "YOUR_INSTAGRAM_ACCOUNT_LINK",
    "YouTube": "YOUR_YOUTUBE_ACCOUNT_LINK",
    "Twitter": "YOUR_TWITTER_ACCOUNT_LINK"
  },
  "Projects": [
    {
      "link": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": ["tech1", "tech2"]
    },
    {
      "link": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": ["tech1", "tech2"]
    }
  ]
}`;

const option1Steps = [
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Fork this repository",
    code: "",
    image:
      "https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Click on Go to file (I'm doing from priyankarpal/projectshut)",
    code: "",
    image:
      "https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Add following code to end of src/DB/projects.json",
    code: codeString,
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Commit your changes",
    code: "",
    image:
      "https://user-images.githubusercontent.com/88102392/232192543-5fcc2711-7693-4dba-8993-75e3528b8530.png",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Fill up the description",
    code: "",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Create Pull Request & wait for merge",
    code: "",
    image:
      "https://user-images.githubusercontent.com/88102392/232193469-dcc2b0b8-ec6b-4023-a9f4-bb6900ae8aff.png",
  },
];

const option2Steps = [
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "If you want to run it locally then follow these steps",
    code: "",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Clone this repository",
    code: "git clone https://github.com/[your-username]/ProjectsHut.git",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Navigate to the project folder",
    code: "cd ProjectsHut",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "install dependencies",
    code: "pnpm i",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Create a new branch using your `GitHub Username`",
    code: "git checkout -b [name_of_your_new_branch]",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Run the project",
    code: "pnpm dev",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Do Changes in Project you want.",
    code: "",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Add your changes",
    code: "git add .",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Commit your changes",
    code: 'git commit -m "Added [your-changes]"',
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Set upstream command",
    code: "git remote add upstream https://github.com/priyankarpal/ProjectsHut.git",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Push your changes",
    code: "git push origin [name_of_your_branch]",
  },
  {
    icon: <PiArrowFatLineRightFill size={18} color="white" />,
    text: "Create Pull Request & wait for merge",
    code: "",
  },
];

function Step({ icon, text, code, image }: StepProps): JSX.Element {
  const [copyCodeButton, setcopyCodeButton] = useState(true);
  const copyCode = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setcopyCodeButton(false);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setcopyCodeButton(true);
    }, 3000);
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="flex items-center gap-5">
            <span>{icon}</span>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {text}
            </p>
          </div>
          {code && (
            <div className="flex items-end justify-end">
              <button
                onClick={copyCode}
                className="cursor-pointer text-indigo-600"
              >
                {copyCodeButton && (
                  <MdOutlineContentCopy size="18" color="white" />
                )}
                {!copyCodeButton && <BsCheck2Circle size="18" color="green" />}
              </button>
            </div>
          )}
        </div>
      </div>
      {code && (
        <div className="mt-2">
          <SyntaxHighlighter language="nginx" style={anOldHope}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
      {image && (
        <Image
          src={image}
          alt={text}
          className="mt-2"
          width={10000}
          height={600}
        />
      )}
    </div>
  );
}

function AddYourProjectsGuide(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let selectOption = (option: number) => {
    setSelectedOption(option);
  };

  const renderSteps = selectedOption === 0 ? option1Steps : option2Steps;
  const stepsRender = renderSteps.map((step: any, index: number) => (
    <Step
      key={index}
      icon={step.icon}
      text={step.text}
      code={step.code}
      image={step.image}
    />
  ));

  return (
    <>
      <Navbar />
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-500 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={180}
                height={180}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 180V.5M.5 .5H180" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className={`mx-2 px-4 py-2 rounded-lg mb-4 ${
              selectedOption === 0
                ? "bg-indigo-600 text-white"
                : "border border-gray-700 text-gray-300"
            }`}
            onClick={() => selectOption(0)}
          >
            Add Projects Directly From GitHub
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-lg mb-4 ${
              selectedOption === 1
                ? "bg-indigo-600 text-white"
                : "border border-gray-700 text-gray-300"
            }`}
            onClick={() => selectOption(1)}
          >
            Set Up Projects Locally
          </button>
        </div>
        <article className="items-center max-w-5xl mx-auto">
          <p className="mb-5 text-xl font-bold tracking-tight text-red-500">
            Follow the following steps to add your projects to ProjectsHut:
          </p>
          <div className="option">{stepsRender}</div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default AddYourProjectsGuide;
