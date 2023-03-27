/* eslint-disable react/no-unescaped-entities */
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

const Technologies = () => (
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
                        <ListTitle>{Skill.title}</ListTitle>
                        <ListParagraph>
                            {/* <Skill.Description /> */}
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
