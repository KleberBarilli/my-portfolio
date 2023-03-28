import {
    SiJava,
    SiPython,
    SiTypescript,
    SiRedis,
    SiNodedotjs,
    SiPostgresql,
    SiRabbitmq,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiJunit5,
    SiSpring,
    SiFlask,
    SiPandas,
    SiApachemaven,
    SiDocker,
    SiPrisma,
    SiJupyter,
    SiAmazonaws,
    SiHeroku,
} from 'react-icons/si';
import { mySkills } from './MySkills';

export const Skills = [
    {
        slug: 'typescript',
        Component: SiTypescript,
        title: 'Typescript',
        Description: () => <>{mySkills().typescript} </>,
    },
    {
        slug: 'node',
        Component: SiNodedotjs,
        title: 'Node.js',
    },
    {
        slug: 'nest',
        Component: SiNestjs,
        title: 'Nest.js',
    },
    {
        slug: 'prisma',
        Component: SiPrisma,
        title: 'Prisma',
    },
    {
        slug: 'java',
        Component: SiJava,
        title: 'Java',
    },
    {
        slug: 'maven',
        Component: SiApachemaven,
        title: 'Maven',
    },
    {
        slug: 'spring',
        Component: SiSpring,
        title: 'Spring',
    },
    {
        slug: 'junit',
        Component: SiJunit5,
        title: 'Junit',
    },
    {
        slug: 'python',
        Component: SiPython,
        title: 'Python',
    },
    {
        slug: 'flask',
        Component: SiFlask,
        title: 'Flask',
    },
    {
        slug: 'pandas',
        Component: SiPandas,
        title: 'Pandas',
    },
    {
        slug: 'jupyter',
        Component: SiJupyter,
        title: 'Jupyter',
    },
    {
        slug: 'postgresql',
        Component: SiPostgresql,
        title: 'PostgreSQL',
    },
    {
        slug: 'mysql',
        Component: SiMysql,
        title: 'MySQL',
    },
    {
        slug: 'mongo',
        Component: SiMongodb,
        title: 'MongoDB',
    },
    {
        slug: 'redis',
        Component: SiRedis,
        title: 'Redis',
    },
    {
        slug: 'rabbitmq',
        Component: SiRabbitmq,
        title: 'RabbitMQ',
    },
    {
        slug: 'aws',
        Component: SiAmazonaws,
        title: 'AWS',
    },
    {
        slug: 'heroku',
        Component: SiHeroku,
        title: 'Heroku',
    },
    {
        slug: 'docker',
        Component: SiDocker,
        title: 'Docker',
    },
];
