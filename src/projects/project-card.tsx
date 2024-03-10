import { ButtonLink } from '@/common/button-link';
import { Badge } from '@/shadcn-ui/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shadcn-ui/ui/card';
import Image from 'next/image';
import type { Project } from './project-utils';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="p-0 pb-4">
        <div className="relative aspect-video">
          <Image
            className="object-cover"
            src={project.image}
            alt={project.title}
            fill
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="pb-4 pt-2 font-semibold">
          {project.description}
        </CardDescription>
        <ul className="flex flex-wrap gap-1">
          {project.techStack.map((tech) => {
            return (
              <li key={tech.name}>
                <Badge variant="secondary">{tech.name}</Badge>
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter className="justify-between">
        <ButtonLink variant="outline" href={project.sourceCodeUrl}>
          Source Code
        </ButtonLink>
        {project.demoUrl && (
          <ButtonLink variant="outline" href={project.demoUrl}>
            Demo
          </ButtonLink>
        )}
      </CardFooter>
    </Card>
  );
}
