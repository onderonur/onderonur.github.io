import type { KnipConfig } from 'knip';

const config = {
  ignore: ['public/**'],
  ignoreDependencies: ['shikiji', 'vaul'],
} satisfies KnipConfig;

export default config;
