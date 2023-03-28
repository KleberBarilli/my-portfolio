import { getLocale } from '../../shared/etc';

export function mySkills() {
    const locale = getLocale();

    const skills = {
        typescript:
            'Superset of JavaScript that adds static types to code to make it more robust and readable',
        node: 'Open-source JavaScript platform for developing scalable and high-performance network applications',
        java: 'Object-oriented programming language widely used in enterprise application development',
        python: 'High-level programming language popular for web development, scientific computing, and data analysis',
        postgresql:
            'Open-source relational database management system known for its security and scalability',
        mysql: 'Open-source relational database management system widely used',
        mongodb:
            'Object-oriented document NoSQL database, scalable and high-performance',
        redis: 'In-memory key-value database used for caching and session management',
        rabbitMq:
            'Open-source messaging system that enables communication between processes, applications, and distributed systems',
        git: 'The best code versioning tool, usually upload my codes on Github. But I have also used Bitbucket a lot',
        nestjs: 'TypeScript framework for developing highly scalable and efficient server-side applications',
        prisma: 'Modern and scalable object-relational mapping (ORM) library for SQL databases',
        maven: 'Build and dependency management tool for Java projects',
        spring: 'Java application framework that provides features for developing web and business applications',
        junit: 'Unit testing framework for Java that provides enhanced testing features',
        flask: 'Lightweight Python web framework for building simple and scalable web applications',
        pandas: 'Python data analysis library, providing data structures and tools for data manipulation and analysis',
        jupyter:
            'Open-source platform for creating and sharing documents containing executable code, visualizations, and narrative text',
        aws: 'Amazon Web Services, a cloud computing platform that offers IT infrastructure services',
        heroku: 'Cloud platform that allows deployment, execution, and management of applications in multiple programming languages',
        docker: 'Containerization platform that allows the creation, execution, and management of applications in isolated and portable environments',
    };
    const skillsPtBr = {
        typescript:
            'Superset do JavaScript que adiciona tipos estáticos ao código para torná-lo mais robusto e legível',
        node: 'Plataforma JavaScript de código aberto para desenvolvimento de aplicações de rede escaláveis e de alta performance',
        java: 'Linguagem de programação orientada a objetos que é amplamente utilizada em desenvolvimento de aplicações empresariais',
        python: 'Linguagem de programação de alto nível que é popular para desenvolvimento de aplicações web, científicas e de análise de dados',
        postgresql:
            'Sistema de gerenciamento de banco de dados relacional de código aberto, conhecido por sua segurança e escalabilidade',
        mysql: 'Sistema de gerenciamento de banco de dados relacional de código aberto amplamente utilizado',
        mongodb:
            'Banco de dados NoSQL de documento orientado a objetos, escalável e de alta performance',
        redis: 'Banco de dados de chave-valor em memória, usado para armazenamento em cache e gerenciamento de sessão',
        rabbitMq:
            'Sistema de mensagens open-source que permite comunicação entre processos, aplicações e sistemas distribuídos',
        git: 'O melhor versionador de códigos, geralmente subo meus códigos no github. Mas já usei bastante o bitbucket',
        nestjs: 'Framework em TypeScript para desenvolvimento de aplicações server-side altamente escaláveis e eficientes',
        prisma: 'Biblioteca de mapeamento objeto-relacional (ORM) moderna e escalável para bancos de dados SQL',
        maven: 'Ferramenta de gerenciamento de build e dependências para projetos em Java',
        spring: 'Framework de aplicação Java que fornece recursos para desenvolvimento de aplicações web e de negócios',
        junit: 'Framework de testes unitários para Java que fornece recursos aprimorados para testes',
        flask: 'Framework web leve em Python para construção de aplicações web simples e escaláveis',
        pandas: 'Biblioteca de análise de dados em Python, fornecendo estruturas de dados e ferramentas para manipulação e análise de dados',
        jupyter:
            'Plataforma de código aberto para criação e compartilhamento de documentos que contenham código executável, visualizações e texto narrativo',
        aws: 'Amazon Web Services, uma plataforma de computação em nuvem que oferece serviços de infraestrutura de TI',
        heroku: 'Plataforma em nuvem que permite a implantação, execução e gerenciamento de aplicativos em várias linguagens de programação',
        docker: 'Plataforma de conteinerização que permite a criação, execução e gerenciamento de aplicativos em ambientes isolados e portáteis',
    };
    return locale === 'pt-BR' ? skills : skillsPtBr;
}
