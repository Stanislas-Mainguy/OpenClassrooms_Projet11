import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./HomePageErrorBoundaries";
import Header from "../components/Organisms/Header/Header";
import Main from "../components/Organisms/Main/Main";
import Footer from "../components/Organisms/Footer/Footer";

const HomePage = () => {
    return (
        <ErrorBoundary>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/signin" element={<Main signIn={true} />} />
                <Route path="/profile" element={<Main isAuthenticated={true} />} />
            </Routes>
            <Footer />
        </ErrorBoundary>
    );
};

export default HomePage;
