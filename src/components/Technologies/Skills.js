import {
    SiJava,
    SiGit,
    SiPython,
    SiTypescript,
    SiRedis,
    SiNodeDotJs,
    SiPostgresql,
    SiRabbitmq,
    SiMongodb,
} from 'react-icons/si';
import { mySkills } from './MySkills';

export const Skills = [
    {
        slug: 'node',
        Component: SiNodeDotJs,
        title: 'Node.js',
        Description: () => <>{mySkills().node}</>,
    },
    {
        slug: 'typescript',
        Component: SiTypescript,
        title: 'Typescript',
        Description: () => <>{mySkills().typescript} </>,
    },
    {
        slug: 'java',
        Component: SiJava,
        title: 'Java',
        Description: () => <>{mySkills().java}</>,
    },
    {
        slug: 'python',
        Component: SiPython,
        title: 'Python',
        Description: () => <>{mySkills().python}</>,
    },
    {
        slug: 'postgresql',
        Component: SiPostgresql,
        title: 'PostgreSQL',
        Description: () => <>{mySkills().postgresql}</>,
    },
    {
        slug: 'mongo',
        Component: SiMongodb,
        title: 'MongoDB',
        Description: () => <>{mySkills().mongodb}</>,
    },
    {
        slug: 'redis',
        Component: SiRedis,
        title: 'Redis',
        Description: () => <>{mySkills().redis}</>,
    },
    {
        slug: 'rabbitmq',
        Component: SiRabbitmq,
        title: 'RabbitMQ',
        Description: () => <>{mySkills().rabbitMq}</>,
    },
    {
        slug: 'git',
        Component: SiGit,
        title: 'Git',
        Description: () => <>{mySkills().git}</>,
    },
];
