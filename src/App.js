import React from "react";
import SmoothScroll from "../src/components/SmoothScroll";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import FirstPage from "./pages/first-page/FirstPage";
import SecondPage from "./pages/second-page/SecondPage";
import ThirdPage from "./pages/third-page/ThirdPage";
import FourthPage from "./pages/fourth-page/FourthPage";
import Footer from "./components/Footer";

const pages = [<FirstPage />, <SecondPage />, <ThirdPage />, <FourthPage />];

const App = () => {
    return (
        <>
            <SmoothScroll>
                <div className="relative">
                    <Header>
                        <Navbar />
                    </Header>
                    <main>
                        {pages.map((page) => (
                            <Section>{page}</Section>
                        ))}
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </>
    );
};

export default App;
