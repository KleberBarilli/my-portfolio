import i18nextConfig from '../../next-i18next.config';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

export const getStaticProps = () => {
    const { locales } = i18nextConfig.i18n;
    console.log(locales);
    return {
        props: {
            locales,
        },
    };
};

// eslint-disable-next-line react/prop-types
const Home = ({ locales }) => {
    return (
        <Layout>
            <Section grid>
                <Hero />
                <BgAnimation />
            </Section>

            <Projects />
            <Technologies />
            <Timeline />
            {/* <Acomplishments /> */}
        </Layout>
    );
};

export default Home;
