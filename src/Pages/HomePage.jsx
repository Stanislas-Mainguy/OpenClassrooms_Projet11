import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./HomePageErrorBoundaries";
import Header from "../components/Organisms/Header/Header";
import Main from "../components/Organisms/Main/Main";
import Footer from "../components/Organisms/Footer/Footer";
import ErrorPage404 from "../components/Organisms/ErrorPage404/ErrorPage404";

const HomePage = () => {
    return (
        <ErrorBoundary>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<Main />} />
                <Route path="/profile" element={<Main isAuthenticated={true} />} />
                <Route path="*" element={<ErrorPage404 />} />
            </Routes>
            <Footer />
        </ErrorBoundary>
    );
};

export default HomePage;
