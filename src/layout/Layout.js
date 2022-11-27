/* eslint-disable react/prop-types */
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header nav1="TEST" nav2="TEST" nav3="TEST" nav4="TEST" />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};
