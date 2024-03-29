import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { myHero } from './HeroText';

const Hero = () => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    {myHero().title}
                </SectionTitle>
                <SectionText>{myHero().description}</SectionText>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.open('/files/resume.pdf', '_blank');
                    }}
                >
                    {myHero().resume}
                </Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
