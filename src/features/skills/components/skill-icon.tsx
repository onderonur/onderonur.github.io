import { DiScrum } from 'react-icons/di';
import type { IconType } from 'react-icons/lib';
import {
  SiApollographql,
  SiAzuredevops,
  SiCss3,
  SiExpress,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMicrosoftsqlserver,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNuxtdotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const iconBySkill: Record<string, IconType | undefined> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  'testing-library': SiTestinglibrary,
  jest: SiJest,
  tailwindcss: SiTailwindcss,
  sass: SiSass,
  css: SiCss3,
  html: SiHtml5,
  graphql: SiGraphql,
  rest: TbApi,
  'apollo-graphql': SiApollographql,
  redux: SiRedux,
  gatsby: SiGatsby,
  expressjs: SiExpress,
  socketio: SiSocketdotio,
  nuxt: SiNuxtdotjs,
  vuejs: SiVuedotjs,
  mssql: SiMicrosoftsqlserver,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  'azure-devops': SiAzuredevops,
  npm: SiNpm,
  'agile-development': DiScrum,
};

type SkillIconProps = {
  className: string;
  icon: string;
};

export function SkillIcon({ icon, ...rest }: SkillIconProps) {
  const Icon = iconBySkill[icon];

  if (!Icon) return null;

  return <Icon {...rest} />;
}
