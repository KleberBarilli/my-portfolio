import { getLocale } from '../../shared/etc';

export function myHero() {
    const locale = getLocale();

    const overview = {
        title: locale === 'pt-BR' ? 'Olá,' : 'Hey there,',
        description:
            locale === 'pt-BR'
                ? 'Meu nome é Kleber Barilli. Sou um desenvolvedor backend que trabalha com NodeJS, Java e Python.'
                : 'Hey there, I am Kleber Barill. I am a backend developer who works with NodeJS, Java and Python.',
        resume: locale === 'pt-BR' ? 'Meu Currículo' : 'My Resume',
    };

    return overview;
}
