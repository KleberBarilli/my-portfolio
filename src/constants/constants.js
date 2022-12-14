export const projects = [
    {
        title: 'PsicoID',
        description:
            'Mobile application to control the scheduling of psychologists and customers.',
        image: '/images/psico-id.png',
        tags: ['Typescript', 'Prisma', 'Postgres', 'Redis', 'React Native'],
        visit: 'https://www.psicoid.com.br/',
        id: 0,
    },
    {
        title: 'My finances - Microservices',
        description:
            'Still under development. Microservices with nest.js and rabbitMQ',
        image: '/images/nest.png',
        tags: ['Typescript', 'Nest', 'RabbitMQ', 'PrismaORM'],
        source: 'https://github.com/KleberBarilli/my-finances-microservices/',
        //visit: '',
        id: 1,
    },
    {
        title: 'SOLID RESTFUL API Base',
        description:
            'Skeleton of an application using some S.O.L.I.D. principles.',
        image: '/images/rest.jpg',
        tags: ['Typescript', 'Node.js', 'TypeORM', 'Redis', 'Jest', 'Docker'],
        source: 'https://github.com/KleberBarilli/API-Restful-Base',
        // visit: '',
        id: 2,
    },
    {
        title: 'Api e-mails Queue',
        description:
            'Node Api for sending e-mails with aws ses. Using redis for through a queue. Simple and scalable for nodejs applications that use jobs and queues.',
        image: '/images/bull.png',
        tags: ['Node.js', 'Aws Ses', 'Redis', 'BullMQ'],
        source: 'https://github.com/KleberBarilli/bullmq-redis-node',
        // visit: '',
        id: 3,
    },
    {
        title: 'Youtube MP3 Converter',
        description:
            'Converting mp3 videos on youtube by passing the url. Application made using express and statically rendered with .ejs files.',
        image: '/images/easy-converter.png',
        tags: ['Node.js', 'Express', 'Axios'],
        source: 'https://github.com/KleberBarilli/easy-converter',
        //visit: '',
        id: 4,
    },

    {
        title: 'Newsletter',
        description:
            'Application that is responsible for subscribing users to a newsletter.',
        image: '/images/node-mongo.png',
        tags: ['Node.js', 'MongoDB'],
        source: 'https://github.com/KleberBarilli/newsletter-api',
        //  visit: '',
        id: 5,
    },
];
export const projectsPtBr = [
    {
        title: 'PsicoID',
        description:
            'Em breve, o seu aplicativo de busca e agentamento de psic??logos.',
        image: '/images/psico-id.png',
        tags: ['Typescript', 'Prisma', 'React Native'],
        visit: 'https://www.psicoid.com.br/',
        id: 0,
    },
    {
        title: 'My finances - Microservices',
        description:
            'Projeto para aprofundar meus conhecimentos em NestJS e sua integra????o com microservi??os. Nessa aplica????o, uso o RabbitMQ como servidor de mensageria entre todas as aplica????es',
        image: '/images/nest.png',
        tags: ['Typescript', 'Nest', 'RabbitMQ', 'PrismaORM'],
        source: 'https://github.com/KleberBarilli/my-finances-microservices/',
        //visit: '',
        id: 1,
    },
    {
        title: 'SOLID RESTFUL API Base',
        description:
            'Esquelo de uma aplica????o node com alguns princ??pios do SOLID.',
        image: '/images/rest.jpg',
        tags: ['Node.js', 'Redis', 'Jest', 'Docker'],
        source: 'https://github.com/KleberBarilli/API-Restful-Base',
        // visit: '',
        id: 2,
    },
    {
        title: 'API Queue Mails',
        description:
            'Api em node que envia emails utilizando a AWS Ses, com o Redis para colocar cada email em uma fila. ?? simples e escal??vel para aplica????es que ir??o usar Jobs/Workers.',
        image: '/images/bull.png',
        tags: ['Node.js', 'Aws Ses', 'Redis', 'BullMQ'],
        source: 'https://github.com/KleberBarilli/bullmq-redis-node',
        // visit: '',
        id: 3,
    },
    {
        title: 'Youtube MP3 Converter',
        description:
            'Converta v??deos do youtube para MP3 passando a URL. Tudo foi renderizado no servidor pelo express.',
        image: '/images/easy-converter.png',
        tags: ['Node.js', 'Express', 'Axios'],
        source: 'https://github.com/KleberBarilli/easy-converter',
        //visit: '',
        id: 4,
    },

    {
        title: 'Newsletter',
        description:
            'Aplica????o que ?? respons??vel por inscrever/desinscrever usu??rios em uma neswletter.',
        image: '/images/node-mongo.png',
        tags: ['Node.js', 'MongoDB'],
        source: 'https://github.com/KleberBarilli/newsletter-api',
        //  visit: '',
        id: 5,
    },
];

export const TimeLineData = [
    { year: 2019, text: 'I started my journey as a Python developer.' },
    {
        year: 2020,
        text: 'I worked with java and learned new frontend frameworks like angular and react.',
    },
    { year: 2021, text: 'I started to learn the whole javascript ecosystem.' },
    {
        year: 2022,
        text: 'I worked hard as a node.js developer and evolved a lot as a developer.',
    },
    {
        year: 2023,
        text: 'I will continue to specialize in node and study java',
    },
];
export const TimeLineDataPtBr = [
    { year: 2019, text: 'Iniciei minha caminhada como desenvolvedor Python.' },
    {
        year: 2020,
        text: 'Trabalhei com java e aprendi novos frameworks do frontend como angular e react.',
    },
    { year: 2021, text: 'Comecei a aprender todo o ecossistema javascript.' },
    {
        year: 2022,
        text: 'Trabalhei arduamente como desenvolvedor node.js e evolui muito como desenvolvedor.',
    },
    {
        year: 2023,
        text: 'Continuarei me especializando em node e estudando java.',
    },
];
export const MyJourney = {
    title: 'My Journey',
    description:
        'In my journey to date, I have learned a lot about hard skills, but I have also evolved a lot as a person by developing new soft skills',
};

export const MyJourneyPtBr = {
    title: 'Minha jornada',
    description:
        'Em minha jornada at?? hoje, aprendi muito sobre hard skills, mas tamb??m evolui muito como pessoa desenvolvendo novas softskills',
};
