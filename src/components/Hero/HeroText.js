import { getLocale } from '../../shared/etc';

export function myHero() {
    const locale = getLocale();

    const overview = {
        title: locale === 'en-US' ? 'Hey there,' : 'Olá,',
        description:
            locale === 'en-US'
                ? 'Hey there, I am Kleber Barill. I am a backend developer who works with NodeJS, Java and Python.'
                : 'Meu nome é Kleber Barilli. Sou um desenvolvedor backend que trabalha com NodeJS, Java e Python.',
        resume: locale === 'en-US' ? 'My Resume' : 'Baixe Meu Currículo',
    };

    return overview;
}
