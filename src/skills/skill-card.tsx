import { Card, CardContent, CardHeader, CardTitle } from '@/shadcn-ui/ui/card';
import Image from 'next/image';
import type { Skill } from './skill-utils';

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <Image
          className="mx-auto h-10 w-10 rounded-md"
          src={skill.icon}
          alt={skill.name}
          width={100}
          height={100}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{skill.name}</CardTitle>
      </CardContent>
    </Card>
  );
}
