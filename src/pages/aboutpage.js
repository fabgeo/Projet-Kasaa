import React from "react";
import Header from './../components/header';
import Footer from './../components/footer';
import { Banner2 } from './../components/banner';
import Layout from './../components/layout';
import About from './../components/about';

const AboutPage = () => {
    return (
        <>
            <Layout>
                <Header />
                <Banner2 />
                <About />
            </Layout>
            <Footer />
        </>
    );
};

export default AboutPage;