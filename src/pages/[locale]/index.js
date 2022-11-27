import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import i18nextConfig from '../../../next-i18next.config';
import { getI18nPaths } from '../../../getI18nPaths';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { StaticI18nLink } from '../../components/18nLink/Static';

const Homepage = () => {
    const { t, i18n } = useTranslation('common');

    return (
        <>
            <main>
                <Header
                    nav1={t('nav1')}
                    nav2={t('nav2')}
                    nav3={t('nav3')}
                    nav4={t('nav4')}
                    title={t('title')}
                />
                <div>
                    <StaticI18nLink
                        href="/"
                        locale={i18n.language === 'pt' ? 'en' : 'pt'}
                    >
                        <button>{t('change-locale')}</button>
                    </StaticI18nLink>
                    <StaticI18nLink href="/second-page">
                        <button type="button">{t('to-second-page')}</button>
                    </StaticI18nLink>
                </div>
            </main>
            <Footer />
        </>
    );
};

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
});

export const getStaticProps = async (ctx) => ({
    props: {
        ...(await serverSideTranslations(
            ctx?.params?.locale,
            ['common', 'footer'],
            i18nextConfig
        )),
    },
});

export default Homepage;
