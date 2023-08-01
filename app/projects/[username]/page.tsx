import ProjectList from "@/components/projects/ProjectList";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.username[0].toUpperCase() + params.username.slice(1)
  return {
    title: title,
  }
}

export default function page() {
  return (
    <ProjectList />
  )
}
