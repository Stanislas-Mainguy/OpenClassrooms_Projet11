import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorBoundary from "./HomePageErrorBoundaries";
import Header from "../components/Organisms/Header/Header";
import Main from "../components/Organisms/Main/Main";
import Footer from "../components/Organisms/Footer/Footer";
import ErrorPage404 from "../components/Organisms/ErrorPage404/ErrorPage404";

const HomePage = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <ErrorBoundary>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/login" element={<Main />} />
                <Route path="/profile" element={
                    isAuthenticated ? <Main isAuthenticated={true} /> 
                    : 
                    <Navigate replace to="/login" /> } /> 
                <Route path="*" element={<ErrorPage404 />} />
            </Routes>
            <Footer />
        </ErrorBoundary>
    );
};

export default HomePage;
