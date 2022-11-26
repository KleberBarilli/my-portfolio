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
    // {
    //     title: 'Send files to S3',
    //     description:
    //         'Example of a simple node.js api for sending files to amazon s3.',
    //     image: '/images/aws-s3.png',
    //     tags: ['Node.js', 'Express', 'Aws S3', 'Multer'],
    //     source: 'https://github.com/KleberBarilli/s3-upload-image',
    //     //  visit: '',
    //     id: 2,
    // },

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
            'Em breve, o seu aplicativo de busca e agentamento de psicólogos.',
        image: '/images/psico-id.png',
        tags: ['Typescript', 'Prisma', 'Postgres', 'Redis', 'React Native'],
        visit: 'https://www.psicoid.com.br/',
        id: 0,
    },
    {
        title: 'My finances - Microservices',
        description:
            'Projeto para aprofundar meus conhecimentos em NestJS e sua integração com microserviços. Nessa aplicação, uso o RabbitMQ como servidor de mensageria entre todas as aplicações',
        image: '/images/nest.png',
        tags: ['Typescript', 'Nest', 'RabbitMQ', 'PrismaORM'],
        source: 'https://github.com/KleberBarilli/my-finances-microservices/',
        //visit: '',
        id: 1,
    },
    {
        title: 'SOLID RESTFUL API Base',
        description:
            'Esquelo de uma aplicação node com alguns princípios do SOLID.',
        image: '/images/rest.jpg',
        tags: ['Typescript', 'Node.js', 'TypeORM', 'Redis', 'Jest', 'Docker'],
        source: 'https://github.com/KleberBarilli/API-Restful-Base',
        // visit: '',
        id: 2,
    },
    {
        title: 'API Queue Mails',
        description:
            'Api em node que envia emails utilizando a AWS Ses, com o Redis para colocar cada email em uma fila. É simples e escalável para aplicações que irão usar Jobs/Workers.',
        image: '/images/bull.png',
        tags: ['Node.js', 'Aws Ses', 'Redis', 'BullMQ'],
        source: 'https://github.com/KleberBarilli/bullmq-redis-node',
        // visit: '',
        id: 3,
    },
    {
        title: 'Youtube MP3 Converter',
        description:
            'Converta vídeos do youtube para MP3 passando a URL. Tudo foi renderizado no servidor pelo express.',
        image: '/images/easy-converter.png',
        tags: ['Node.js', 'Express', 'Axios'],
        source: 'https://github.com/KleberBarilli/easy-converter',
        //visit: '',
        id: 4,
    },

    {
        title: 'Newsletter',
        description:
            'Aplicação que é responsável por inscrever/desinscrever usuários em uma neswletter.',
        image: '/images/node-mongo.png',
        tags: ['Node.js', 'MongoDB'],
        source: 'https://github.com/KleberBarilli/newsletter-api',
        //  visit: '',
        id: 5,
    },
];

export const TimeLineData = [
    { year: 2016, text: 'Started my journey as a new developer.' },
    { year: 2017, text: 'Worked intensively on ROMs & Kernels.' },
    { year: 2018, text: 'Learned Android app development.' },
    { year: 2019, text: 'Finished Diploma in Computer Engineering.' },
    { year: 2020, text: 'Got a scholarship from the Delhi government.' },
    { year: 2021, text: 'Still trying to figure out this weird year.' },
];
export const TimeLineDataPtBr = [
    { year: 2016, text: 'Iniciei como dev exemplo.' },
    { year: 2017, text: 'Iniciei como dev exemplo.' },
    { year: 2018, text: 'Iniciei como dev exemplo.' },
    { year: 2019, text: 'Iniciei como dev exemplo.' },
    { year: 2020, text: 'Iniciei como dev exemplo.' },
    { year: 2021, text: 'Iniciei como dev exemplo.' },
];
