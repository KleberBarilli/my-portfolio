import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import {
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    SocialContainer,
    SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:kleber.barilli73@gmail.com">
                        kleber.barilli73@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/KleberBarilli">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/kleber-barilli/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/kleber.ts/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://twitter.com/kleber_ts">
                        <AiFillTwitterCircle size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
