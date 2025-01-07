import Link from "next/link";

import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { projects } from "@/app/helpers/stub-data/projects";
import Project from "@/app/components/reusable/Project";
import Button from "@/app/components/reusable/Button";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-[94vw] flex flex-col mb-6 p-6 items-center mt-6"
    >
      <Title title="Projects" />
      <SubTitle text="Our creative solution" />
      <div className="w-full  my-6 flex flex-col lg:flex-row justify-between gap-4">
        {projects.slice(0, 2).map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className="w-full  mb-6 flex flex-col lg:flex-row justify-between gap-4">
        {projects.slice(2, 4).map((project) => (
          <Project key={project.id} project={project} classNames="lg:w-1/3" />
        ))}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <Link href="#">
            <Button className="w-[11.625rem] rounded-[1.875rem]">
              View our portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
