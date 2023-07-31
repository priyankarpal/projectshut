import Projects from "@/components/projects/Projects";
import { NextPage } from "next";

export const metadata = {
  title: 'Projects',
}

const page: NextPage = () => {
  return (
    <Projects />
  )
}

export default page;