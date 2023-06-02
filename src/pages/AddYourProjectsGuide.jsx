import { GitBranch, FileText, UploadCloud } from 'react-feather';
// var CopyBlock = require('react-code-blocks')
import { CodeBlock, CopyBlock, dracula, atomOneLight } from 'react-code-blocks';
const AddYourProjectsGuide = () => {
  window.scrollTo(0, 0);
  const codeString = `
    {
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

  return (
    <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* For Grid Background  */}
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

      <article className="items-center max-w-5xl mx-auto ">
        <div className="  text-base leading-7 ">
          <p className="mb-5 text-xl font-bold tracking-tight  ">Follow these steps to add your projects</p>
          <div className="flex items-center gap-5">
            <span>
              <GitBranch size={18} />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Fork this repository</p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png"
            alt="Fork the repo"
            className="mt-5"
          />
          <div className="mt-5 flex items-center gap-5">
            <span>
              <FileText size={18} />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {' '}
              Click on Go to file(I'm doing from{' '}
              <span className="bg-purple-180  p-1 rounded-md">priyankarpal/projectshut</span> )
            </p>
          </div>

          <img
            src="https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png"
            alt="Fork the repo"
            className="mt-5"
          />

          <div className="mt-5 flex items-center gap-5">
            <span>
              <FileText size={18} />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Add following code to end of <span className=" p-1 rounded-md ">src/DB/projects.json</span>
            </p>
          </div>
          <code className="block sm:text-base xs:text-sm text-xs ">
            {/* <CopyBlock theme={dracula} text={codeString} language="javascript" /> */}
            {/* <pre className="overflow-x-auto">{codeString}</pre> */}
          </code>
          <div className="flex items-center gap-5 mt-5">
            <span>
              <UploadCloud size={18} />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Commit your changes</p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/232192543-5fcc2711-7693-4dba-8993-75e3528b8530.png"
            alt="add professional commits like this"
            className="mt-5"
          />
          <div className="flex items-center gap-5 mt-5">
            <span>
              <UploadCloud size={18} />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Create Pull Request & wait for merge</p>
          </div>
          <span>Fill up the description</span>
          <img
            src="https://user-images.githubusercontent.com/88102392/232193469-dcc2b0b8-ec6b-4023-a9f4-bb6900ae8aff.png"
            alt="add professional commits like this"
            className="mt-5"
          />
        </div>
        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {' '}
            OR, If you want to run it locally then follow these steps
          </p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600">Clone this repository</p>
        </div>
        <CopyBlock
          theme={dracula}
          text="git clone https://github.com/[your-username]/ProjectsHut.git"
          language="javasript"
        />
        {/* <code className="block">git clone https://github.com/[your-username]/ProjectsHut.git</code> */}
        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Navigate to the project folder</p>
        </div>
        <CopyBlock theme={dracula} text="cd ProjectsHut" language="javasript" />
        {/* <code className="block"></code> */}
        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> install dependencies</p>
        </div>
        <CopyBlock theme={dracula} text="pnpm i" language="javasript" />
        {/* <code className="block">pnpm i</code> */}

        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {' '}
            Create a new branch using your `GitHub Username`
          </p>
        </div>
        <CopyBlock theme={dracula} text="git checkout -b [name_of_your_new_branch]" language="javasript" />
        {/* <code className="block"></code> */}

        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Run in local</p>
        </div>
        <CopyBlock theme={dracula} text="pnpm dev" language="javasript" />
        {/* <code className="block">pnpm dev</code> */}

        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Make sure all the test cases pass</p>
        </div>
        <CopyBlock theme={dracula} text="pnpm test" language="javasript" />

        <div className="mt-5 flex items-center gap-5">
          <span>
            <FileText size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Do Changes in Project you want.</p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Add your changes.</p>
        </div>
        <CopyBlock theme={dracula} text="git add ." language="javasript" />

        <div className="mt-5 flex items-center gap-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Commit your changes</p>
        </div>
        <CopyBlock theme={dracula} text='git commit -m "Added [your-changes]' language="javasript" />
        <div className="flex items-center gap-5 mt-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {' '}
            If you encounter this error while commits
          </p>
        </div>
        <CopyBlock theme={dracula} text="husky - pre-commit hook exited with code 1(error)" language="javasript" />
        <div className="flex items-center gap-5 mt-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Then run this command</p>
        </div>
        <CopyBlock theme={dracula} text="pnpm format" language="javasript" />

        <div className="flex items-center gap-5 mt-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Set upstream command</p>
        </div>
        <CopyBlock
          theme={dracula}
          text="git remote add upstream https://github.com/priyankarpal/ProjectsHut.git"
          language="javasript"
        />

        <div className="flex items-center gap-5 mt-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Push your changes</p>
        </div>
        <CopyBlock theme={dracula} text="git push origin [Your-branch-name]" language="javasript" />
        <div className="flex items-center gap-5 mt-5">
          <span>
            <UploadCloud size={18} />
          </span>
          <p className="text-base font-semibold leading-7 text-indigo-600"> Create Pull Request & wait for merge</p>
        </div>
      </article>
    </section>
  );
};

export default AddYourProjectsGuide;
