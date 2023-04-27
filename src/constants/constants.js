export const projects = [
    {
        title: 'PsicoID',
        description:
            'MVP backend of PsicoID, an app for scheduling psychologists.',
        image: '/images/psico-id.png',
        tags: ['Typescript', 'Prisma', 'React Native'],
        source: 'https://github.com/KleberBarilli/MVP-Psicoid-Backend',
        //  visit: 'https://www.psicoid.com.br/',
        id: 0,
    },
    {
        title: 'My finances - Microservices',
        description:
            'Project to deepen my knowledge in NestJS and its integration with microservices. In this application, I use RabbitMQ as a message broker between all applications.',
        image: '/images/nest.png',
        tags: ['Typescript', 'Nest', 'RabbitMQ', 'Prisma'],
        source: 'https://github.com/KleberBarilli/my-finances-microservices/',
        //visit: '',
        id: 1,
    },
    {
        title: 'Spring Rest API',
        description:
            'Rest API for a delivery system developed in Java with Springboot.',
        image: '/images/rest.jpg',
        tags: ['Java', 'Springboot', 'JPA', 'MySQL', 'Flyway', 'Lombok'],
        source: 'https://github.com/KleberBarilli/Spring-Rest',
        // visit: '',
        id: 2,
    },
    {
        title: 'API Queue Mails',
        description:
            'Node API that sends emails using AWS Ses, with Redis to put each email in a queue. It is simple and scalable for applications that will use Jobs/Workers.',
        image: '/images/bull.png',
        tags: ['Node.js', 'Aws Ses', 'Redis', 'BullMQ'],
        source: 'https://github.com/KleberBarilli/bullmq-redis-node',
        // visit: '',
        id: 3,
    },
    {
        title: 'Youtube MP3 Converter',
        description:
            'Convert YouTube videos to MP3 by passing the URL. Everything was rendered on the server by Express.',
        image: '/images/easy-converter.png',
        tags: ['Node.js', 'Express', 'Axios'],
        source: 'https://github.com/KleberBarilli/easy-converter',
        //visit: '',
        id: 4,
    },
    {
        title: 'Newsletter',
        description:
            'Application that is responsible for subscribing/unsubscribing users to a newsletter.',
        image: '/images/node-mongo.png',
        tags: ['Node.js', 'MongoDB'],
        source: 'https://github.com/KleberBarilli/newsletter-api',
        // visit: '',
        id: 5,
    },
];
export const projectsPtBr = [
    {
        title: 'PsicoID',
        description:
            'Backend MVP do psicoID, app para agendamento de psicólogos. Foi escrito em typescript utilizando node.',
        image: '/images/psico-id.png',
        tags: ['Typescript', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis'],
        source: 'https://github.com/KleberBarilli/MVP-Psicoid-Backend',
        // visit: 'https://www.psicoid.com.br/',
        id: 0,
    },
    {
        title: 'Spring Rest API',
        description:
            'API Rest  de um sistema de entregas desenvolvida em Java com Springboot.',
        image: '/images/rest.jpg',
        tags: ['Java', 'Springboot', 'JPA', 'MySQL', 'Flyway', 'Lombok'],
        source: 'https://github.com/KleberBarilli/Spring-Rest',
        // visit: '',
        id: 1,
    },
    {
        title: 'Nest.js Microservices',
        description:
            'Projeto para aprofundar meus conhecimentos em NestJS e sua integração com microserviços. Nessa aplicação, uso o RabbitMQ como servidor de mensageria entre todas as aplicações',
        image: '/images/nest.png',
        tags: ['Typescript', 'Nest', 'RabbitMQ', 'Prisma'],
        source: 'https://github.com/KleberBarilli/my-finances-microservices/',
        //visit: '',
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
            'Converta vídeos do youtube para MP3 passando a URL. Feito em Angular 15.0.',
        image: '/images/easy-converter.png',
        tags: ['Angular', 'Typescript'],
        source: 'https://github.com/KleberBarilli/easy-converter-v1',
        visit: 'https://easy-converter-beta.vercel.app/',
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
    {
        year: 2018,
        text: 'I started my journey as a Python developer, a language that provided me with a great learning experience in programming logic. Through Python, I learned to develop algorithms and understand fundamental programming concepts. Additionally, I had the opportunity to deepen my knowledge in databases and other essential technologies for software development.',
    },
    {
        year: 2019,
        text: 'I started my career as a programmer, and was able to deepen my knowledge in Python for web scraping with crawlers and data processing. Additionally, I had the opportunity to further explore data science techniques, learning new techniques in exploratory data analysis and data visualization.',
    },
    {
        year: 2020,
        text: 'During 2020, I had the opportunity to work with Java in the Spring ecosystem, where I was able to evolve my language skills and learn new concepts. Additionally, I gained experience in front-end frameworks such as Angular and React, thereby expanding my range of skills in web application development.',
    },
    {
        year: 2021,
        text: 'I graduated in Computer Science at Atitus Passo Fundo and began to specialize in Node.js.',
    },
    {
        year: 2022,
        text: 'I worked hard as a backend developer, focused on specializing in Node.js. It was a year of intense learning, in which I improved my programming skills, software architecture, and problem-solving skills. Working with Node.js allowed me to develop scalable and high-performance applications.',
    },
    {
        year: 2023,
        text: 'For the year 2023, I intend to continue improving as a developer, working on projects with Node.js and deepening my knowledge with the Nest.js framework. Additionally, I am also investing in specializing in Java in the Spring ecosystem, to expand my skills and possibilities in the development field.',
    },
];
export const TimeLineDataPtBr = [
    {
        year: 2018,
        text: 'Comecei minha caminhada como desenvolvedor Python, uma linguagem que me proporcionou um grande aprendizado em lógica de programação. Através do Python, aprendi a desenvolver algoritmos e a entender conceitos fundamentais de programação. Além disso, tive a oportunidade de aprofundar meus conhecimentos em banco de dados e outras tecnologias essenciais para o desenvolvimento de softwares.',
    },
    {
        year: 2019,
        text: 'Iniciei minha carreira de programador, pude aprofundar meus conhecimentos em Python para a realização de scraping com crawlers e tratamento de dados. Além disso, tive a oportunidade de me aprofundar ainda mais em técnicas de ciência de dados, aprendendo novas técnicas de análise exploratória e visualização de dados.',
    },
    {
        year: 2020,
        text: 'Durante o ano de 2020, tive a oportunidade de trabalhar com Java no ecossistema Spring, onde pude evoluir na linguagem na linguagem e aprender novos conceitos. Além disso, também adquiri experiência em frameworks do frontend como Angular e React, ampliando assim meu leque de habilidades em desenvolvimento de aplicações web.',
    },
    {
        year: 2021,
        text: 'Me formei em Ciência da Computação na Atitus Passo fundo e comecei a me especializar em Node.js.',
    },
    {
        year: 2022,
        text: 'Trabalhei arduamente como desenvolvedor backend, focado na especialização em Node.js. Foi um ano de intenso aprendizado, no qual aprimorei minhas habilidades em programação, arquitetura de software e resolução de problemas complexos. Trabalhar com Node.js me proporcionou a oportunidade de desenvolver aplicações escaláveis e de alta performance.',
    },
    {
        year: 2023,
        text: 'Para o ano de 2023, pretendo continuar me aprimorando como desenvolvedor, trabalhando em projetos com Node.js e aprofundando meus conhecimentos com o framework Nest.js. Além disso, também estou investindo em me especializar em Java no ecossistema Spring, para ampliar minhas habilidades e possibilidades de atuação na área de desenvolvimento.',
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
        'Breve linha do tempo de como estou evoluindo desde que comecei na área de tecnologia.',
};
