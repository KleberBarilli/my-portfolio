import {
    SiJava,
    SiPython,
    SiTypescript,
    SiRedis,
    SiNodeDotJs,
    SiPostgresql,
    SiRabbitmq,
    SiMongodb,
    SiMysql,
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
        Component: SiNodeDotJs,
        title: 'Node.js',
        Description: () => <>{mySkills().node}</>,
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
        slug: 'mysql',
        Component: SiMysql,
        title: 'MySQL',
        Description: () => <>{mySkills().git}</>,
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
];
