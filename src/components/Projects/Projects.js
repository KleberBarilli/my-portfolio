import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />

                        <HeaderThree title={p.title}>{p.title}</HeaderThree>
                        <Hr />

                        <CardInfo className="card-info">
                            {p.description}
                        </CardInfo>
                        <div>
                            <TitleContent>Tech Stack</TitleContent>
                            <Hr />
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            {p.visit ? (
                                <ExternalLinks href={p.visit}>
                                    Live Preview
                                </ExternalLinks>
                            ) : undefined}
                            {p.source ? (
                                <ExternalLinks
                                    href={p.source}
                                    target={'_blank'}
                                >
                                    Source Code
                                </ExternalLinks>
                            ) : undefined}
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;
