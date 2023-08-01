import Projects from "@/components/projects/Projects";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: 'Projects',
}

const page: NextPage = () => {
  return (
    <Projects />
  )
}

export default page;