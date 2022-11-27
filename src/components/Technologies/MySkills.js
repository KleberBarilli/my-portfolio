import { getLocale } from '../../shared/etc';

export function mySkills() {
    const locale = getLocale();

    const skills = {
        node: `Node is the technology I know the most about. I've done several projects and I'm still working on it.`,
        typescript: 'The main language with which I write my code.',
        java: `I can get along fine with java's springboot, I am trying to gradually evolve the ecosystem as a whole.`,
        python: 'I used to work with python, today I take it more as a hobby, sometimes I make some report generation scripts :)',
        postgresql:
            'My favorite relational database, I have used it in many projects.',
        mongodb:
            'The collections database I have used the most. Usually in conjunction with mongoose.',
        redis: 'AI am still evolving, I like to use it for queues and for data caching.',
        rabbitMq: 'In learning to connect with microservices.',
        git: `The best code versioner, I usually upload my code to github. But I've used bitbucket quite a bit.`,
    };
    const skillsPtBr = {
        node: 'Node é a tecnologia que mais domino. Já fiz vários projetos e continuo trabalhando nela.',
        typescript: 'A principal linguagem com que escrevo meus códigos.',
        java: 'Consigo me virar bem com o springboot do java, estou tentando evoluir aos poucos no ecossistema ao todo.',
        python: 'Já trabalhei com python, hoje em dia levo mais como hobbie, algumas vezes faços uns scripts de geração de relatórios :)',
        postgresql:
            'O meu banco relacional favorito, já usei em muitos projetos.',
        mongodb:
            'O banco de dados de collections que mais utilizei. Geralmente em conjunto com o mongoose.',
        redis: 'Ainda estou evoluindo, gosto de usar para queues e para cache de dados.',
        rabbitMq: 'Em aprendizado para se conectar com microserviços.',
        git: 'O melhor versionador de códigos, geralmente subo meus códigos no github. Mas já usei bastante o bitbucket.',
    };
    return locale === 'pt-BR' ? skillsPtBr : skills;
}
