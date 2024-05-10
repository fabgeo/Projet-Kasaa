import React from "react";
import Header from './../components/header';
import Footer from './../components/footer';
import LogementsPage from './../components/logements-page';
import Layout from './../components/layout';


const LogementPage = () => {
    return (
        <>
            <Layout>
                <Header />
                <LogementsPage />
            </Layout>
            <Footer />
        </>
    );
};

export default LogementPage;