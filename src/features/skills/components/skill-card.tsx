import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/core/shadcn-ui/components/card';
import { SkillIcon } from '@/features/skills/components/skill-icon';
import type { Skill } from '@/features/skills/schemas';

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="grow justify-center">
        <SkillIcon
          className="text-muted-foreground mx-auto text-4xl"
          icon={skill.icon}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-sm">{skill.name}</CardTitle>
      </CardContent>
    </Card>
  );
}
