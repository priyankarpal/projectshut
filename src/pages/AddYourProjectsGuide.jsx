import { GitBranch, FileText, UploadCloud } from 'react-feather';
import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Step({ icon, text, code, image }) {
  const copyCode = (e) => {
    navigator.clipboard.writeText(code).then(() => {
      e.target.innerText = 'Copied!';
    });
    setTimeout(() => {
      e.target.innerText = 'Copy';
    }, 3000);
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span>{icon}</span>
          <p className="text-base font-semibold leading-7 text-indigo-600">{text}</p>
        </div>
        {code && (
          <div onClick={copyCode} className="cursor-pointer">
            Copy
          </div>
        )}
      </div>
      {code && (
        <div className="mt-2">
          <SyntaxHighlighter language="nginx" style={a11yDark}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
      {image && <img src={image} alt={text} className="mt-2" />}
    </div>
  );
}

function AddYourProjectsGuide() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <article className="items-center max-w-5xl mx-auto">
        <div className="option1">
          <p className="mb-5 text-xl font-bold tracking-tight">Follow these steps to add your projects</p>
          <Step
            icon={<GitBranch size={18} />}
            text="Fork this repository"
            image="https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png"
          />
          <Step
            icon={<FileText size={18} />}
            text="Click on Go to file (I'm doing from priyankarpal/projectshut)"
            image="https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png"
          />
          <Step
            icon={<FileText size={18} />}
            text="Add following code to end of src/DB/projects.json"
            code={`${codeString}`}
          />
          <Step
            icon={<UploadCloud size={18} />}
            text="Commit your changes"
            image="https://user-images.githubusercontent.com/88102392/232192543-5fcc2711-7693-4dba-8993-75e3528b8530.png"
          />
          <span className="text-indigo-600">Fill up the description</span>
          <Step
            icon={<UploadCloud size={18} />}
            text="Create Pull Request & wait for merge"
            image="https://user-images.githubusercontent.com/88102392/232193469-dcc2b0b8-ec6b-4023-a9f4-bb6900ae8aff.png"
          />
        </div>

        <div className="option2">
          <Step icon={<FileText size={18} />} text="OR, If you want to run it locally then follow these steps" />
          <Step
            icon={<FileText size={18} />}
            text="Clone this repository"
            code="git clone https://github.com/[your-username]/ProjectsHut.git"
          />
          <Step icon={<FileText size={18} />} text="Navigate to the project folder" code="cd ProjectsHut" />
          <Step icon={<FileText size={18} />} text="install dependencies" code="pnpm i" />
          <Step
            icon={<FileText size={18} />}
            text="Create a new branch using your `GitHub Username`"
            code="git checkout -b [name_of_your_new_branch]"
          />
          <Step icon={<FileText size={18} />} text="Run the project" code="pnpm dev" />
          <Step icon={<FileText size={18} />} text="Do Changes in Project you want." />
          <Step icon={<UploadCloud size={18} />} text="Add your changes" code="git add ." />
          <Step
            icon={<UploadCloud size={18} />}
            text="Commit your changes"
            code='git commit -m "Added [your-changes]"'
          />
          <Step
            icon={<UploadCloud size={18} />}
            text="If you encounter this error while commits"
            code="husky - pre-commit hook exited with code 1(error)"
          />
          <Step icon={<UploadCloud size={18} />} text="Then run this command" code="pnpm format" />
          <Step
            icon={<UploadCloud size={18} />}
            text="Set upstream command"
            code="git remote add upstream https://github.com/priyankarpal/ProjectsHut.git"
          />
          <Step
            icon={<UploadCloud size={18} />}
            text="Push your changes"
            code="git push origin [name_of_your_branch]"
          />
          <Step icon={<UploadCloud size={18} />} text="Create Pull Request & wait for merge" />
        </div>
      </article>
    </section>
  );
}

export default AddYourProjectsGuide;
