import { Badge } from '@/core/shadcn-ui/components/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/core/shadcn-ui/components/card';
import { ButtonLink } from '@/core/ui/components/button-link';
import type { Project } from '@/features/projects/schemas';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden pt-0">
      <CardHeader className="p-0">
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
        <CardDescription className="pt-2 pb-4 font-semibold">
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
