import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from './TechnologiesStyles';
import { Skills } from './Skills';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SkillText = ({ title, description }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <>
            <ListTitle
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {title}
            </ListTitle>

            <ListParagraph isHovering={isHovering}>{description}</ListParagraph>
        </>
    );
};

const Technologies = () => {
    return (
        <Section id="skills">
            <SectionDivider divider />
            <SectionTitle>Skills</SectionTitle>
            <List>
                {Skills.map((Skill) => (
                    <ListItem key={Skill.slug}>
                        <picture>
                            <Skill.Component size="3rem" />
                        </picture>
                        <ListContainer>
                            <SkillText
                                title={Skill.title}
                                description={Skill.Description()}
                            />
                        </ListContainer>
                    </ListItem>
                ))}
            </List>
            <SectionDivider colorAlt />
        </Section>
    );
};

export default Technologies;
