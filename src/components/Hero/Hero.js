import {
    Section,
    SectionText,
    SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hey there,
                </SectionTitle>
                <SectionText>
                    Hey there, This is Kleber Barill. I am a backend developer
                    who works with NodeJS, Java and Python.
                </SectionText>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/files/resume.pdf';
                    }}
                >
                    My Resume
                </Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
