import { FaGithub, FaShareAlt, FaMoneyBillAlt } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const features = [
  {
    name: "Add GitHub link",
    description: "You can add your GitHub repository link to your profile.",
    icon: FaGithub,
  },
  {
    name: "Share your profile",
    description: "Share your profile with your friends and colleagues.",
    icon: FaShareAlt,
  },
  {
    name: "Open Source ",
    description: "This project is open source and you can contribute to it.",
    icon: SlGlobe,
  },
  {
    name: "Free to use",
    description:
      " This project is free to use and you don't have to pay anything. ",
    icon: FaMoneyBillAlt,
  },
];

export default function Banner() {
  return (
    <div className="bg-inherit py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Showcase your projects
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why should you use this?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                            <div key={feature.name} className=" p-5 hover:outline outline-1 outline-gray-600 rounded">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
