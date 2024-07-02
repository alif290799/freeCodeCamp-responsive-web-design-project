import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/navbar/Header";
import Navbar from "./components/navbar/Navbar";
import FirstPage from "./pages/first-page/FirstPage";
import SecondPage from "./pages/second-page/SecondPage";
import ThirdPage from "./pages/third-page/ThirdPage";
import FourthPage from "./pages/fourth-page/FourthPage";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <SmoothScroll>
                <div className="relative">
                    <Header>
                        <Navbar />
                    </Header>
                    <FirstPage />
                    <SecondPage />
                    <ThirdPage />
                    <FourthPage />
                    <Footer />
                </div>
            </SmoothScroll>
        </>
    );
};

export default App;
