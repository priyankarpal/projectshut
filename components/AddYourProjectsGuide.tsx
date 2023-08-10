"use client";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { Motion } from "@/components/framer-motion";


type StepProps = {
  steps: string;
  text: string;
  code: string;
  image?: string;
  index: number;
};

const codeString = `{
  "github_username": "YOUR_GITHUB_USERNAME",  
  "Projects": [
    {
      "github_url": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": ["tech1", "tech2"]
    },
    {
      "github_url": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": ["tech1", "tech2"]
    }
  ]
}`;

const option1Steps = [
  {
    steps: "Step 1 : ",
    text: "Fork this repository",
    code: "",
    image:
      "https://user-images.githubusercontent.com/80768852/258651696-63e1bf34-d2b6-4963-b3df-6accc3d56941.jpg",
  },
  {
    steps: "Step 2 : ",
    text: "Create a new Branch(click on main -> add name of your branch -> click on create branch:)",
    image: 
      "https://user-images.githubusercontent.com/80768852/258656607-64ad9db4-11a5-4dd8-ade8-21875c8831f7.jpg"
  },
  {
    steps: "Step 3 : ",
    text: "Click on Go to file",
    image:
      "https://user-images.githubusercontent.com/80768852/258656827-b70c96bf-b8b9-4d0e-872e-c1f973841f25.jpg"
  },
  {
    steps: "Step 4 : ",
    text: "Add following code to end of src/DB/projects.json",
    code: codeString,
  },
  {
    steps: "Step 5 : ",
    text: "Commit your changes",
    image:
      "https://user-images.githubusercontent.com/80768852/258656924-387f55b3-cd7c-4d6e-a25d-4043330e8d2b.png",
  },
  {
    steps: "Step 6 : ",
    text: "To create a pull request click on compare and pull request",
    image:
      "https://user-images.githubusercontent.com/80768852/258657644-b1bc753b-3c0a-4853-8578-dde040c2665e.jpg"
  },
  {
    steps: "Step 7 : ",
    text: "Add an appropriate title and description to your PR explaining changes"
  },
  {
    steps: "Step 8 : ",
    text: "Click on Create Pull Request & wait for merge",
    code: "",
    image:
      "https://user-images.githubusercontent.com/80768852/258657487-9fa9558c-e49b-4647-a9ee-50da86b9fccf.jpg",
  },
  {
    text: "Congratulations🎉, you have made a PR to the ProjectsHut. Wait for your submission to be accepted and your PR to be merged by a maintainer."
  }
];

const option2Steps = [
  {
    steps: "",
    text: "If you want to run it locally then follow these steps -",
    code: "",
  },
  {
    steps: "Step 1 : ",
    text: "Fork this repository",
    code: "",
    image:
      "https://user-images.githubusercontent.com/80768852/258651696-63e1bf34-d2b6-4963-b3df-6accc3d56941.jpg",
  },
  {
    steps: "Step 2 : ",
    text: "Clone the repository",
    code: "git clone https://github.com/<your_username>/ProjectsHut.git",
    image: 
      "https://user-images.githubusercontent.com/80768852/258655867-6c74b8f4-ee2f-48e8-8fc1-38679143175f.png"
  },
  {
    steps: "Step 3 : ",
    text: "Navigate to the ProjectsHut directory",
    code: "cd ProjectsHut",
    image: 
      "https://user-images.githubusercontent.com/80768852/258653517-fefecfe1-1f74-444b-8837-120c9f57cebf.png"
  },
  {
    steps: "Step 4 : ",
    text: "Add a reference(remote) to the original repository",
    code: "git remote add upstream https://github.com/priyankarpal/ProjectsHut.git",
    image:
      "https://user-images.githubusercontent.com/80768852/258653648-497133fd-c756-4065-9956-d2457b4ff53c.png"
  },
  {
    steps: "Step 5 : ",
    text: "Check remotes for this repository",
    code: "git remote -v",
    image:
      "https://user-images.githubusercontent.com/80768852/258653764-685d1dea-627c-4e4c-9444-c1ff05fb444e.png" 
  },
  {
    steps: "Step 6 : ",
    text: "Always take a pull from the upstream repository to your main branch to keep it updated as per the main project repository",
    code: "git pull upstream main",
    image:
      "https://user-images.githubusercontent.com/80768852/258656123-fea37c96-d16b-43e3-807d-76a2c01a9d4a.png"
  },
  {
    steps: "Step 7 : ",
    text: "install dependencies",
    code: "pnpm i",
    image:
      "https://user-images.githubusercontent.com/80768852/258655966-ea8b5390-32d8-4f9e-8eb2-1eb840e9e7d1.png"
  },
  {
    steps: "Step 8 : ",
    text: "Create a new Branch",
    code: "git checkout -b <your_branch_name>",
    image: 
      "https://user-images.githubusercontent.com/80768852/258654058-e0e8a964-56d1-4c33-91aa-0334771e8034.png"
  },
  {
    steps: "Step 9 : ",
    text: "Run the project",
    code: "pnpm dev",
    image:
      "https://user-images.githubusercontent.com/80768852/258656216-24308a09-ae5a-4e7c-9c08-fbdd48e7f017.png"
  },
  {
    steps: "Step 10 : ",
    text: "Perform your desired Changes to the code base",
  },
  {
    steps: "Step 11 : ",
    text: "Check your changes",
    code: "git status",
    image:
      "https://user-images.githubusercontent.com/80768852/258656155-874b051c-165a-4bde-8d2d-a32b05c0ac54.png"
  },
  {
    steps: "Step 12 : ",
    text: "Stage your changes",
    code: "git add . </files_that_you_made_changes>",
    image:
      "https://user-images.githubusercontent.com/80768852/258654878-57d38c53-f5f4-476f-b5a9-c500dcc3403b.png"
  },
  {
    steps: "Step 13 : ",
    text: "Commit your changes",
    code: "git commit -m relevant message (add relevant message according to your issue and always add double quote to your message)",
    image:
      "https://user-images.githubusercontent.com/80768852/258654990-9a2685db-9419-4bb8-9899-821104a437a5.png",
  },
  {
    steps: "Step 14 : ",
    text: "Push your changes to the main branch",
    code: "git push -u origin <your_branch_name>",
    image:
      "https://user-images.githubusercontent.com/80768852/258654547-7a0e300b-aada-4fa3-b1de-90d445c0311e.png"
  },{
    steps: "Step 15 : ",
    text: "To create a pull request click on compare and pull request",
    image:
      "https://user-images.githubusercontent.com/80768852/258657644-b1bc753b-3c0a-4853-8578-dde040c2665e.jpg"
  },
  {
    steps: "Step 16 : ",
    text: "Add an appropriate title and description to your PR explaining changes"
  },
  {
    steps: "Step 17 : ",
    text: "Click on Create Pull Request & wait for merge",
    code: "",
    image:
      "https://user-images.githubusercontent.com/80768852/258657487-9fa9558c-e49b-4647-a9ee-50da86b9fccf.jpg",
  },
  {
    text: "Congratulations🎉, you have made a PR to the ProjectsHut. Wait for your submission to be accepted and your PR to be merged by a maintainer."
  },
];

function Step({ steps, text, code, image, index }: StepProps): JSX.Element {
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
    <Motion.div className="mt-5 flex flex-col gap-5 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
    >

      <div className="flex items-center justify-between ">
        <Motion.div
          key={text}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 110, delay: index * 0.15 }}
          className="flex items-center justify-between gap-5 w-full ">
          <div className="flex items-center gap-5">
            <p className="text-base font-semibold leading-7 text-white">
              <b className="text-primary">{steps}</b>
              {text}
            </p>
          </div>
          {code && (
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 110, delay: index * 0.20 }}
              className="flex items-end justify-end">
              <button
                onClick={copyCode}
                className="cursor-pointer text-indigo-600"
              >
                {copyCodeButton && (
                  <MdOutlineContentCopy size="18" color="white" />
                )}
                {!copyCodeButton && <BsCheck2Circle size="18" color="green" />}
              </button>
            </Motion.div>
          )}
        </Motion.div>
      </div>
      {code && (
        <Motion.div
          key={code}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 110, delay: index * 0.25 }}
          className="mt-2">
          <SyntaxHighlighter language="nginx" style={anOldHope}>
            {code}
          </SyntaxHighlighter>
        </Motion.div>
      )}
      {image && (
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 110, delay: index * 0.30 }}
        >
          <Image
            src={image}
            alt={text}
            className="mt-2"
            width={10000}
            height={600}
          />
        </Motion.div>
      )}
    </Motion.div>
  );
}

export default function AddYourProjectsGuide(): JSX.Element {
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
      index={index}
      key={index}
      steps={step.steps}
      text={step.text}
      code={step.code}
      image={step.image}
    />
  ));

  return (<>
    <div className="flex justify-center mt-10">
      <Motion.button
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
        className={`mx-2 px-4 py-2 rounded-lg mb-4 ${selectedOption === 0
          ? "bg-primary text-white"
          : "border border-gray-700 text-gray-300"
          }`}
        onClick={() => selectOption(0)}
      >
        Add Projects Directly From GitHub
      </Motion.button>
      <Motion.button
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 110 }}

        className={`mx-2 px-4 py-2 rounded-lg mb-4 ${selectedOption === 1
          ? "bg-primary text-white"
          : "border border-gray-700 text-gray-300"
          }`}
        onClick={() => selectOption(1)}
      >
        Set Up Projects Locally
      </Motion.button>
    </div>
    <article className="items-center max-w-5xl mx-auto">
      <Motion.p className="mb-5 text-xl font-bold tracking-tight text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 110 }}
      >
        Follow the following steps to add your projects to ProjectsHut :
      </Motion.p>
      <div className="option">{stepsRender}</div>
    </article>
  </>
  );
}
