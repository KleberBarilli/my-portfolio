import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from 'react-icons/ai';

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
} from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';
import { getLocale } from '../../shared/etc';

const Header = () => {
    const router = useRouter();
    const _locale = getLocale();
    const title =
        _locale === 'pt-BR' ? 'Switch to English' : 'Mude para Português';

    return (
        <Container>
            <Div1>
                <Button
                    onClick={() => {
                        router.push('/#', '#', {
                            locale: _locale === 'pt-BR' ? 'en-US' : 'pt-BR',
                        });
                    }}
                >
                    {title}
                </Button>
            </Div1>
            <Div2>
                <li>
                    <Link href="#projects">
                        <NavLink>
                            {_locale === 'pt-BR' ? 'Projetos' : 'Projects'}
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#skills">
                        <NavLink>
                            {' '}
                            {_locale === 'pt-BR' ? 'Habilidades' : 'Skills'}
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="#about">
                        <NavLink>
                            {' '}
                            {_locale === 'pt-BR' ? 'Sobre' : 'About'}
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <a
                        href="https://medium.com/@kleber.barilli73"
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <NavLink>Medium</NavLink>
                    </a>
                </li>
            </Div2>
            <Div3>
                <SocialIcons href="https://github.com/lordarcadius">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/lordarcadius/">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.instagram.com/lordarcadius">
                    <AiFillInstagram size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.twitter.com/lordarcadius">
                    <AiFillTwitterCircle size="3rem" />
                </SocialIcons>
            </Div3>
        </Container>
    );
};

export default Header;
